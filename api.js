const axios = require('axios');

const apiKey = '6c23e7e68c08b1c67c1428f2b035418d';
const apiUrl = 'http://api.openweathermap.org/data/2.5';

const service = axios.create({
	baseURL: apiUrl
});

const weatherApi = {
	getWeather: async params => {
		return service.get(`/weather?APPID=${apiKey}`, { params });
	},
	getWeatherGroup: async params => {
		return service.get(`/group?APPID=${apiKey}&id=756135,776069,3099424,3094802,3093133,3081368,7530858,3083829,3102014,765876`, { params });
	}
};

module.exports = weatherApi;