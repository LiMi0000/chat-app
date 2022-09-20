import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search for a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/7752804/pexels-photo-7752804.jpeg?cs=srgb&dl=pexels-apunto-group-agencia-de-publicidad-7752804.jpg&fm=jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>James</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
