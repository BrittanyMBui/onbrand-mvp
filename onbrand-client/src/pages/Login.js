import React, { useState, useContext } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';
import onbrand2b from '../onbrand2b.png';

function Login(props) {
    const context = useContext(AuthContext)
    // const [errors, setErrors] = useState({})

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        email: '',
        password: '',
    })

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData }}){
            context.login(userData)
            props.history.push('/home')
        },
        // onError(err){
        //     setErrors(err.graphQLErrors[0].extensions.exception.errors);
        // },
        variables: values
    })

    function loginUserCallback(){
        loginUser();
    }

    return (
        <div className="login">
        <img src={onbrand2b} alt="on brand logo" className="onBrandLogin" />
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label for='email'>email</Label>
                <Input
                    label="email"
                    value={values.email}
                    onChange={onChange} 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="email..."
                    // error={errors.email ? true : false }
                />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="password..."
                    value={values.password}
                    onChange={onChange}
                />
            </FormGroup>
            <Button outline color ="primary" type="submit">Log In</Button>
        </Form>
        </div>
    )
}

const LOGIN_USER = gql`
mutation login(
    $email: String!
    $password: String!
    )
    {
        login(
            email: $email
            password: $password
        ){
            id
            email
            name
            token
            pantSize
            pantFit
            shirtSize
            spend
        }
    }
`

export default Login;