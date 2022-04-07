function donkeyGame(amountOfTries) {
  let tail = Math.floor(Math.random() * 11);
  let tries = 0;

  //console.log("The tail is: " + tail);
  return function (guess) {
    tries++;
    if (tries > amountOfTries) {
      return "You have no tries left";
    }
    if (guess > tail) {
      return "The tails is below";
    } else if (guess < tail) {
      return "The tail is above";
    } else if (guess === tail) {
      return "You hit the mark";
    } else {
      return "You should not have arrived here";
    }
  };
}

const game = donkeyGame(5);
console.log(game(5));
console.log(game(3));
console.log(game(4));
console.log(game(9));
console.log(game(1));

/* function donkeyGame(amountOfTries)
{
    let tail =7;// Math.floor((Math.random()*11))
    let tries = 0;
    console.log("The tail is: " + tail)

    return function (guess){
        
        
        if(amountOfTries <= tries)
        {
            return "You have no more tries left";
        }
        for(let i = 0; i< amountOfTries;i++)
        {
            if(guess[i] > tail)
            {
                tries++;
                console.log("The tails is below");
            }
            else if(guess[i] < tail)
            {
                tries++;
                console.log("The tail is above");
            }
            else
            {
                return "You hit the mark"
            }
        }

        return "You have no more tries left";

    }
    
} */

/* function donkeyGame(amountOfTries)
{
    let tail = 7;
    let tries = 0;

    if(tries === amountOfTries)
    {
        return "You have no tries left";
    }
    else
    {
        for(let i = 0;i< amountOfTries;i++)
        {
            return function(guess){

                if(guess[i] > tail)
                {
                    tries++;
                    console.log("The tails is below");
                }
                else if(guess[i] < tail)
                {
                    tries++;
                    console.log("The tail is above");
                }
                else if(guess[i] === tail)
                {
                    console.log("You hit the mark");
                }
                else
                {
                    console.log( "You should not have arrived here");
                }
            }
        }

    }

}*/
