
    var tie = 0;
    var win = 0;
    var lose = 0;
    
    var rockImage = document.getElementById("rock");
    var paperImage = document.getElementById("paper");
    var scissorsImage = document.getElementById("scissors");


      rockImage.onclick = function(event) {
        var computerChoices = ["Rock", "Paper", "Scissors"];
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        alert("computer guesses " + computerGuess);

        if (computerGuess == "Rock") {
          tie++
          document.getElementById("ties").textContent = "Ties: " + tie;
          document.getElementById("outcome").innerHTML = "Keep trying!"

        } else if (computerGuess == "Paper") {
          lose++
          document.getElementById("losses").textContent = "Losses: " + lose;
          document.getElementById("outcome").innerHTML = "Bummer"

        } else if (computerGuess == "Scissors") {
          win++
          document.getElementById("wins").textContent = "Wins: " + win;
          document.getElementById("outcome").innerHTML = "Nicely Done!"

        }
    };

      paperImage.onclick = function(event) {
        var computerChoices = ["Rock", "Paper", "Scissors"];
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        alert("computer guesses " + computerGuess);

        if (computerGuess == "Rock") {
          win++
          document.getElementById("wins").textContent = "Wins: " + win;
          document.getElementById("outcome").innerHTML = "Way to go!"

        } else if (computerGuess == "Paper") {
          tie++
          document.getElementById("ties").textContent = "Ties: " + tie;
          document.getElementById("outcome").innerHTML = "Close one!"

        } else if (computerGuess == "Scissors") {
          lose++
          document.getElementById("losses").textContent = "Losses: " + lose;
          document.getElementById("outcome").innerHTML = "Terrible..."

        }
    };

      scissorsImage.onclick = function(event) {
        var computerChoices = ["Rock", "Paper", "Scissors"];
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        alert("computer guesses " + computerGuess);
        
        if (computerGuess == "Rock") {
          lose++
          document.getElementById("losses").textContent = "Losses: " + lose;
          document.getElementById("outcome").innerHTML = "Yikes!"

        } else if (computerGuess == "Paper") {
          win++
          document.getElementById("wins").textContent = "Wins: " + win;
          document.getElementById("outcome").innerHTML = "NICE!!"

        } else if (computerGuess == "Scissors") {
          tie++
          document.getElementById("ties").textContent = "Ties: " + tie;
          document.getElementById("outcome").innerHTML = "tie!!"

        }
    };