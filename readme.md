**First commit:**

On the first commit I installed the node fetch through npm

**Task**

_getTask function:_
When starting on the task I first imported the fetch from the installed node fetch, then i did a simple GET request to get the a response from the API

_askForClue function:_
Used the getTask function but swapped out 'start' for 'clue' in the request, didnt get any response from the API though.
Removed this function

_postAnswer function:_
Used the framework provided from node fetch and the website, although it hasnt produced any response yet.

_solveTask1 function:_
To solve the code I went to wikipedia's page on alchemy symbols: https://en.wikipedia.org/wiki/Alchemical_symbol
It says that ☉ is for gold, ☿ is for mercury (quicksilver), ☽ is for silver, and ♂ is for iron
I then split them into an array, and used a simple for loop to replace each one with their text option, before joining them together with commas inbetween

_solveTask2 function:_
To solve the poem was quite simple, each letter that was capitalized spelled out SILVER
I then created another function with a for loop to check each letter in the string whether they were capitalized, and then add them to a string

_solveTask3 function:_
This one was very difficult to solve for me, i tried to google Paracelsus, Bibliotheca Philosophica Hermetica, and “Chirurgische Bücher und Schrifften”. However I was unable to get any meaningful answers from those. 
I understood that the numbers represented a sentence so I decided to just start trying to guess what the words were, starting with the shorter words. I went to https://frequencylist.com/ to find the most frequent english words, and the most frequent 2 letter word was 'TO'. Using 'TO' to replace '17 20' made some sense, and it allowed me to assume that '17 10 1' was 'THE' which was the 2nd most common three letter word, and also started with a 'T'. 
I used a for loop to replace each number with the letter, and from there i tried replacing '2 20 23' with 'YOU' which is the most common 3-letter word, but it didnt seem to make any sense, so I instead tried the next 3-letter word which was 'FOR' and made a lot more sense. Then I was able to figure out that '45' was 'U' since it spelled out the word 'FOURTH'. 
After that I guessed that '1 12 1 38 1 34 17' was 'ELEMENT' due to it having three 'E's and ending with a 'T'. This also gave me that '24' was 'A' due to the word 'FORMULA', and from there the code broke apart.
This then finally gave me: "TO  OBTAIN  ACCESS  TO  THE  NEXT  VAULT,  INBUT  THE  FORMULA  FOR  THE  THE  FOURTH  ELEMENT;  COMBINE  MERCURY,  COBBER  AND  SULFUR  OVER  HEAT,  ADD  SALT  AND  WATER,  INFUSE  GOLD  THROUGH  AIR"