import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ButtonPage from './ButtonPage';

const NavStyle = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  padding: 20px 20px 10px;
  top: 0;
`;

const NavBar = () => {
  return (
    <NavStyle>
      <Link href="/login">
        <span>
          <ButtonPage colorButton="white">Login</ButtonPage>
        </span>
      </Link>
      <Link href="/register">
        <span>
          <ButtonPage colorButton="rgb(219 112 147)">Register</ButtonPage>
        </span>
      </Link>
    </NavStyle>
  );
};

export default NavBar;
