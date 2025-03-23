import fetch from 'node-fetch';

const URL = 'https://alchemy-kd0l.onrender.com';
const PLAYER_NAME = 'miap@uia.no';

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
    const response = await fetch(`${URL}/answer`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ player: PLAYER_NAME, answer: USER_ANSWER })
        });
    const data = await response.json();
    console.log(data);
}

function solveTask1() {
    const CODE = "☉☿☽♂☉"
    const CODEARRAY = CODE.split('');
    for (let i = 0; i < CODE.length; i++) {
        if (CODEARRAY[i] === '☉') {
            CODEARRAY[i] = 'Gold';
        }
        else if (CODEARRAY[i] === '☿') {
            CODEARRAY[i] = 'Quicksilver';
        }
        else if (CODEARRAY[i] === '☽') {
            CODEARRAY[i] = 'Silver';
        }
        else if (CODEARRAY[i] === '♂') {
            CODEARRAY[i] = 'Iron';
        }
    }
    let answer = CODEARRAY.join(',');
    return answer;
}

const USER_ANSWER = solveTask1();
await postAnswer();