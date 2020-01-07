const https = require('https');

const { DARK_SKY_API_KEY } = process.env;

if (!DARK_SKY_API_KEY) {
  throw new Error('Set DARK_SKY_API_KEY.');
}

export async function get(req, res) {
  const { query } = req;
  const { latitude } = query;
  const { longitude } = query;
  const body = [];
  https.get(
    `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${latitude},${longitude}?units=auto`,
    resp =>
      resp
        .on('data', chunk => body.push(chunk))
        .on('end', () => res.end(body.join('')))
        .on('error', e => res.end(e))
  );
}
