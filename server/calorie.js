// calorie.js
import dotenv from 'dotenv'
import http from 'https';

dotenv.config()
const apiKey = process.env.CALORIE_API_KEY

const calorie = async ({ age, weight, height, gender, activity_level, goal, equation }) => {
  return new Promise((resolve, reject) => {
    const path = `/dcn?age=${age}&weight=${weight}&height=${height}&gender=${gender}&activity_level=${activity_level}&goal=${goal}&equation=${equation}`;

    const options = {
      method: 'GET',
      hostname: 'health-calculator-api.p.rapidapi.com',
      port: null,
      path,
      headers: {
        'x-rapidapi-key': apiKey, // Replace with your actual key
        'x-rapidapi-host': 'health-calculator-api.p.rapidapi.com',
      },
    };

    const req = http.request(options, function (res) {
      const chunks = [];

      res.on('data', function (chunk) {
        chunks.push(chunk);
      });

      res.on('end', function () {
        const body = Buffer.concat(chunks);
        resolve(JSON.parse(body.toString()));
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.end();
  });
};

export default calorie;
