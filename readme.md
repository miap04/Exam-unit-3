**First commit:**

On the first commit I installed the node fetch through npm


**Task**

*getTask function:*
When starting on the task I first imported the fetch from the installed node fetch, then i did a simple GET request to get the a response from the API

*askForClue function:*
Used the getTask function but swapped out 'start' for 'clue' in the request, didnt get any response from the API though

*postAnswer function:*
Used the framework provided from node fetch and the website, although it hasnt produced any response yet.

*solveTask1 function:*
To solve the code I went to wikipedia's page on alchemy symbols: https://en.wikipedia.org/wiki/Alchemical_symbol
It says that ☉ is for gold, ☿ is for mercury (quicksilver), ☽ is for silver, and ♂ is for iron
I then split them into an array, and used a simple for loop to replace each one with their text option, before joining them together with commas inbetween

