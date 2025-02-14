import React from 'react';

const Profile = ({ user }) => {
  // Sample order history data
  const orderHistory = [
    { id: 1, product: "LED Bulb", date: "2023-10-01", total: "$10" },
    { id: 2, product: "Extension Cord", date: "2023-10-05", total: "$15" },
    { id: 3, product: "Smart Plug", date: "2023-10-10", total: "$25" },
  ];

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <div className="profile-details">
          <h3>Personal Information</h3>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Joined:</strong> October 2023</p>
        </div>
        <div className="profile-actions">
          <button className="edit-profile-btn">Edit Profile</button>
          <button className="change-password-btn">Change Password</button>
        </div>
      </div>
      <div className="order-history">
        <h3>Order History</h3>
        {orderHistory.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Profile;