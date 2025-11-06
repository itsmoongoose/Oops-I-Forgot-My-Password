//Function -- main
async function main() {
    
    //Defining variables
    let passGuess = document.getElementById("password");
    const answerContainer = document.getElementById("answer-container");
    const enterButton = document.getElementById("enter-button");
    const passAnswer = "Password123";

    passGuess.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {

            //Remove any whitespace
            let passGuessTrim = passGuess.value.replace(/\s/g, "");

                //Check if input matches answer
                for (let letter = 0; letter < passGuessTrim.length; letter = letter + 1) {
                    const circle = document.createElement("div");
                    circle.classList.add("circle");
                    if (passGuessTrim[letter] === passAnswer[letter]) {
                        circle.classList.add("green-check");
                    } else if (passAnswer.includes(passGuessTrim[letter])) {
                        circle.classList.add("yellow-q");
                    } else {
                        circle.classList.add("red-x");
                    }

                    //Add circles to container
                    answerContainer.appendChild(circle);

                    //Clear input field
                    passGuess.value = "";
                }



            event.preventDefault();
        }

    //addEventListener end
    })

//main function end    
}
main();