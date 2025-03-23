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

function solveTask2() {
    const POEM = "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.";
    let capitalizedLetters = '';
    for (let i = 0; i < POEM.length; i++) {
        if (POEM[i] === POEM[i].toUpperCase() && POEM[i] !== ' ' && POEM[i] !== ',' && POEM[i] !== '’' && POEM[i] !== '.') {
            capitalizedLetters += POEM[i];
        }
    }
    return capitalizedLetters;
}

const USER_ANSWER = solveTask2();
await postAnswer();