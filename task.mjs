import fetch from 'node-fetch';

const URL = 'https://alchemy-kd0l.onrender.com';
const PLAYER_NAME = 'miap@uia.no';

const response = await fetch(`${URL}/start?player=${PLAYER_NAME}`);
const data = await response.json();

console.log(data);