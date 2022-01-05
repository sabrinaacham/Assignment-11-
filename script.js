//For this assignment we will create a web page which works like the popular Mad Libs game.
//HTML and CSS code is provided for the game 'Talk Like a Pirate' (web site, code) and you are required to write JavaScript which will insert words into the HTML using DOM manipulation.
//The game has six types of word classes defined including those for 'noun', 'adjective', 'verb', 'adverb', 'plural-noun' and 'body-part'.
//Part 1: Create arrays of 10 words each for the six classes outlined. Use a DOM query to return a list of elements based on the class names provided.
//For each of the NodeLists returned, loop through the list and replace the text content with the matching type from the arrays you created

var nounArray = ['appearance','studio','desk','expression','piggybank','depression','explanation','payment','distribution','language'];
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


//Part 2: Write a function which allows the substitution of words based on a random selection from an array.
// The function should be called 'getWord' and its parameter should be 'type'.
// Based on the type passed (that matches one of the six word classes), a random word should be returned from the appropriate array of words.
// Use this function to update the NodeLists looped through in Part 1

//nt[] nounArr = new int[10];

//nounArr[0] = appearance;
//nounArr[1] = studio;
//nounArr[2] = desk;
//nounArr[3] = expression;
//nounArr[4] = piggybank;
//nounArr[5] = depression;
//nounArr[6] = explanation;
//nounArr[7] = payment;
//nounArr[8] = distribution;
//nounArr[9] = language;

 //for(int i=0; i<nounArr.length; i++){

   //System.out.printIn(arr[i]);

 //}

function getNoun(getNoun);
var noun;

switch (getNoun){
  case 0:
  noun = 'appearance';
  break;

  case 1:
  noun = 'studio';
  break;

  case 2:
  noun = 'desk';
  break;

  case 3:
  noun = 'expression';
  break;

  case 4:
  noun = 'piggybank';
  break;

  case 5:
  noun = 'depression';
  break;

  case 6:
  noun = 'explantaion';
  break;

  case 7:
  noun = 'payment';
  break;

  case 8:
  noun = 'distribution'
  break;

  case 9:
  noun = 'language'
  break;
  default:
  noun = 'shiver me timber'
}

return noun;

document.write(getNoun());


function getAdj(getAdj);
var adjective;

case 0:
adjective = 'woebegone'
break;
case 1:
adjective = 'cute'
break;
case 2:
adhective = 'nostaligc'
break;
case 3:
adjective = 'fertile'
break;
case 4:
adjective = 'jolly'
break;
case 5:
adjective = 'wholesale'
break;
case 6:
adjective = 'rebel'
break;
case 7:
adjective = 'fluffy'
break;
case 8:
adjective = 'secretive'
break;
case 9:
adjective = 'panicky'
break;
default:
adjective = 'shiver me timber'
}

return adjective;

document.write(getAdj());


function getVerb(getVerb);
var verb;

case 0:
verb = 'function'
break;
case 1:
verb = 'announce'
break;
case 2:
verb = 'suppress'
break;
case 3:
verb = 'assume'
break;
case 4:
verb = 'guarantee'
break;
case 5:
verb = 'dump'
break;
case 6:
verb = 'change'
break;
case 7:
verb = 'intend'
break;
case 8:
verb = 'participate'
break;
case 9:
verb = 'govern'
break;
default:
verb = 'shiver me timber'
}
return verb;

document.write(getVerb());



function getAdverb(getAdverb);
var adverb;

case 0:
adverb = 'faithfully'
break;
case 1:
adverb = 'rudely'
break;
case 2:
adverb = 'longingly'
break;
case 3:
adverb = 'unbearably'
break;
case 4:
adverb = 'ahead'
break;
case 5:
adverb = 'mechanically'
break;
case 6:
adverb = 'strictly'
break;
case 7:
adverb = 'easily'
break;
case 8:
adverb = 'altogether'
break;
case 9:
adverb = 'more'
break;
default:
adverb = 'shiver me timber'
}
return adverb;

document.write(getAdverb());


function getPluralNoun(getPluralNoun);
var plural;

case 0:
plural = 'diamonds'
break;
case 1:
plural = 'powers'
break;
case 2:
plural = 'performances'
break;
case 3:
plural = 'workers'
break;
case 4:
plural = 'dinners'
break;
case 5:
plural = 'albinos'
break;
case 6:
plural = 'armadillos'
break;
case 7:
plural = 'bingos'
break;
case 8:
plural = 'burritos'
break;
case 9:
plural = 'cameos'
break;
default:
plural = 'shiver me timber'
}
return plural;

document.write(getPluralNoun());

//var partofthebodyArray = ['teeth', 'head', 'shoulders', 'knees', 'toes', 'eyes', 'nose', 'ears', 'mouth', 'belly button'];

function getBodyPart(getBodyPart);
var part;

case 0:
part = 'teeth'
break;
case 1:
part = 'head'
break;
case 2:
part = 'shoulders'
break;
case 3:
part = 'knees'
break;
case 4:
part = 'toes'
break;
case 5:
part = 'eyes'
break;
case 6:
part = 'nose'
break;
case 7:
part = 'ears'
break;
case 8:
part = 'mouth'
break;
case 9:
part = 'belly button'
break;
default:
part = 'shiver me timber'
}
return part;

document.write(getBodyPart());
