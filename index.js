const choose_word = require('./words');
const readline = require('readline-sync');

function is_word_guessed(secret_word, letters_guessed){
   index = 0;
   for(index; index<secret_word.length; index++){
        if(letters_guessed.includes(secret_word[index]) === false){
            return false;
        }
   }
   if(secret_word.length===index){
       return true;
   }
}
    

function get_guessed_word(secret_word, letters_guessed){
    index = 0;
    guessed_word = "";
    
    for(index; index<secret_word.length; index++){
        if(letters_guessed.includes(secret_word[index])){
            guessed_word = guessed_word + secret_word[index];
        }else{
            guessed_word = guessed_word + '_';
        }
    }
    return guessed_word;
}


function get_available_letters(letters_guessed){
    all_letters = 'abcdefghijklmnopqrstuvwxyz';
    letters_left = '';

    index = 0;
    for(index; index<all_letters.length; index++){
      if(letters_guessed.includes(all_letters[index])===false){
        letters_left+=all_letters[index];
      }
    }

    return letters_left
}

function hangman(secret_word){
  console.log("Welcome to the game, Hangman!");
  console.log(`I am thinking of a word that is ${secret_word.length} letters long.`);
  console.log("");
  letters_guessed = []

  while(true){
    available_letters = get_available_letters(letters_guessed)
    console.log(`Available letters: ${available_letters}`);

    word_guessed = is_word_guessed(secret_word, letters_guessed);
    console.log(word_guessed);
    console.log(letters_guessed);
    if(word_guessed){
      console.log(" * * Congratulations, you won! * * ");
      console.log("");
      break;
    }
    guess = readline.question("Please guess a letter: ")
    letter = guess.toLowerCase()
    if(secret_word.includes(letter)){
      letters_guessed.push(letter)
      console.log(`Good guess: ${get_guessed_word(secret_word, letters_guessed)}`);
      console.log("");
    }else{
      console.log(`Oops! That letter is not in my word:  ${get_guessed_word(secret_word, letters_guessed)}`)
      // letters_guessed.push(letter)
      console.log("");
    }
  }
}
    
secret_word = choose_word()
hangman(secret_word)