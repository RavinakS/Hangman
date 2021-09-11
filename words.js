const fs = require('fs');

function load_words(){
    data = fs.readFileSync('words.txt', 'utf8');
    const word_list = data.split(' ');
    // console.log(word_list);
    // const word_list = ["navgurukul", "learning", "kindness"];
    return word_list
}

function choose_word(){
    word_list = load_words()
    var secret_word = word_list[Math.floor((Math.random()*word_list.length))];
    secret_word = secret_word.toLowerCase()

    return secret_word
}

// choose_word();

module.exports = choose_word;