import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Login() {
    return (
        <>
        <h1>Login</h1>
        <Form>
            <FormGroup>
                <Label for='email'>email</Label>
                <Input type="email" name="email" id="email" placeholder="email..." />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password..." />
            </FormGroup>
            <Button outline color ="primary">Log In</Button>
        </Form>
        </>
    )
}

export default Login;