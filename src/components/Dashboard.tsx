import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Profile = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 16px;
  padding: 2rem;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Listings = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 16px;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  color: #22c55e;
  margin-bottom: 1.5rem;
`;

const ItemCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(34, 197, 94, 0.2);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Dashboard = () => {
  return (
    <Grid>
      <Profile>
        <Avatar>JD</Avatar>
        <h2>John Doe</h2>
        <p style={{ color: '#a3a3a3', marginBottom: '1rem' }}>@johndoe</p>
        <div style={{
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '8px',
          padding: '1rem',
          margin: '1rem 0'
        }}>
          <h3 style={{ color: '#22c55e' }}>Points Balance</h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>450</div>
        </div>
      </Profile>

      <Listings>
        <SectionTitle>My Listings</SectionTitle>
        {[1, 2].map((id) => (
          <ItemCard key={id}>
            <h3 style={{ color: 'white' }}>Item {id}</h3>
            <p style={{ color: '#a3a3a3' }}>This is a description of the item.</p>
          </ItemCard>
        ))}
      </Listings>
    </Grid>
  );
};

export default Dashboard;

