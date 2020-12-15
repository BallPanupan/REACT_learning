import React from 'react';
import ReactDOM from 'react-dom';
import Carcss from './App.js'

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

        <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }

    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input type='text' name='username' onChange={this.myChangeHandler}/>
        <p>Enter your age:</p>
        <input type='text' name='age' onChange={this.myChangeHandler} />
        {this.state.errormessage}
      </form>
    );
  }
}

class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!.</p>
      </div>
    );
  }
}

//ส่ง render ไปยัง ID = root
ReactDOM.render(myelement, document.getElementById('Car'));
ReactDOM.render(<Garage />, document.getElementById('root'));
ReactDOM.render(<CarState />, document.getElementById('CarState'));
ReactDOM.render(<MyForm />, document.getElementById('MyForm'));
ReactDOM.render(<MyHeader />, document.getElementById('root'));
ReactDOM.render(<Carcss />, document.getElementById('Carcss'));
