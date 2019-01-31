import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";



export default class Example extends React.Component {
  render() {
    return (
      <div className="create">
      <Form>
        <FormGroup>
          <Label for="exampleName">name</Label>
          <Input
            type="text"
            name="name"
            id="exampleName"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleImage">Photo</Label>
          <Input type="file" name="image" id="exampleImage" />
          <FormText color="muted">
            Select a photo and put your best face forward!
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">I am:</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Male</option>
            <option>Female</option>
            <option>I'd rather not say</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">I'm looking for:</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>A serious relationship</option>
            <option>Something casual</option>
            <option>Just friends</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Bio</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
    );
  
  }
 
}
