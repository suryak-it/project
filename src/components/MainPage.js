import React from 'react';

const MainPage = ({ user }) => {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="video-background">
        <source src="/videos/istockphoto-1436696188-640_adpp_is.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h2>Welcome to SR Electricals!</h2>
        <p>Your one-stop shop for all electrical needs.</p>
      </div>
    </div>
  );
};

export default MainPage;