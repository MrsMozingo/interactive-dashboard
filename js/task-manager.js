// Array to store user tasks
let myTasks = [];

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

    // Create the task list using DOM manipulation
    const taskListContainer = document.getElementById("task-list");
    const taskList = document.createElement("ul");
    taskList.id = "user-tasks";
    taskListContainer.appendChild(taskList);

    // Run when Add Task button is clicked
    document.getElementById("add-task").addEventListener("click", function() {

    //Get task from input field
    let task = document.getElementById("task-name").value.trim();

    //Prevent empty task
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    //store the task in the array
    myTasks.push(task);

    // Create a new list item
    let li = document.createElement("li");

    //Add task text to the list item
    li.textContent = task;

    //Append the list item to the task list
    taskList.appendChild(li);

    //Clear the input field
    document.getElementById("task-name").value = "";

    });