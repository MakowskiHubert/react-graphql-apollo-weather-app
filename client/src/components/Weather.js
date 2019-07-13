import React, { Fragment } from 'react';
import { MoonLoader } from 'react-spinners';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Item } from './Item';

const WEATHER_QUERY = gql`
	query WeatherQuery {
		weathers {
			id,
			name,
			main {
				temp
				pressure
				humidity
				temp_min
				temp_max
			}
		}
	}
`;

export const Weather = () => (
	<Fragment>
		<Query query={WEATHER_QUERY}>
			{
				({ loading, error, data }) => {
					if (loading) return <MoonLoader />;
					if (error) return console.log(error);

					return (
						<Fragment>
							{
								data.weathers.map(item =>
									<Item key={item.id} data={item}/>
								)
							}
						</Fragment>
					);
				}
			}
		</Query>
	</Fragment>
);