import React from 'react';

import { addAvatar } from '../assets/img';

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: 'none' }} />
          <label htmlFor="file">
            <img src={addAvatar} alt="avatar" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login </p>
      </div>
    </div>
  );
};

export default Register;
