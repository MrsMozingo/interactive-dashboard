//Calculates users total weekly task goal

function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let workdays = 5;
    let weeklyGoal = dailyGoal * workdays;
    let totalGoal = weeklyGoal + bonusTasks;

    let output = "User: " + userName + "<br>" +
                "Total Weekly Goal: " + totalGoal;
    document.getElementById("goal-message").innerHTML = output;
}

//Runs when calculate button is clicked

    document.getElementById("goal-btn").addEventListener("click", function(event) {
        event.preventDefault();

        let userName = document.getElementById("name").value;
        let dailyGoal = Number(document.getElementById("daily-goal").value);
        let bonusTasks = Number(document.getElementById("weekly-bonus").value);

        weeklyGoal(userName, dailyGoal, bonusTasks);
    });