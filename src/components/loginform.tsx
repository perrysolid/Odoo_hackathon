'use client';
import React, { useState } from 'react';
import {
  FormWrapper,
  FormHeading,
  Form,
  FormGroup,
  Label,
  Input,
  SubmitButton,
  SwitchText,
  LinkText
} from './loginformstyle';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logging in as ${username}`);
    // TODO: connect to auth logic or localStorage
  };

  return (
    <FormWrapper>
      <FormHeading>Login to ReWear</FormHeading>
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label htmlFor="username">Username or Email</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
      <SwitchText>
        Don&apos;t have an account? <LinkText href="#">Sign up</LinkText>
      </SwitchText>
    </FormWrapper>
  );
};

export default LoginForm;
