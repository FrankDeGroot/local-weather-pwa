'use strict';

const https = require('https');
const { DARK_SKY_API_KEY } = process.env;

export async function get(req, res, next) {
    const query = req.query;
    const latitude = query.latitude;
    const longitude = query.longitude;
    https.get(`https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${latitude},${longitude}?units=auto`, resp => {
        let body = [];
        resp.on('data', chunk => {
            body.push(chunk);
        }).on('end', () => {
            res.end(body.join(''));
        }).on('error', e => {
            res.end(e);
        });
    })
}
