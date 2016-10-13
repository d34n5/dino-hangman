
function Hangman (){
  this.word = null;
  this.wordLetters = [];
  this.revealedWord = [];
  this.guessedLetters = [];
  this.guessesRemaining = 6;
}

Hangman.prototype.getWord = function(){
  var currentHangman = this;
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=1')
    .then(function(response) {
      currentHangman.word = response[0][0].toLowerCase();

      currentHangman.splitWord();
      $('#displayWord').text(currentHangman.revealedWord.join(' ' ));
  });
};

Hangman.prototype.splitWord = function(){
  //split API-generated word into wordLetters array and generate initial revealed word
  var currentHangman = this;
  this.wordLetters = this.word.split("");
  this.wordLetters.forEach(function() {
    currentHangman.revealedWord.push("_");
  });
};

Hangman.prototype.compareLetters = function(guess){
  guess = guess.toLowerCase();
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
  var currentHangman = this;
  this.revealedWord=[];
  this.wordLetters.forEach(function(letter){
    if (currentHangman.guessedLetters.includes(letter)){
      currentHangman.revealedWord.push(letter);
    } else {
      currentHangman.revealedWord.push("_");
    }
  });
};

Hangman.prototype.gameLost = function(){
  //if guessesRemain=0 before all wordLetters revealed, then display, "Sorry you lost." message
  if (this.guessesRemaining === 0){
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
