from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Temporary in-memory storage (will replace this with a DB later)
bookings = []

@app.route("/api/bookings", methods=["GET"])
def get_bookings():
    return jsonify(bookings), 200

@app.route("/api/bookings", methods=["POST"])
def create_booking():
    data = request.json

    required_fields = ["name", "email", "phone", "style", "variation", "datetime"]

    for field in required_fields:
        if field not in data or not data[field]:
            return jsonify({"error": f"{field} is required"}), 400

    try:
        booking_time = datetime.fromisoformat(data["datetime"])
    except:
        return jsonify({"error": "Invalid datetime format"}), 400

    # 🚨 Prevent double booking (same exact time)
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
        "status": "pending"
    }

    bookings.append(new_booking)

    return jsonify(new_booking), 201

if __name__ == "__main__":
    app.run(debug=True)