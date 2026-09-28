// 20 official Magic 8 Ball responses
let answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"  
];

// Display random Magic 8 Ball response
function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    let circle = document.getElementById("circle");

    circle.style.display = "block";
    circle.innerHTML = answers[index];
}

// Check for a question when the Magic 8 Ball is pressed
let ball = document.getElementById("ball");

ball.addEventListener("mousedown", function () {
    let question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Please enter a question.");
    }   else {
        displayAnswer();
    }

});

//Hide the answer when the reset button is clicked
let reset = document.getElementById("reset");

reset.addEventListener("click", function (){
    let circle = document.getElementById("circle");
    circle.style.display = "none";
});


//User added Magic 8 Ball responses
let addResponse = document.getElementById("add-response");

addResponse.addEventListener("click", function () {
    let newAnswer = document.getElementById ("new-answer").value;

    if (newAnswer.trim() === "") {
        alert ("Please enter a response");
    } else {
        answers.push(newAnswer);

        console.log("New Response Added: " + newAnswer);
        console.log("Total Responses: " + answers.length);

        document.getElementById("new-answer").value = "";
    }
});