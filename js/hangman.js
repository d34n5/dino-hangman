
function Hangman (){
  this.word = null;
  this.wordLetters = [];
  this.revealedWord = [];
  this.guessedLetters = [];
  this.guessesRemaining = 6;
}

Hangman.prototype.getWord = function(){
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1')
    .then(function(response) {
      console.log(response);
  });
};

Hangman.prototype.splitWord = function(){
  //split API-generated word into wordLetters array and generate initial revealed word
  this.wordLetters = this.word.split("");
  this.wordLetters.forEach(function() {
    this.revealedWord.push("_");
  });
};

Hangman.prototype.compareLetters = function(guess){
  this.guessedLetters.push(guess);
  //check guess against wordLetters array, if guess wrong -> decrease guessesRemaining by 1
  if(this.wordLetters.includes(guess)){
    this.displayLetters();
  } else {
    this.guessesRemaining--;
  }
};

Hangman.prototype.displayLetters = function(){
  // delete revealedWord array
  // run through wordLetters array in a forEeach
  // If the letter has been guessed, push it to the array
  // if the letter has not been guessed, push '_' to the array
  this.revealedWord=[];
  this.wordLetters.forEach(function(letter){
    if (this.guessedLetters.includes(letter)){
      this.revealedWord.push(letter);
    } else {
      this.revealedWord.push("_");
    }
  });
};

Hangman.prototype.gameLost = function(){
  //if guessesRemain=0 before all wordLetters revealed, then display, "Sorry you lost." message
  if (this.guessesRemain === 0){
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.gameWon = function() {
  if (this.revealedWord.includes("_")){
    return false;
  } else {
    return true;
  }
};

exports.hangmanModule = Hangman;
