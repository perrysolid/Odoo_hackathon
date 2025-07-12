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
} from './RegisterFormStyles';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Registered as ${formData.username}`);
    // TODO: send to backend or store locally
  };

  return (
    <FormWrapper>
      <FormHeading>Join ReWear</FormHeading>
      <Form onSubmit={handleRegister}>
        <FormGroup>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" type="text" onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" type="text" onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" onChange={handleChange} required />
        </FormGroup>
        <SubmitButton type="submit">Create Account</SubmitButton>
      </Form>
      <SwitchText>
        Already have an account? <LinkText href="#">Login</LinkText>
      </SwitchText>
    </FormWrapper>
  );
};

export default RegisterForm;
