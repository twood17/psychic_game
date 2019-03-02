var computer_choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var guesses = 9;
var guess_choice = [];

document.onkeyup = function (event) {
    var player_choice = event.key;
    var computer_guess = computer_choices[Math.floor(Math.random() * computer_choices.length)];
    var table = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    if (table.indexOf(player_choice) > -1) {
        if (player_choice === computer_guess) {
            wins++;
            guesses = 9;
            guess_choice = [];
        } else {
            guesses--;
            guess_choice.push(player_choice);
        }

        if (guesses === 0) {
            guesses = 9
            losses++;
            guess_choice = [];
        }
        var refresh =
            "<h1>The Psychic Game</h1>" +
            "<h3>Guess what letter I am thinking!</h3>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses left: " + guesses + "</p>" +
            "<p>Your guesses so far: " + guess_choice.join(", ") + "</p>";

        document.querySelector("#refresh").innerHTML = refresh;
    }
}