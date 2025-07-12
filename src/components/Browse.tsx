import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
`;

const Title = styled.h2`
  color: #22c55e;
  margin-bottom: 1rem;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ItemCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 12px;
  overflow: hidden;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(34, 197, 94, 0.3);
  }
`;

const ItemImage = styled.div`
  height: 180px;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  margin-bottom: 1rem;
`;

const ItemTitle = styled.h3`
  color: white;
`;

const Browse = () => {
  return (
    <Section>
      <Title>Browse Items</Title>
      <ItemGrid>
        {[1, 2, 3, 4].map((id) => (
          <ItemCard key={id}>
            <ItemImage />
            <ItemTitle>Item #{id}</ItemTitle>
          </ItemCard>
        ))}
      </ItemGrid>
    </Section>
  );
};

export default Browse;
