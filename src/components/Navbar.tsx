// src/components/Navbar.tsx

import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #000;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(34, 197, 94, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #22c55e;
`;

const Links = styled.ul`
  display: flex;
  gap: 2rem;

  li a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #22c55e;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo href="/">ReWear</Logo>
      <Links>
        <li><a href="/">Home</a></li>
        <li><a href="/browse">Browse</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/list-item">List Item</a></li>
        <li><a href="/admin">Admin</a></li>
      </Links>
    </Nav>
  );
};

export default Navbar;
