import React, { Component } from "react";
import Validation from "react-validation";
// import "../validation.js";
import { FormGroup, Label, Input, FormText } from "reactstrap";
// import "./style.css"
import ValidationForm from "react-validation/build/form";
import ValidationInput from "react-validation/build/input";
import ValidationButton from "react-validation/build/button";

const signUpStyle = {
  marginTop: "5rem"
};

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      msg: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      name: this.state.name,
      email: this.state.email
    };
    console.log(data);
    fetch("/users/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (data === "success") {
          this.setState({ msg: "Thanks for registering" });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div style={signUpStyle} className="container register-form create">
        <ValidationForm onSubmit={this.handleSubmit} method="POST">
          <FormGroup>
            <Label>Name</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <ValidationInput
              onChange={this.logChange}
              className="form-control"
              value=""
              placeholder="John"
              name="name"
              validations={["required"]}
            />
            <FormText>user@email.com</FormText>
          </FormGroup>
          <FormGroup>
            <ValidationInput
              onChange={this.logChange}
              className="form-control"
              value=""
              placeholder="email@email.com"
              name="email"
              validations={["required", "email"]}
            />
            <div className="submit-section" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <ValidationInput
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
          <ValidationButton className="btn btn-uth-submit">Submit</ValidationButton>
        </ValidationForm>
      </div>
    );
  }
}
