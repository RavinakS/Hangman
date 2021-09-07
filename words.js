// import string
// import random

function load_words(){
    // Ye function kaafi jayada words ko load karne mai help karega

    const word_list = ["navgurukul", "learning", "kindness"];
    return word_list
}

function choose_word(){
    // word_list (list): list of words (strings)
    // ye function ek word randomly return karega

    word_list = load_words()
    // secret_word = random.choice(word_list)
    var secret_word = word_list[Math.floor((Math.random()*word_list.length))];
    secret_word = secret_word.toLowerCase()

    return secret_word
}
    
module.exports = choose_word;