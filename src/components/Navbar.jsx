import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/7752804/pexels-photo-7752804.jpeg?cs=srgb&dl=pexels-apunto-group-agencia-de-publicidad-7752804.jpg&fm=jpg"
          alt=""
        />
        <span>John</span>
        <button>log out</button>
      </div>
    </div>
  );
};

export default Navbar;
