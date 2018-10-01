import React from 'react';

export default function SizeChanger(props) {
  return (
    <select disabled={props.allowEdit==='false'} onChange={(e)=>props.update(parseInt(e.target.value))} className="dropDownContainer">
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}