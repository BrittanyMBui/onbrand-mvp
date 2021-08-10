import React, { useState, useContext } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { AuthContext } from '../../context/auth';
import { useForm } from '../../util/hooks';
import onbrand2b from '../../onbrand2b.png';

import './Login.styles.scss';

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
            <div className="login-box">
            <img src={onbrand2b} alt="on brand logo" className="onBrandLogin" />
                <div className="form-box">
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input
                            label="email"
                            value={values.email}
                            onChange={onChange} 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder=""
                            // error={errors.email ? true : false }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder=""
                            value={values.password}
                            onChange={onChange}
                        />
                    </FormGroup>
                    <div className="login-btn rounded-0">
                        <Button className='loginBtn' outline color="warning" type="submit">Log In</Button>
                    </div>
                    <br /><a className='newUser' href='https://kellogg.qualtrics.com/jfe/forms/SV_9HNVfyql1C3IY35z'>New user? Click here to sign up!</a>
                </Form>
                </div>
            </div>
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