import React from 'react';
import styled from 'styled-components/macro';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export const Test: React.FC = () => {
  return (
    <Title>HELLO TEST</Title>
  )
};