import React from 'react';

const Message = () => {
  return (
    <div className="message user">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Content</p>
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
