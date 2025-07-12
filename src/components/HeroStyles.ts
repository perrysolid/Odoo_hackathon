'use client';
import styled from 'styled-components';

export const HeroWrapper = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(0, 0, 0, 0.3));
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 1200px;
`;

export const HeroHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const HeroParagraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #a3a3a3;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ButtonPrimary = styled.button`
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3);
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background: transparent;
  color: #22c55e;
  border: 1px solid #22c55e;

  &:hover {
    background: #22c55e;
    color: #000;
  }
`;
