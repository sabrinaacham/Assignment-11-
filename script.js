//For this assignment we will create a web page which works like the popular Mad Libs game.
//HTML and CSS code is provided for the game 'Talk Like a Pirate' (web site, code) and you are required to write JavaScript which will insert words into the HTML using DOM manipulation.
//The game has six types of word classes defined including those for 'noun', 'adjective', 'verb', 'adverb', 'plural-noun' and 'body-part'.
//Part 1: Create arrays of 10 words each for the six classes outlined. Use a DOM query to return a list of elements based on the class names provided.
//For each of the NodeLists returned, loop through the list and replace the text content with the matching type from the arrays you created

var nounArray = [];

//array of words
var random;

var elements = document.getElementsByClassName('noun');
//node list of html elements


//elements.length used as a counter to loop through array as long as the elements in the array.
for(var i = 0; i < elements.length; i++){
  random = Math.floor(Math.random() * 10) //assigns a random number each time the for loop runs
  elements[i].textContent = walletArray[random] //assigns the text content of the respective element to a random index in the words array
}

//for (var i = 0; i <walletItems.length; i++){
//  walletItems[i].className = "wallet"
//}

  //var el = document.querySelector('li.crypto');
//  el.className = 'wallet';

//var els = document.querySelectorAll('li.wallet');
//els[1] className = 'crypto';
