import dotenv from 'dotenv'
import http from 'https';

dotenv.config()
const apiKey = process.env.RAPID_API_KEY

const options = {
	method: 'GET',
	hostname: 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
	port: null,
	path: '/recipes/638174/nutritionWidget.json',
	headers: {
		'x-rapidapi-key': apiKey,
		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();