//For this assignment we will create a web page which works like the popular Mad Libs game.
//HTML and CSS code is provided for the game 'Talk Like a Pirate' (web site, code) and you are required to write JavaScript which will insert words into the HTML using DOM manipulation.
//The game has six types of word classes defined including those for 'noun', 'adjective', 'verb', 'adverb', 'plural-noun' and 'body-part'.
//Part 1: Create arrays of 10 words each for the six classes outlined. Use a DOM query to return a list of elements based on the class names provided.
//For each of the NodeLists returned, loop through the list and replace the text content with the matching type from the arrays you created

var nounArray = ['appearance','studio','desk','expression','resource','depression','explanation','payment','distribution','language'];
var adjectiveArray = ['woebegone','cute','nostalgic','fertile','jolly','wholesale','rebel','fluffy','secretive','panicky'];
var verbArray = ['function','announce','suppress','assume','guarantee','dump','change','intend','participate','govern'];
var adverbArray = ['faithfully','rudely','longingly','originally','fully','unbearably','ahead','mechanically','strictly','easily','altogether','more'];
var pluralnounArray = ['diamonds','powers','performances','workers','dinners','albinos','armadillos','bingos','burritos','cameos'];
var partofthebodyArray = ['teeth', 'head', 'shoulders', 'knees', 'toes', 'eyes', 'nose', 'ears', 'mouth', 'belly button'];


//array of words
var random;

var elements = document.getElementsByClassName('noun');
var elements1 = document.getElementsByClassName('adjective');
var elements2 = document.getElementsByClassName('verb');
var elements3 = document.getElementsByClassName('adverb');
var elements4 = document.getElementsByClassName('plural-noun');
var elements5 = document.getElementsByClassName('body-part');
//node list of html elements


//elements.length used as a counter to loop through array as long as the elements in the array.
for(var i = 0; i < elements.length; i++){
  random = Math.floor(Math.random() * 10); //assigns a random number each time the for loop runs
  elements[i].textContent = nounArray[random];//assigns the text content of the respective element to a random index in the words array
}

  for(var i = 0; i < elements1.length; i++){
    random = Math.floor(Math.random() * 10);
  elements1[i].textContent = adjectiveArray[random];
}

for(var i = 0; i < elements2.length; i++){
  random = Math.floor(Math.random() * 10);
  elements2[i].textContent = verbArray[random];
}

for(var i = 0; i < elements3.length; i++){
  random = Math.floor(Math.random() * 10);
  elements3[i].textContent = adverbArray[random];
}

  for(var i = 0; i < elements4.length; i++){
    random = Math.floor(Math.random() * 10);
  elements4[i].textContent = pluralnounArray[random];
}

  for(var i = 0; i < elements5.length; i++){
    random = Math.floor(Math.random() * 10);
  elements5[i].textContent = partofthebodyArray[random];

}

//for (var i = 0; i <nounArrayItems.length; i++){
//  walletItems[i].className = "noun"
//}

  //var el = document.querySelector('li.crypto');
//  el.className = 'wallet';

//var els = document.querySelectorAll('li.wallet');
//els[1] className = 'crypto';
