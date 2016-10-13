var Hangman = require ("./../js/hangman.js").hangmanModule;



$(document).ready(function(){
  var hangbro = new Hangman();
  hangbro.getWord();
  hangbro.splitWord();
  $('#displayWord').text(hangbro.revealedWord);

  $('#letterGuess').submit(Function(event){
    var theLetter = $('#actualLetter').val();
    hangbro.compareLetters(theLetter);
    $('#displayWord').text(hangbro.revealedWord);
    $('#lettersGuessed').text(hangbro.guessedLetters);
    $('#remainingGuesses').text(hangbro.guessesRemaining);



    event.preventDefault();
  });

});
