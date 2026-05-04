import os
import uuid
from datetime import datetime

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

# Temporary in-memory storage (will replace this with a DB later)
bookings = []


def _cors_origins():
    raw = os.environ.get("CORS_ORIGINS", "").strip()
    if not raw:
        return None
    return [o.strip() for o in raw.split(",") if o.strip()]


_origins = _cors_origins()
if _origins:
    CORS(app, origins=_origins)
else:
    CORS(app)


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


@app.route("/api/bookings", methods=["GET"])
def get_bookings():
    return jsonify(bookings), 200


@app.route("/api/bookings", methods=["POST"])
def create_booking():
    data = request.json or {}

    required_fields = ["name", "email", "phone", "style", "variation", "datetime"]

    for field in required_fields:
        if field not in data or not data[field]:
            return jsonify({"error": f"{field} is required"}), 400

    try:
        datetime.fromisoformat(data["datetime"])
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid datetime format"}), 400

    for booking in bookings:
        if booking["datetime"] == data["datetime"]:
            return jsonify({"error": "Time slot already booked"}), 409

    new_booking = {
        "id": str(uuid.uuid4()),
        "name": data["name"],
        "email": data["email"],
        "phone": data["phone"],
        "style": data["style"],
        "variation": data["variation"],
        "datetime": data["datetime"],
        "status": "pending",
    }

    bookings.append(new_booking)

    return jsonify(new_booking), 201


if __name__ == "__main__":
    host = os.environ.get("HOST", "127.0.0.1")
    port = int(os.environ.get("PORT", "5000"))
    debug = os.environ.get("FLASK_DEBUG", "").lower() in ("1", "true", "yes")
    app.run(host=host, port=port, debug=debug)


@app.route("/api/admin/bookings", methods=["GET"])
def admin_get_bookings():
    return jsonify(bookings), 200

@app.route("/api/admin/bookings/<booking_id>", methods=["DELETE"])
def delete_booking(booking_id):
    global bookings
    bookings = [b for b in bookings if b["id"] != booking_id]
    return jsonify({"message": "Deleted"}), 200