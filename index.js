const choose_word = require('./words');
const readline = require('readline-sync');
const IMAGES = require('./images');

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

function valid_input(user_input){
  user = parseInt(user_input);
  if(user === user){ // user will have NaN if the user_input not a number and NaN === NaN is false 
    return false;

  }else if(user_input.length === 1){
    return true;

  }else if(user_input === 'hint'){
    return 'hint'

  }else{
    return false;
  }
}

function hint_letter(secret_word, guessed_word){
  for(letter of secret_word){
    if(!guessed_word.includes(letter)){
      return letter;
    }
  }
}

function game(secret_word, remaining_lives, images){
  letters_guessed = []
  // remaining_lives = 8;
  while(remaining_lives>=1){
    available_letters = get_available_letters(letters_guessed)
    console.log("");
    console.log(`Available letters: ${available_letters}`);

    word_guessed = is_word_guessed(secret_word, letters_guessed);
    if(word_guessed){
      console.log("");
      console.log(" * * Congratulations, you won! * * ");
      console.log("");
      break;
    }

    console.log("");
    guess = readline.question("Please guess a letter: ")
    letter = guess.toLowerCase();
    valid = valid_input(letter);

    if(valid === 'hint'){
      h_letter = hint_letter(secret_word, letters_guessed);
      letters_guessed.push(letter);
      console.log("");
      console.log(`Here you go: ${get_guessed_word(secret_word, letters_guessed)}`);
      console.log("");

    }else if(valid && secret_word.includes(letter)){

      if(!letters_guessed.includes(letter)){
        letters_guessed.push(letter);
        console.log("");
        console.log(`Good guess: ${get_guessed_word(secret_word, letters_guessed)}`);
        console.log("");

      }else{
        console.log("");
        console.log("Guessed one.");
        console.log(images[images.length - remaining_lives]);
        remaining_lives--;
        console.log(`You have ${remaining_lives} remaining lives now.`);
        console.log("");
      }

    }else{

      if(valid_input(letter) === false){
        console.log("");
        console.log("Invalid Input");
        console.log(images[images.length - remaining_lives]);
        remaining_lives--;
        console.log(`You have ${remaining_lives} remaining lives now.`);
        console.log("");

      }else{

        console.log("");
        console.log(`Oops! That letter is not in my word:  ${get_guessed_word(secret_word, letters_guessed)}`)
        console.log("");
        console.log(images[images.length - remaining_lives]);
        remaining_lives--;
        console.log(`You have ${remaining_lives} remaining lives now.`);
        console.log("");
      }
    }
  }
}

function hangman(secret_word, images){
  console.log("");
  console.log("* * Welcome to the game, Hangman! * *");
  console.log("");
  console.log(`The word is ${secret_word.length} letters long.`);
  console.log("");

  while(true){
    user = readline.question('Difficulty Level (Easy/Medium/Hard)> ');
    if(user.toLowerCase() === 'easy'){
      game(secret_word, 8, images);
      break;

    }else if(user.toLowerCase() === 'medium'){
      game(secret_word, 6, images);
      break;

    }else if(user.toLowerCase() === 'hard'){
      game(secret_word, 4, images);
      break;

    }else{
      console.log("");
      console.log("Please tell in which level you want to play.");
      console.log("");
    }
  }
}
    
secret_word = choose_word();
hangman(secret_word, IMAGES)