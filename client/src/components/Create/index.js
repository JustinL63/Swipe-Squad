import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">name</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
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
          <Label for="exampleSelectMulti">I'm looking for:</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
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
    );
  }
}




export default Create;