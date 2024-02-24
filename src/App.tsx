import React, { useState } from 'react';
import './App.css';
import { FaSquareXmark } from "react-icons/fa6";
import LargeDropDown from './components/LargeDropDown';
import { RiArrowDropDownLine } from "react-icons/ri";
//

function App() {
  //
  const [optionSelected, setOptionSelected] = useState<string>("")
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  //
  const options = () => {
    return ["Option 1", "Option 2", "Option 3"]
  }
  //
  // const optionSelection = (options: string): void => {
  //   setOptionSelected(options)
  // }
  //optionSelection={optionSelected}
  return (
    <div className="App">
      <div className='mainCon'>
        <div className='mainTitleCon'>
          <div className='iconCon'>
            <FaSquareXmark color='#0b125c' size={25} />
          </div>
          <div className='headerCon'>
            <p className='headerText'>Document Upload</p>
            <div className='headerDivider'></div>
          </div>
        </div>
        <div className='subCon'>
          <div className='mainInfoCon'>
            <div>
              <button className='selImportBtn'>
                <p style={{margin: 3, fontSize: 13}}>Select Import Name:</p>
                <RiArrowDropDownLine size={25} />
              </button>
              {showDropDown && (
                <LargeDropDown options={options()} showDropDown={false}  />
              )}
              <div className='Divider1'></div>
              <p style={{fontSize: 13}}>Select a manifest that you'd like to import</p>
              <div className='dragMainCon'>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
