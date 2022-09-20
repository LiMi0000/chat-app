import React from 'react';

import { img, attach } from '../assets/img';

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="type something..." />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>send</button>
      </div>
    </div>
  );
};

export default Input;
