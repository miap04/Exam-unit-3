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

async function solveTask1() {
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

async function solveTask2() {
    const POEM = "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.";
    let capitalizedLetters = '';
    for (let i = 0; i < POEM.length; i++) {
        if (POEM[i] === POEM[i].toUpperCase() && POEM[i] !== ' ' && POEM[i] !== ',' && POEM[i] !== '’' && POEM[i] !== '.') {
            capitalizedLetters += POEM[i];
        }
    }
    return capitalizedLetters;
}

async function solveTask3() {
    const CODE = "17 20   20 9 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23"
    let decipheredCode = '';
    for (let i = 0; i < CODE.length; i++) {
        if (CODE[i] === '1') {
            if (CODE[i + 1] === '7') {
                decipheredCode += 'T';
                i++;
            }
            else if (CODE[i + 1] === ' ') {
                decipheredCode += 'E';
            }
            else if (CODE[i + 1] === '0' && CODE[i + 2] === ' ') {
                decipheredCode += 'H';
                i++;
            }
            else if (CODE[i + 1] === '0' && CODE[i + 2] === '8') {
                decipheredCode += 'Y';
                i++;
                i++;
            }
            else if (CODE[i + 1] === '2' && CODE[i + 2] === ' ') {
                decipheredCode += 'L';
                i++;
            }
            else if (CODE[i + 1] === '2' && CODE[i + 2] === '7') {
                decipheredCode += 'C';
                i++;
                i++;
            }
            else if (CODE[i + 1] === '3' && CODE[i + 2] === '1') {
                decipheredCode += 'D';
                i++;
                i++;
            }
        }
        else if (CODE[i] === '2') {
            if (CODE[i + 1] === '0') {
                decipheredCode += 'O';
                i++;
            }
            else if (CODE[i + 1] === ' ') {
                decipheredCode += 'F';
            }
            else if (CODE[i + 1] === '3') {
                decipheredCode += 'R';
                i++;
            }
            else if (CODE[i + 1] === '4') {
                decipheredCode += 'A';
                i++;
            }
            else if (CODE[i + 1] === '7' && CODE[i + 2] === '0') {
                decipheredCode += 'W';
                i++;
                i++;
            }
        }
        else if (CODE[i] === '3') {
            if (CODE[i + 1] === '8') {
                decipheredCode += 'M';
                i++;
            }
            else if (CODE[i + 1] === '4') {
                decipheredCode += 'N';
                i++;
            }
        }
        else if (CODE[i] === '4') {
            if (CODE[i + 1] === '5') {
                decipheredCode += 'U';
                i++;
            }
            else if (CODE[i + 1] === ' ') {
                decipheredCode += 'I';
            }
            else if (CODE[i + 1] === '6') {
                decipheredCode += 'X';
                i++;
            }
            else if (CODE[i + 1] === '8') {
                decipheredCode += 'V';
                i++;
            }
        }
        else if (CODE[i] === '5') {
            decipheredCode += 'G';
        }
        else if (CODE[i] === '8') {
            decipheredCode += 'S';
        }
        else if (CODE[i] === '9') {
            decipheredCode += 'B';
        }
        else if (CODE[i] === ' ' && CODE[i + 1] !== ' ') {
            continue;
        }
        else {
            decipheredCode += CODE[i];
        }
    }
    console.log(decipheredCode);
    return decipheredCode.trim();
}

const USER_ANSWER = solveTask3();
await postAnswer();