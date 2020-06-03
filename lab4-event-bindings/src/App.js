import React, {
  Component
} from 'react';


class App extends Component {
  constructor() {
    super();

    this.handleBtnClick1 = this.handleBtnClick.bind(this);
  }


  handleBtnClick(){
    console.log('handleBtnClick clicked')
  }

  handleBtnClick2 = () =>{
    console.log('handleBtnClick2 clicked')
  }

  render() {
    return ( 
      <div className = "App" >
       {/* This button event triggers at page load because we are asking react to execute a function
       at render, instead binding it. Nothing will happen if click on button */}
       <button onClick={this.handleBtnClick()}> Trigger Me </button>
       {/* All the below buttons event triggers at click because we are asking react to binding it with click event*/} 
       <button onClick={this.handleBtnClick}> Bind Me </button>
       <button onClick={this.handleBtnClick1}> Bind Me</button>
       <button onClick={this.handleBtnClick2}> Bind Me</button>
      </div>
    );
  }
}

export default App;