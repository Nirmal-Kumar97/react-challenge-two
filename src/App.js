import './App.css';
import React, { useState } from 'react';
import Users from './Users';
import Posts from './Posts';
import Comments from './Comments';

function App() {
  const [activeButton, setActiveButton] = useState('Users');

  const handleButtonClick = (Users) => {
    setActiveButton(Users);
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={() => handleButtonClick('Users')}>Users</button>
        <button onClick={() => handleButtonClick('Posts')}>Posts</button>
        <button onClick={() => handleButtonClick('Comments')}>Comments</button>
      </div>
      {activeButton === 'Users' && <Users />}
      {activeButton === 'Posts' && <Posts />}
      {activeButton === 'Comments' && <Comments />}
    </div>
  );
}

export default App;
