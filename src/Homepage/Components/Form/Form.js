import React, { Component } from "react";
import base from "./../api/base";
import Heading from "./../Heading/Heading";
import "./Form.css";

import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Age: "",
      Hobbies: "",
      Email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    const { Hobbies, Name, Age, Email } = this.state;

    event.preventDefault();

    base("Kind2Mind").create({Name, Email, Age, Hobbies}, function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
    });


  }
  
  // Method causes to store all the values of the
  // input field in react state single method handle
  // input changes of all the input field using ES6
  // javascript feature computed property names
  handleChange(event) {
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: event.target.value,
    });
  }

  // Return a controlled form i.e. values of the
  // input field not stored in DOM values are exist
  // in react component itself as state
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Heading title="INTERACT" />
        <div className="form-grid">
          <textarea
            name="Name"
            placeholder="Name"
            value={this.state.Name}
            onChange={this.handleChange}
            className="input-box"
          />

          <textarea
            name="Hobbies"
            placeholder="Hobbies"
            value={this.state.Hobbies}
            onChange={this.handleChange}
            className="input-box"
          />

          <textarea
            name="Age"
            placeholder="Age"
            value={this.state.Age}
            onChange={this.handleChange}
            className="input-box"
          />

          <textarea
            name="Email"
            placeholder="Email"
            value={this.state.Email}
            onChange={this.handleChange}
            className="input-box"
          />

<Link to="/VideoCall">
          <button
          disabled={this.state.Name === "" || this.state.Age === "" || this.state.Hobbies === "" || this.state.Email === ""}
          >
               Meet !
          </button>
               </Link>
        </div>
      </form>
    );
  }
}

export default Form;
