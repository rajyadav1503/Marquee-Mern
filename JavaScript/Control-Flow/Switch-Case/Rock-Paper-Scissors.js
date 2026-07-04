// Rock Paper Scissor

let user_input = 'rock';
let computer_input = 'paper';

function winner(userInput , compInput) {

    switch (true) {

        case(userInput == 'scissor' && compInput == 'paper'):
            return 'User Wins';

        case(userInput == 'paper' && compInput == 'rock'):
            return 'User Wins';

        case(userInput == 'rock' && compInput == 'scissor'):
            return 'User Wins';

        case(userInput == 'scissor' && compInput == 'rock'):
            return 'Computer Wins';

        case(userInput == 'paper' && compInput == 'scissor'):
            return 'Computer Wins';

        case(userInput == 'rock' && compInput == 'paper'):
            return 'Computer Wins';

        default:
            return 'Invalid Input';

    }
}

console.log(winner(user_input,computer_input));
