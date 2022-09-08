const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput == "piedra" || userInput == "papel" || userInput == "tijera") {
    return userInput;
  } else {
    return "MEEEEK. Esta opción no existe en nuestro juego, por el momento, escribe una de estas tres: piedra, papel o tijera.";
  }
};

const getComputerChoice = () => {
  const computerChoiceNumber = Math.floor(Math.random() * 3);
  switch (computerChoiceNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const whoIsTheWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "¡Empate!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "¡Tú pierdes!";
    } else {
      return "Enhorabuena, ¡un punto para ti!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "¡Tú pierdes!";
    } else {
      return "Enhorabuena, ¡un punto para ti!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "¡Tú pierdes!";
    } else {
      return "Enhorabuena, ¡un punto para ti!";
    }
  }

  if (userChoice === "bomb") {
    return "Enhorabuena, ¡has ganado! Aunque todo el mundo gana haciendo trampas..."
  }
};

const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice('scissors');
    console.log("You said: " + userChoice);
    console.log("The computerchose: " + computerChoice);

    console.log(whoIsTheWinner(userChoice, computerChoice));
};

playGame()


