import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Signup() {
    return(
        <>
        <h1>Signup</h1>
        <Form>
            <FormGroup>
                <Label for='name'>name</Label>
                <Input type="name" name="name" id="name" placeholder="name..." />
            </FormGroup>
            <FormGroup>
                <Label for='email'>email</Label>
                <Input type="email" name="email" id="email" placeholder="email..." />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password..." />
            </FormGroup>
        </Form>
        </>
    )
}

export default Signup;