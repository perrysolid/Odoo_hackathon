import styled from 'styled-components';

export const Header = styled.header`
  padding: 1rem 2rem;
  background-color: #000;
  border-bottom: 1px solid rgba(34, 197, 94, 0.2);
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: #22c55e;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`;

export const NavLinkItem = styled.li``;

export const NavAnchor = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #22c55e;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &.primary {
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: white;
  }

  &.secondary {
    background: transparent;
    border: 1px solid #22c55e;
    color: #22c55e;
  }
`;
