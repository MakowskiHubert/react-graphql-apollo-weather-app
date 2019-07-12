const weatherApi = require('./api');

const { GraphQLObjectType, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');

const WeatherBaseType = new GraphQLObjectType({
	name: 'WeatherBaseType',
	fields: () => ({
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		weather: { type: WeatherType },
		main: { type: MainType }
	})
});

const WeatherType = new GraphQLObjectType({
	name: 'Weather',
	fields: () => ({
		id: { type: GraphQLInt },
		main: { type: GraphQLString },
		description: { type: GraphQLString }
	})
});

const MainType = new GraphQLObjectType({
	name: 'Main',
	fields: () => ({
		temp: { type: GraphQLFloat },
		pressure: { type: GraphQLInt },
		humidity: { type: GraphQLInt },
		temp_min: { type: GraphQLFloat },
		temp_max: { type: GraphQLFloat }
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		weathers: {
			type: new GraphQLList(WeatherBaseType),
			resolve(parent, args) {
				return weatherApi.getWeatherGroup({
					units: 'metric'
				}).then(res => res.data.list);
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});