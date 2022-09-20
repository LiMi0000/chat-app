import React from 'react';

import { add, cam, more } from '../assets/img';

import { Messages, Input } from '../components';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>James</span>
        <div className="chatIcons">
          <img src={add} alt="" />
          <img src={cam} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
