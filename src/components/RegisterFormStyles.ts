'use client';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(34, 197, 94, 0.2);
`;

export const FormHeading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #22c55e;
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #22c55e;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #22c55e;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(34, 197, 94, 0.3);
  }
`;

export const SwitchText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: #ccc;
`;

export const LinkText = styled.a`
  color: #22c55e;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
