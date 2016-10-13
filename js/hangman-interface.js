
var Hangman = require ("./../js/hangman.js").hangmanModule;
var apiKey = require ("./../.env").apiKey;


$(document).ready(function(){
  var hangbro = new Hangman();
  hangbro.getWord();
  // the next two commands are going to run too early

  $('#user').submit(function(event){
    event.preventDefault();
    $.get('https://api.github.com/users/' + $('#un').val() + '/repos')
      .then(function(response) {
        console.log(response);
        response.forEach(function(repo) {
          $('#rpDisplay').append(repo.description + " <br> ");
        });
      });
  });


  $('#letterGuess').submit(function(event){
    var theLetter = $('#actualLetter').val();
    hangbro.compareLetters(theLetter);
    $('#displayWord').text(hangbro.revealedWord.join(" "));
    $('#lettersGuessed').text("LETTERS GUESSED:  " + hangbro.guessedLetters);
    $('#remainingGuesses').text("GUESSES REMAINING:  " + hangbro.guessesRemaining);
    $('img').attr("src", "img/" + hangbro.guessesRemaining + ".png");
    if (hangbro.gameLost()){
      $('#remainingGuesses').append("Sad trombone.  You have failed yourself.")
    } else if (hangbro.gameWon()) {
      $('#remainingGuesses').append("Congrats ~ You escaped the gallows ~ You must be smarter than a Rocket Surgeon.")
    }
    $('#actualLetter').val("");
    event.preventDefault();
  });

});
