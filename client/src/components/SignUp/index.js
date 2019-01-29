import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import "./style.css"
import NavBar from "../NavBar"

export default class SignUp extends React.Component {

  render() {
    return (
      <div className="create">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">User Name</Label>
          <Input />
          {/* eventually this will render one or the other depending on validity  */}
          {/* <Input valid />
          <FormFeedback valid>Sweet! that name is available</FormFeedback>
          <Input invalid />
          <FormFeedback>Sorry! that name is already taken</FormFeedback> */}
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
          <Input />
           {/* eventually this will render one or the other depending on validity  */}
          {/* <Input valid />
          <FormFeedback valid>Looks good!</FormFeedback>
           <Input invalid />
          <FormFeedback>Please enter a vaild email address.</FormFeedback> */}
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
          <Input />
           {/* eventually this will render one or the other depending on validity  */}
          {/* <Input valid />
          <FormFeedback valid>Nice!</FormFeedback>
           <Input invalid />
          <FormFeedback>Your password must contain at least 6 letters.</FormFeedback> */}
   </FormGroup>
   {/* this button should drop the sign in information into the database */}
   <Button>Submit</Button>
      </Form>
      </div>
    )};
}