import React from 'react';
import ReactDOM from 'react-dom';
import Car_1 from './App.js'; //นำเข้า Class car จาก App.js

class Car2 extends React.Component {
  render() {
    return <h2>I am a {this.props.brand.model}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    const carinfo = {name: "Ford", model: "Mustang"};
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car2 brand={carinfo} />
      </div>
    );
  }
}


const myelement = <Car2 brand="Ford" />;

class CarState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red ",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue "});//เมื่อกดปุ่มจะเปลี่ยน state.color = "blue "
  }
  render() { //ส่ง render ไปยัง getElementById = 'CarState'
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>

        //เมื่อกดปุ่มจะสั้ง function changeColor ทำงาน
        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

//ส่ง render ไปยัง ID = root
ReactDOM.render(<Car_1/>, document.getElementById('Car_1'));
ReactDOM.render(myelement, document.getElementById('Car'));
ReactDOM.render(<Garage />, document.getElementById('root'));
ReactDOM.render(<CarState />, document.getElementById('CarState'));
