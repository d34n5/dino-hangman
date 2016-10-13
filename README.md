## SPECIFICATIONS
* Spec: Grabs a dino ipsum word from the API.
  * Input: Get word
  * Output: Brontosaurus Rex

* Spec: Splits a word into an array of letters.
  * Input: Rex
  * Output: [R, e, x]

* Spec: Parse word into a string of underscores.
  * Input: Rex
  * Output: _ _ _

* Spec: Compare user guess to letters in the word.
  * Input: e
  * Output: yes, the word contains an e

* Spec: Parse word to display letters that have been guessed.
  * Input: Word: Rex, Guess: e
  * Output: _ e _

* Spec: When a guess is wrong, the user gets closer to losing
  * Input: Word: Rex, Guess: c
  * Output: wrong guesses increased by 1

* Spec: Game ends after six wrong guesses
  * Input: Word: Rex, Guesses: z, p, c, v, b, n
  * Output: Game over

* Spec: Game is won when all letters are guessed correctly
  * Input: Word: Rex, Guesses: r, e, x
  * Output: Game won
