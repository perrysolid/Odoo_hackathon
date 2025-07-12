import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 16px;
  padding: 2rem;
`;

const Title = styled.h2`
  color: #22c55e;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  color: #22c55e;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(34, 197, 94, 0.3);
  background: rgba(0, 0, 0, 0.3);
  color: white;

  &:focus {
    outline: none;
    border-color: #22c55e;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(34, 197, 94, 0.3);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #22c55e;
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
  }
`;

const Button = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3);
  }
`;

const ListItemForm = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    size: '',
    points: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Item Listed:\n${JSON.stringify(form, null, 2)}`);
    setForm({ title: '', description: '', size: '', points: '' });
  };

  return (
    <FormWrapper>
      <Title>List a New Item</Title>
      <form onSubmit={handleSubmit}>
        <Label>Title</Label>
        <Input name="title" value={form.title} onChange={handleChange} required />

        <Label>Description</Label>
        <TextArea name="description" rows={4} value={form.description} onChange={handleChange} required />

        <Label>Size</Label>
        <Input name="size" value={form.size} onChange={handleChange} required />

        <Label>Points</Label>
        <Input type="number" name="points" value={form.points} onChange={handleChange} required />

        <Button type="submit">Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default ListItemForm;
