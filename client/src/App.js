import React, { Component } from 'react';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { Weather } from './components/Weather';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
});

const Wrapper = styled.div`
	height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Wrapper>
					<Weather/>
				</Wrapper>
			</ApolloProvider>
		);
	}
}