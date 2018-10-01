import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFontFamily = this.updateFontFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
  }

updateColor(val){
  this.setState({fontColor: val});
  console.log(this.state.fontColor)
}

updateSize(val){
  this.setState({fontSize: val});
  console.log(this.state.fontSize)
}
updateFontFamily(val){
  this.setState({fontFamily: val});
  console.log(this.state.fontFamily)
}

updateEditStatus(val){
  this.setState({allowEdit: val})
}


  // constructor

  // updateColor

  // updateSize

  // updateFamily

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
         <EditToggle update={this.updateEditStatus}></EditToggle> 
          <ColorChanger allowEdit={this.state.allowEdit} update={this.updateColor}></ColorChanger>
          <SizeChanger allowEdit={this.state.allowEdit} update={this.updateSize}></SizeChanger>{ /* Render SizeChanger */ }
          <FamilyChanger allowEdit={this.state.allowEdit} update={this.updateFontFamily}></FamilyChanger>{ /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          <TextContainer fontColor={this.state.fontColor} fontSize={this.state.fontSize} fontFamily={this.state.fontFamily}></TextContainer>{ /* Render TextContainer */ }
        </div>
      </div>
    )
  }
}

export default App;
