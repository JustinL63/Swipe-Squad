import React from "react";
import ".style.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SignUp extends React.Component {

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">User Name</Label>
          <Input valid />
          <FormFeedback valid>Sweet! that name is available</FormFeedback>
          <Input invalid />
          <FormFeedback>Sorry! that name is already taken</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
          <Input valid />
          <FormFeedback valid>Looks good!</FormFeedback>
           <Input invalid />
          <FormFeedback>Please enter a vaild email address.</FormFeedback>
        <FormText>user@email.com</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
          <Input valid />
          <FormFeedback valid>Nice!</FormFeedback>
           <Input invalid />
          <FormFeedback>Your password must contain at least 6 letters.</FormFeedback>
   </FormGroup>
   <Button>Submit</Button>
      </Form>
    )};
}