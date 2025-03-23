import fetch from 'node-fetch';

const URL = 'https://alchemy-kd0l.onrender.com';
const PLAYER_NAME = 'miap@uia.no';
const USER_ANSWER = 'answer';

async function getTask() {
    const response = await fetch(`${URL}/start?player=${PLAYER_NAME}`);
    const data = await response.json();
    console.log(data);
}

async function askForClue() {
    const response = await fetch(`${URL}/clue?player=${PLAYER_NAME}`);
    const data = await response.json();
    console.log(data);
}

async function postAnswer() {
    const response = await fetch(`${URL}/answer`, {
        method: 'POST', body: JSON.stringify({
            player: PLAYER_NAME, answer: USER_ANSWER
        })
    });
    const data = await response.json();
    console.log(data);
}
