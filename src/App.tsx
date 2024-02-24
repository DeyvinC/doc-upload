import React from 'react';
import './App.css';
import { FaSquareXmark } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <div className='mainCon'>
        <div className='mainTitleCon'>
          <div className='iconCon'>
            <FaSquareXmark color='#0b125c' size={25} />
          </div>
          <div className='headerCon'>
            <p className='headerText'>Document Upload</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
