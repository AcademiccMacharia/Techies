import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormLabel, FormButton, Text } from './SigninElements';

const Signin = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/">Techie</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput type="email" required />
                    <FormLabel htmlFor="for">Password</FormLabel>
                    <FormInput type="password" required />
                    <FormButton type='submit'>Log In</FormButton>
                    <Text to="/">Forgot password?</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  );
};

export default Signin;