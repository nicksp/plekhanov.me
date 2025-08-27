import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const NavWrapper = styled('nav')`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.75rem;
`

const List = styled('ul')`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  gap: 0.25rem 0.1rem;
`

const NavItem = styled('li')`
  padding: 0 0.25rem;
`

const NavLink = styled(Link)`
  color: #666;
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1;
  margin: 0 0.1rem 0 0;
  padding: 0.35rem 0.75rem;
  text-decoration: none;
  background: none !important;
  border-radius: 0;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    color: #9ec6df;
    background: none !important;
  }

  &.current-page {
    background: none !important;
    color: #9ec6df;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(158, 198, 223, 0.4);
  }
`

const Nav = ({ children, menuLinks }) => (
  <NavWrapper>
    {children}
    <List>
      {menuLinks.map((link) => (
        <NavItem key={link.name}>
          <NavLink to={link.link} activeClassName="current-page">
            {link.name}
          </NavLink>
        </NavItem>
      ))}
    </List>
  </NavWrapper>
)

export default Nav
