import React, { useState } from 'react';
import './App.css';
import { FaSquareXmark } from "react-icons/fa6";
import LargeDropDown from './components/LargeDropDown';
import ToggleSwitch from './components/ToggleSwitch';
import DragAndDrop from './components/FileDrop';
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMiniDocumentText } from "react-icons/hi2";
import { BsFileEarmarkImage } from "react-icons/bs";
import { TbClockHour7 } from "react-icons/tb";
import { useUpload } from './hooks';
import { Button } from "@mui/material";
//
const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  height: 10%;
`;
//
function App() {
  //
  const [optionSelected, setOptionSelected] = useState<string>("")
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0)
  //
  const options = () => {
    return ["Option 1", "Option 2", "Option 3"]
  }
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
        <div style={{display: "flex", flexDirection: "column"}}>
          <div className='subCon'>
            <div className='mainInfoCon'>
              <div className='subInfoCon1'>
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
                  <div className='dragSubCon'>
                    <div className='docIconMain'>
                      <DragAndDrop />
                    </div>
                    <div className='uploadMain'>
                      <Button
                        variant="contained"
                        component="label"
                        style={{backgroundColor: "#0b125c"}}
                        //id="csv-buttonUpload"
                        className='uploadBtn'
                        //color='#0b125c'
                        //disabled={disUpload}
                      >
                        Upload Manifest
                        <input
                          type="file"
                          id="myfile"
                          accept=".pdf, .jpg"
                          //onChange={(e) => e.target.files && handleChangeFile(e)}
                          //onClick={onInputClick}
                          hidden
                        />
                      </Button>  
                    </div>
                  </div>
                </div>
                <div className='Divider2'></div>
                <div className='fileMain'>
                  <BsFileEarmarkImage size={22} color='#ed8e11' />
                  <div style={{paddingLeft: 10}}>
                    <div style={{display: "flex", flexDirection:"row", width: "35vw", justifyContent: "space-between", marginBottom: 3}}>
                      <p style={{margin: 0, fontSize: 8, color: "gray"}}>WN-DAL-0726-NH20166.csv</p>
                      <p style={{margin: 0, fontSize: 8}}>5.7MB</p>
                    </div>
                    <div style={{display:"flex", flexDirection: "row"}}>
                      <div className='Divider5'></div>
                      <div className='Divider6'></div>
                    </div>
                  </div>
                </div>
                <div className='Divider2'></div>
                <div className='Divider3'></div>
                  <p style={{fontSize: 13, marginBottom: 0, fontWeight: "500"}}>Elapse Data Checking:</p>
                  <p style={{fontSize: 13, marginTop: 5, color: "#24c90a", marginBottom: 5}}>No Elapse Dates!</p>
                <div className='Divider3'></div>
                <p style={{fontSize: 13, marginBottom: 0, fontWeight: "500", marginTop: 5}}>Tolerance Window:</p>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <ToggleContainer>
                    <ToggleSwitch />
                  </ToggleContainer>
                  <p style={{fontSize: 13, marginLeft: 5}}>Toggle ON</p>
                  <div className='Divider4'></div>
                  <TbClockHour7 size={20} />
                  <p style={{fontSize: 13, marginLeft: 5}}>Select Tolerance Level</p>
                </div>
              </div>
              <div className='subInfoCon2'>
                <p style={{fontSize: 13, marginTop: 0, marginBottom: 5 }}>Split schedule using social distancing?</p>
                <div className='radioBtnCon'>
                  <label style={{fontSize: 12, display: "flex", alignItems: "center"}}>
                    <input type="radio" value="Yes" checked={true} style={{accentColor: "#0b125c"}} className='radioBtn'/>
                    Yes
                  </label>
                  <label style={{fontSize: 12, display: "flex", alignItems: "center", marginLeft: 10}}>
                    <input type="radio" value="Yes" checked={false} style={{accentColor: "#0b125c"}} className='radioBtn'/>
                    No
                  </label>
                </div>
                <div className='Divider3'></div>
                <p style={{fontSize: 13, marginBottom: 0, fontWeight: "500"}}>Location Checking:</p>
                <p style={{fontSize: 13, marginTop: 5, color: "#24c90a", marginBottom: 10}}>All Available!</p>
                <div className='Divider3'></div>
                <p style={{fontSize: 13, marginTop: 15, marginBottom: 5 }}>Client:</p>
                <div className='radioBtnCon'>
                  <label style={{fontSize: 12, display: "flex", alignItems: "center"}}>
                    <input type="radio" value="Yes" checked={false} style={{accentColor: "#0b125c"}} className='radioBtn'/>
                    Single
                  </label>
                  <label style={{fontSize: 12, display: "flex", alignItems: "center", marginLeft: 10}}>
                    <input type="radio" value="Yes" checked={true} style={{accentColor: "#0b125c"}} className='radioBtn'/>
                    Multiple
                  </label>
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <p style={{fontSize: 13}}>Testing Center 1</p>
                  <button className='selectClient'>
                    <p style={{margin: 0, fontSize: 12}}>Select Client</p>
                    <RiArrowDropDownLine size={25} />
                  </button>
                  <TbClockHour7 size={20} style={{marginLeft: 5}} />
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <p style={{fontSize: 13}}>Testing Center 2</p>
                  <button className='selectClient'>
                    <p style={{margin: 0, fontSize: 12}}>Select Client</p>
                    <RiArrowDropDownLine size={25} />
                  </button>
                  <TbClockHour7 size={20} style={{marginLeft: 5}} />
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <p style={{fontSize: 13}}>Testing Center 3</p>
                  <button className='selectClient'>
                    <p style={{margin: 0, fontSize: 12}}>Select Client</p>
                    <RiArrowDropDownLine size={25} />
                  </button>
                  <TbClockHour7 size={20} style={{marginLeft: 5}} />
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <p style={{fontSize: 13}}>Testing Center 4</p>
                  <button className='selectClient'>
                    <p style={{margin: 0, fontSize: 12}}>Select Client</p>
                    <RiArrowDropDownLine size={25} />
                  </button>
                  <TbClockHour7 size={20} style={{marginLeft: 5}} />
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <p className='messageText'>Data in the import file is correct. Please press Continue to import.</p>
              <div style={{width: "45vw", display: "flex", justifyContent: "space-evenly"}}>
                <button className='continBtn'>
                  <text>Continue Import</text>
                </button>
                <button className='cancelBtn'>
                  <text>Cancel</text>
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
