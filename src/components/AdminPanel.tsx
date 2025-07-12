import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a0a0a;
  border-bottom: 1px solid rgba(34, 197, 94, 0.2);
  padding: 1rem 2rem;
`;

const LogoImage = styled.img`
  height: 40px;
`;

const TopRightIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 1rem;
`;

const Container = styled.div`
  padding: 2rem;
  color: white;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid #22c55e;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: rgba(34, 197, 94, 0.3);
  }
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  background: #121212;
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  padding: 1rem;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid #22c55e;
    color: #22c55e;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: rgba(34, 197, 94, 0.3);
    }
  }
`;


const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;



const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 1.5rem;
`;

const Details = styled.div`
  flex: 1;
`;


const AdminPanel: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
 // or your real backend URL
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
        <TopBar>
        <LogoImage src="/logo.png" alt="ReWear Logo" />
        <TopRightIcon>A</TopRightIcon>
      </TopBar>

      <Header>Admin Panel</Header>
      


      <Tabs>
        <TabButton>Manage User</TabButton>
        <TabButton>Manage Orders</TabButton>
        <TabButton>Manage Listings</TabButton>
      </Tabs>

      <SectionTitle>Manage Users</SectionTitle>

      <UserList>
        {loading && <p>Loading users...</p>}
{error && <p style={{ color: 'red' }}>{error}</p>}
{!loading && !error && users.map((user) => (
  <UserCard key={user.id}>
    <Avatar>
      {user.profilePic
        ? <img src={user.profilePic} alt={user.name} style={{ width: '100%', borderRadius: '50%' }} />
        : user.name[0]}
    </Avatar>
    <Details>
      <h3>{user.name}</h3>
      <p style={{ color: '#a3a3a3' }}>{user.email || user.username}</p>
    </Details>
    <Actions>
      <button>Delete</button>
      <button>Disable</button>
    </Actions>
  </UserCard>
))}

      </UserList>
    </Container>
  );
};

export default AdminPanel;
