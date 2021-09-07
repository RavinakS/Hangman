// import string
// from words import choose_word
choose_word = require(words.choose_word);
// from images import IMAGES

//  End of helper code
//  -----------------------------------

function is_word_guessed(secret_word, letters_guessed){
    /*
    secret_word: ek string word jo ki user ko guess karna hai
    letters_guessed: ek list hai, jisme wo letters hai jo ki user nai abhi tak guess kare hai
    returns: return True kare agar saare letters jo ki user ne guess kiye hai wo secret_word mai hai, warna no
      False otherwise
    */
   index = 0;
   for(index; index<letters_guessed.length; index++){
        if(secret_word.includes(letters_guessed[index]) === false){
            return False;
        }
   }
   if(index===letters_guessed.length){
       return true;
   }
}
    

//  Iss function ko test karne ke liye aap get_guessed_word("kindness", [k, n, d]) call kar sakte hai
function get_guessed_word(secret_word, letters_guessed){
    /*
    secret_word: ek string word jo ki user ko guess kar raha hai
    letters_guessed: ek list hai, jisme wo letters hai jo ki user nai abhi tak guess kare hai
    returns: ek string return karni hai jisme wo letters ho jo sahi guess huye ho and baki jagah underscore ho.
    eg agar secret_word = "kindness", letters_guessed = [k,n, s]
    to hum return karenge "k_n_n_ss"
    */

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
    /*
    letters_guessed: ek list hai, jisme wo letters hai jo ki user ne abhi tak guess kare hai
    returns: string, hame ye return karna hai ki kaun kaun se letters aapne nahi guess kare abhi tak
    eg agar letters_guessed = ['e', 'a'] hai to humme baki charecters return karne hai
    jo ki `bcdfghijklmnopqrstuvwxyz' ye hoga
    */
    // import string
    all_letters = 'abcdefghijklmnopqrstuvwxyz'
    letters_left = '';

    index = 0;
    for(index; index<26; index++){
      if(!letters_guessed.includes(all_letters[index])){
        letters_guessed+=all_letters[index];
      }
    }

    return letters_left
}

function hangman(secret_word){
    /*
    secret_word: string, the secret word to guess.

    Hangman game yeh start karta hai:

    * Game ki shuruaat mei hi, user ko bata dete hai ki
      secret_word mei kitne letters hai

    * Har round mei user se ek letter guess karne ko bolte hai

    * Har guess ke baad user ko feedback do ki woh guess uss
      word mei hai ya nahi

    * Har round ke baar, user ko uska guess kiya hua partial word
      display karo, aur underscore use kar kar woh letters bhi dikhao
      jo user ne abhi tak guess nahi kiye hai

    */
      console.log("Welcome to the game, Hangman!");
      console.log("I am thinking of a word that is " + str(len(secret_word)) + " letters long.");
      console.log("");
  
      letters_guessed = []
      
      available_letters = get_available_letters(letters_guessed)
      console.log(`Available letters: ${available_letters}`);
  
      guess = raw_input("Please guess a letter: ")
      letter = guess.toLowerCase()
  
      if (secret_word.includes(letter)){
        letters_guessed.push(letter)
        console.log(`Good guess: ${get_guessed_word(secret_word, letters_guessed)}`);
        console.log("");

        if (is_word_guessed(secret_word, letters_guessed) === True){
            console.log(" * * Congratulations, you won! * * ");
            console.log("");
        }
      }else{
        console.log(`Oops! That letter is not in my word:  ${get_guessed_word(secret_word, letters_guessed)}`)
        letters_guessed.push(letter)
        console.log("");
      }
}
    
// Load the list of words into the variable wordlist
// So that it can be accessed from anywhere in the program
secret_word = choose_word()
hangman(secret_word)