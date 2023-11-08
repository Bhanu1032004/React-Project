import React from 'react';
import { auth } from './firebase';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const ProfileContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const UserName = styled.h2`
  color: #c175ff;
`;

const SignOutButton = styled.button`
  background-color: #c175ff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const Home = () => {
  const user = auth.currentUser;

  return (
    <Container>
      <ProfileContainer>
        <UserName>Welcome, {user ? user.displayName : 'User'}</UserName>
        <SignOutButton onClick={() => auth.signOut()}>Sign Out</SignOutButton>
      </ProfileContainer>
    </Container>
  );
};

export default Home;
