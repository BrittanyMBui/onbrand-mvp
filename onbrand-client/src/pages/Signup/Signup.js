import React, { useState, useContext } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { AuthContext } from '../../context/auth';
import { useForm } from '../../util/hooks';

function Signup(props) {
    const context = useContext(AuthContext)
    // const [ errors, setErrors ] = useState({});

    const { onChange, onSubmit, values } = useForm(registeredUser, {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, { data: { register: userData }}) {
            context.login(userData)
            props.history.push('/home')
        },
        // onError(err) {
        //     setErrors(err.graphQLErrors[0].extensions.exceptions.errors);
        // },
        variables: values
    })

    function registeredUser() {
        addUser();
    }

    return(
        <>
        <h1>Signup</h1>
        <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : '' }>
            <FormGroup className="form">
                <Label for='name'>name</Label>
                <Input
                    type="name" 
                    name="name" 
                    id="name" 
                    placeholder="name..."
                    value={values.name}
                    onChange={onChange}
                    // error={errors.name ? true : false}                
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
                    // error={errors.email ? true : false }
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
                    // error={errors.password ? true : false}            
                />
            </FormGroup>
            <FormGroup className="form">
                <Label for='confirmPassword'>confirm password</Label>
                <Input
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword" 
                    placeholder="confirm password..."
                    value={values.confirmPassword}
                    onChange={onChange}
                    // error={errors.confirmPassword ? true : false}                
                />
            </FormGroup>
            {/* <FormGroup>
                <Label for='pantSize'>Pant Size</Label>
                <Input
                    label="pantSize"
                    value={values.pantSize}
                    onChange={onChange} 
                    type="text" 
                    name="pantSize" 
                    id="pantSize" 
                    placeholder="pant size..."
                />
            </FormGroup>
            <FormGroup>
                <Label for='shirtSize'>Shirt Size</Label>
                <Input
                    label="shirtSize"
                    value={values.shirtSize}
                    onChange={onChange} 
                    type="text" 
                    name="shirtSize" 
                    id="shirtSize" 
                    placeholder="shirt size..."
                />
            </FormGroup>
            <FormGroup>
                <Label for='pantFit'>Pant Fit</Label>
                <Input
                    label="pantFit"
                    value={values.pantFit}
                    onChange={onChange} 
                    type="text" 
                    name="pantFit" 
                    id="pantFit" 
                    placeholder="pant fit..."
                />
            </FormGroup>
            <FormGroup>
                <Label for='spend'>Spend</Label>
                <Input
                    label="spend"
                    value={values.spend}
                    onChange={onChange} 
                    type="text" 
                    name="spend" 
                    id="spend" 
                    placeholder="spend..."
                />
            </FormGroup> */}
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
    # $pantSize: String!
    # $shirtSize: String!
    # $pantFit: String!
    # $spend: String!
) {
    register(
        registerInput: {
            name: $name
            email: $email
            password: $password
            confirmPassword: $confirmPassword
            # pantSize: $pantSize
            # shirtSize: $shirtSize
            # pantFit: $pantFit
            # spend: $spend
        }
    ) {
        id
        email
        name
        token
        # pantSize
        # shirtSize
        # pantFit
        # spend
    }
}
`

export default Signup;