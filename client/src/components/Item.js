import React from 'react';
import styled from 'styled-components';
import drizzleIcon from '../images/Drizzle.png';
import sunnyIcon from '../images/Sunny.png';
import cloudyIcon from '../images/Cloudy.png';

const Wrapper = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	box-shadow: 10px 5px 5px aliceblue;
`;

const Img = styled.img`
  width: 96px;
  height: 96px;
  margin: 0 20px;
`;

const Text = styled.p`
	font-size: 1.8rem;
	font-weight: ${({ bold }) => bold && 'bold'};
`;

const getWeatherIcon = humidity =>
	humidity < 50 ? <Img src={sunnyIcon} alt='Sunny weather'/> : (
		humidity < 75 ? <Img src={cloudyIcon} alt='Cloudy weather'/> : (
			<Img src={drizzleIcon} alt='Drizzle weather'/>
		)
	);

export const Item = ({ data: { id, name, main } }) => (
	<Wrapper>
		<Text>{name}</Text>
		{getWeatherIcon(main.humidity)}
		<Text bold>{Math.round(main.temp)}°C</Text>
	</Wrapper>
);