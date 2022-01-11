const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error!');
    }
  }
  
  const getComputerChoice = () => {
    randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0: 
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      default:
        return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer Won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer Won!';
      } else {
        return 'You won!';
      }
    } 
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer Won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'bomb') {
      return 'You won!';
    } 
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();