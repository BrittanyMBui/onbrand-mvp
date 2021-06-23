import React, { useState, useContext } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';

function Signup(props) {
    const context = useContext(AuthContext)
    const [ errors, setErrors ] = useState({});

    const { onChange, onSubmit, values } = useForm(registeredUser, {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, { data: { register: userData }}) {
            context.login(userData)
            props.history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exceptions.errors);
        },
        variables: values
    })

    function registeredUser() {
        addUser();
    }

    return(
        <>
        <h1>Signup</h1>
        <Form onSubmit={onSubmit} className={loading ? 'loading' : '' }>
            <FormGroup className="form">
                <Label for='name'>name</Label>
                <Input
                    type="name" 
                    name="name" 
                    id="name" 
                    placeholder="name..."
                    value={values.name}
                    onChange={onChange}
                    error={errors.name ? true: false}                
                />
            </FormGroup>
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
                    error={errors.email ? true : false }
                />
            </FormGroup>
            <FormGroup className="form">
                <Label for='password'>password</Label>
                <Input
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="password..."
                    value={values.password}
                    onChange={onChange}
                    error={errors.password ? true: false}            
                />
            </FormGroup>
            <FormGroup className="form">
                <Label for='confirmPassword'>confirm password</Label>
                <Input
                    type="confirmPassword" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    placeholder="confirmPassword..."
                    value={values.confirmPassword}
                    onChange={onChange}
                    error={errors.confirmPassword ? true: false}                
                />
            </FormGroup>
            <Button outline color ="primary">Signup</Button>
        </Form>
        </>
    )
}

const REGISTER_USER = gql`
mutation register(
    $name: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
) {
    register(
        registerInput: {
            name: $name
            email: $email
            password: $password
            confirmPassword: $confirmPassword
        }
    ) {
        id
        email
        name
        token
    }
}
`

export default Signup;