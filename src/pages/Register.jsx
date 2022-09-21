import React, { useState } from 'react';

import { addAvatar } from '../assets/img';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { auth, storage, db } from '../firebase/firebase';

import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${name + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              name,
              photoURL: downloadURL,
            });
            //create user on firestore
            // await setDoc(doc(db, 'users', res.user.uid), {
            //   uid: res.user.uid,
            //   name,
            //   email,
            //   photoURL: downloadURL,
            // });
          } catch (err) {
            console.log(err);
            setError(true);
          }
        });
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="file" id="file" style={{ display: 'none' }} />
          <label htmlFor="file">
            <img src={addAvatar} alt="avatar" />
            <span>Add an avatar</span>
          </label>
          {error && (
            <span style={{ color: 'red', fontSize: '14px' }}>
              Something went wrong while registering... <br /> Please try again
              later
            </span>
          )}
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login </p>
      </div>
    </div>
  );
};

export default Register;
