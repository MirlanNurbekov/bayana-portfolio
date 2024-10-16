import React, { useState } from 'react';
import './Modal.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSecondModal = (e) => {
    e.preventDefault(); 
    setIsSecondModalOpen(true); 
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false); 
  };

  return (
    <div className="App">
      <button
        className="profile-btn"
        onClick={openModal}
      >Click</button>
      
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Welcome</h2>
            <form className='myForm' onSubmit={openSecondModal}>
              <input className='email' type='text' placeholder='Gmail' required />
              <input className='password' type='password' placeholder='Password' required />
              <input className="sign" type="submit" value="Sign In" />
            </form>

            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      
      {isSecondModalOpen && (
        <div className="modal-overlay" onClick={closeSecondModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Congratulations</h2>
            <p>You are successfully registered</p>
    
            <img 
              src="https://i.gifer.com/g0hA.gif" 
              alt="GIF animation" 
              className="gif" 
              width="400px"
              height="150px"
            />
            <button className="close-button" onClick={closeSecondModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
