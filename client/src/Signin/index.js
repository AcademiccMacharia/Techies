import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormButton, Text } from './SigninElements';
import Axios from 'axios';
import { useState } from 'react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    const login = () => {
        Axios.post('http://localhost:3004/login', {
          email: email, 
          password: password,
        }).then((response) => {

          if (response.data.message) {
            alert(response.data.message);
            const a = document.createElement('a');
            a.href = '/';
            a.click();
            // window.location.href = '/'
          } else {
            alert(response.data.message);
          }
        });
  };


  return (
    <Container>
        <FormWrap>
            <Icon to="/">Techie</Icon>
            <FormContent>
                <Form>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput type="email" 
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}/>
                    <FormLabel htmlFor="for">Password</FormLabel>
                    <FormInput onChange={(e) => {
                      setPassword(e.target.value);
                     }} type="password"/>
                    <FormButton type="submit" onClick={login}>Continue</FormButton>
                    <Text to="/">Forgot password?</Text>
                   
                </Form>
               </FormContent>
        </FormWrap>
        
    </Container>
  );
};
export default Signin;