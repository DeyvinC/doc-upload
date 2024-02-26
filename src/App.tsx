import React from 'react';
import './App.css';
import { FaSquareXmark } from "react-icons/fa6";
import ToggleSwitch from './components/ToggleSwitch';
import DragAndDrop from './components/FileDrop';
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFileEarmarkImage } from "react-icons/bs";
import { Button } from "@mui/material";
import { PiClockThin } from "react-icons/pi";
//
const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  height: 10%;
`;
//
const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
//
function App() {
  //
  // const options = () => {
  //   return ["Option 1", "Option 2", "Option 3"]
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
        <div style={{display: "flex", flexDirection: "column"}}>
          <div className='subCon'>
            <div className='mainInfoCon'>
              <div className='subInfoCon1'>
                <button className='selImportBtn'>
                  <p style={{margin: 3, fontSize: 13, color: "#0b125c", fontWeight: "bold"}}>Select Import Name:</p>
                  <RiArrowDropDownLine size={25} />
                </button>
                {/* {showDropDown && (
                  <LargeDropDown options={options()} showDropDown={false}  />
                )} */}
                <div className='Divider1'></div>
                <p style={{fontSize: 13, color: "#0b125c", fontWeight: "bold"}}>Select a manifest that you'd like to import</p>
                <div className='dragMainCon'>
                  <div className='dragSubCon'>
                    <div className='docIconMain'>
                      <DragAndDrop />
                    </div>
                    <div className='uploadMain'>
                      {/* <Button
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
                      </Button>   */}
                      <button className='uploadBtn'>
                         <p style={{fontSize: 13, margin: 2 }}>Upload Manifest</p>
                         {/* <input
                          type="file"
                          id="myfile"
                          accept=".pdf, .jpg"
                          //onChange={(e) => e.target.files && handleChangeFile(e)}
                          //onClick={onInputClick}
                          hidden
                        /> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className='Divider2'></div>
                <div className='fileMain'>
                  <BsFileEarmarkImage size={22} color='#ed8e11' />
                  <div style={{paddingLeft: 10}}>
                    <div style={{display: "flex", flexDirection:"row", width: "31vw", justifyContent: "space-between", marginBottom: 3}}>
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
                  <p style={{fontSize: 13, marginBottom: 0, fontWeight: "bold", color: "#0b125c"}}>Elapse Data Checking:</p>
                  <p style={{fontSize: 13, marginTop: 5, color: "#24c90a", marginBottom: 5, fontWeight: "bold"}}>No Elapse Dates!</p>
                <div className='Divider3'></div>
                <p style={{fontSize: 13, marginBottom: 0, fontWeight: "bold", marginTop: 5, color: "#0b125c"}}>Tolerance Window:</p>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <ToggleContainer>
                    <ToggleSwitch />
                  </ToggleContainer>
                  <p style={{fontSize: 13, marginLeft: 5, color: "#0b125c", fontWeight: "200"}}>Toggle ON</p>
                  <div className='Divider4'></div>
                  {/* <TbClockHour7 size={20} color='#0b125c' style={{fontWeight: "200"}} /> */}
                  <PiClockThin size={20} color='#0b125c' />
                  <p style={{fontSize: 13, marginLeft: 5, color: "#0b125c", fontWeight: "200"}}>Select Tolerance Level</p>
                </div>
              </div>
              <div className='subInfoCon2'>
                <p style={{fontSize: 13, marginTop: 0, marginBottom: 5, fontWeight: "bold", color: "#0b125c" }}>Split schedule using social distancing?</p>
                <div className='radioBtnCon'>
                  <label style={{fontSize: 12, display: "flex", alignItems: "center", fontWeight: "200", color: "#0b125c"}}>
                    <input type="radio" value="Yes" checked={true} style={{accentColor: "#0b125c"}} className='radioBtn'/>
                    Yes
                  </label>
                  <label style={{fontSize: 12, display: "flex", alignItems: "center", marginLeft: 10, fontWeight: "200", color: "#0b125c"}}>
                    <input type="radio" value="Yes" checked={false} style={{accentColor: "#0b125c"}} className='radioBtn'/>
                    No
                  </label>
                </div>
                <div className='Divider3'></div>
                <p style={{fontSize: 13, marginBottom: 0, fontWeight: "bold", color: "#0b125c"}}>Location Checking:</p>
                <p style={{fontSize: 13, marginTop: 5, color: "#24c90a", marginBottom: 10, fontWeight: "bold"}}>All Available!</p>
                <div className='Divider3'></div>
                <p style={{fontSize: 13, marginTop: 15, marginBottom: 5, fontWeight: "bold", color: "#0b125c" }}>Client:</p>
                <div className='radioBtnCon'>
                  <label style={{fontSize: 12, display: "flex", alignItems: "center", fontWeight: "200", color: "#0b125c"}}>
                    <input type="radio" value="Yes" checked={false} style={{accentColor: "#0b125c"}} className='radioBtn'/>
                    Single
                  </label>
                  <label style={{fontSize: 12, display: "flex", alignItems: "center", marginLeft: 10, fontWeight: "200", color: "#0b125c"}}>
                    <input type="radio" value="Yes" checked={true} style={{accentColor: "#0b125c"}} className='radioBtn'/>
                    Multiple
                  </label>
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <p style={{fontSize: 13, width: "9vw", color: "#0b125c", fontWeight: "200"}}>Testing Center 1</p>
                  <button className='selectClient'>
                    <p style={{margin: 0, fontSize: 12, color: "#0b125c", fontWeight: "200"}}>Select Client</p>
                    <RiArrowDropDownLine size={25} color='#0b125c' />
                  </button>
                  {/* <TbClockHour7 size={20} style={{marginLeft: 5}} color='#0b125c' /> */}
                  <PiClockThin size={20} color='#0b125c' style={{marginLeft: 5}} />
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <p style={{fontSize: 13, width: "9vw", color: "#0b125c", fontWeight: "200"}}>Testing Center 2</p>
                  <button className='selectClient'>
                    <p style={{margin: 0, fontSize: 12, color: "#0b125c", fontWeight: "200"}}>Select Client</p>
                    <RiArrowDropDownLine size={25} color='#0b125c' />
                  </button>
                  {/* <TbClockHour7 size={20} style={{marginLeft: 5}} color='#0b125c' /> */}
                  <PiClockThin size={20} color='#0b125c' style={{marginLeft: 5}} />
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <p style={{fontSize: 13, width: "9vw", color: "#0b125c", fontWeight: "200"}}>Testing Center 3</p>
                  <button className='selectClient'>
                    <p style={{margin: 0, fontSize: 12, color: "#0b125c", fontWeight: "200"}}>Select Client</p>
                    <RiArrowDropDownLine size={25} color='#0b125c' />
                  </button>
                  {/* <TbClockHour7 size={20} style={{marginLeft: 5}} color='#0b125c' /> */}
                  <PiClockThin size={20} color='#0b125c' style={{marginLeft: 5}} />
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <p style={{fontSize: 13, width: "9vw", color: "#0b125c", fontWeight: "200"}}>Testing Center 4</p>
                  <button className='selectClient'>
                    <p style={{margin: 0, fontSize: 12, color: "#0b125c", fontWeight: "200"}}>Select Client</p>
                    <RiArrowDropDownLine size={25} color='#0b125c' />
                  </button>
                  {/* <TbClockHour7 size={20} style={{marginLeft: 5}} color='#0b125c' /> */}
                  <PiClockThin size={20} color='#0b125c' style={{marginLeft: 5}} />
                </div>
              </div>
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <p className='messageText'>Data in the import file is correct. Please press Continue to import.</p>
              <div style={{width: "35vw", display: "flex", justifyContent: "space-evenly"}}>
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
