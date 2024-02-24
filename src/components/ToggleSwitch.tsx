import { useState, ChangeEvent } from "react";
import styled from "styled-components";

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 40px;
  height: 24px;
  background: ${({ checked }) => (checked ? "black" : "#0b125c")};
  display: block;
  border-radius: 100px;
  position: relative;
  display: flex;
  

  &:after {
    content: "";
    position: absolute;
    right: ${({ checked }) => (checked ? "18px" : "calc(10% - 2px)")};
    width: 20px;
    top: 2px;
    height: 20px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

export default function ToggleSwitch() {
  const [switchState, setSwitchState] = useState(false);
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    //console.log("---", e.target.checked);
    setSwitchState(!switchState);
  }
  return (
    <StyledLabel htmlFor="checkbox" checked={switchState}>
      <input
        style={{position: "absolute", opacity: 0}}
        id="checkbox"
        type="checkbox"
        checked={switchState}
        onChange={handleOnChange}
      />
    </StyledLabel>
  );
}