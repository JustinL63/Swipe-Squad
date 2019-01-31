import React, {Component} from 'react';
import Validation from 'react-validation';
import "../validation.js";
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import "./style.css"

const signUpStyle = {
    marginTop: '5rem',
};

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            msg: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        var data = {
            name: this.state.name,
            email: this.state.email
        }
        console.log(data)
        fetch("/users/new", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data == "success"){
               this.setState({msg: "Thanks for registering"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }

    render() {
        return (
            <div style={signUpStyle} className="container register-form" className="create">

                <Validation.components.Form onSubmit={this.handleSubmit} method="POST">
        <FormGroup>
          <Label>Name</Label>
                <Input />
        </FormGroup>
        <FormGroup>
                 <Label>Email</Label>
                    <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='John' name='name' validations={['required']}/>
                    <Input />
                    <FormText>user@email.com</FormText>
        </FormGroup>
        <FormGroup>
                    <Validation.components.Input onChange={this.logChange} className="form-control" value='' placeholder='email@email.com' name='email' validations={['required', 'email']}/>
                    <div className="submit-section"/>
        </FormGroup >
        <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password placeholder"
                    />
                    <Input />
        </FormGroup>            
                        <Validation.components.Button className="btn btn-uth-submit">Submit</Validation.components.Button>
                    
                </Validation.components.Form>
                </div>
        );
    }
}