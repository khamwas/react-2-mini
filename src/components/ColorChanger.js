import React from 'react';

export default function ColorChanger(props) {
  return (
    <select disabled={props.allowEdit==='false'} onChange={(e)=>props.update(e.target.value)} className="dropDownContainer">
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}