import React, { useEffect, useState } from "react";
import { getApiBaseUrl } from "../config";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`${getApiBaseUrl()}/api/admin/bookings`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const deleteBooking = (id) => {
    fetch(`${getApiBaseUrl()}/api/admin/bookings/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBookings(bookings.filter(b => b.id !== id));
    });
  };

  return (
    <div className="container text-white">
      <h2 className="my-4">Admin Dashboard</h2>

      {bookings.map((b) => (
        <div key={b.id} className="card bg-dark p-3 mb-2">
          <p><strong>Name:</strong> {b.name}</p>
          <p><strong>Email:</strong> {b.email}</p>
          <p><strong>Phone:</strong> {b.phone}</p>
          <p><strong>Style:</strong> {b.style}</p>
          <p><strong>Variation:</strong> {b.variation}</p>
          <p><strong>Date:</strong> {b.datetime}</p>

          <button
            className="btn btn-danger"
            onClick={() => deleteBooking(b.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;