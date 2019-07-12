import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  width: 100%;
  text-align: center;
`;

export default class App extends Component {
  render() {
    return <Wrapper>Styled Weather App</Wrapper>
  }
}