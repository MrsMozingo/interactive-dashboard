// Array to store user tasks
let tasks = [];

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
    //document.getElementById("add-task").addEventListener("click", function() {
    document.getElementById("task-form").addEventListener("submit", function(event) {
        event.preventDefault();

    //Get task from input field
    let task = document.getElementById("task-name").value.trim();

    //Prevent empty task
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    //Create a task object
    let newTask = {
        id: tasks.length + 1,
        name: task,
        priority: document.getElementById("task-priority").value,
        isImportant: document.getElementById("task-important").checked,
        isCompleted: false
    };

    //store the task object in the array
    tasks.push(newTask);

    //Console log updates to task list
    console.log(JSON.stringify(tasks));

    // Create a new list item
    let li = document.createElement("li");

    //Checkbox for completed tasks -- not working visually --come back to later
    //let completeCheckbox = document.createElement("input");
    //completeCheckbox.type = "checkbox";
   // li.appendChild(completeCheckbox);

    //Attempting to address visual issues with task text
    let taskText = document.createElement("span");
    taskText.textContent = task;
    li.appendChild(taskText);

    //Add task text to the list item
    //li.textContent = task;

    //Important tasks to be displayed in red
    if (newTask.isImportant === true) {
        li.style.color = "red";
    }

    //Priority dependent styling
    if (newTask.priority === "High") {
        li.style.borderLeft = "5px solid red";
    } else if (newTask.priority === "Medium") {
        li.style.borderLeft = "5px solid yellow";
    } else {
            li.style.borderLeft = "5px solid green";
    }


    //Button to mark tasks completed
    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    li.appendChild(completeButton);

    //Button to edit tasks
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    li.appendChild(editButton);

    //Button to deletes individual tasks
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);

    //Edits task when button is clicked
    editButton.addEventListener("click", function() {
        let updatedName = prompt("Edit task:", newTask.name);

        if (updatedName !== null && updatedName.trim() !== "") {
            newTask.name = updatedName.trim();
            taskText.textContent = newTask.name;
            console.log(JSON.stringify(tasks));
        }
    });

    //Deletes individual task when button is clicked
    deleteButton.addEventListener("click", function() {
        let taskIndex = tasks.indexOf(newTask);
        tasks.splice(taskIndex, 1);
        taskList.removeChild(li);
        console.log(JSON.stringify(tasks));
    });

    //Marks task as completed when button is clicked
    completeButton.addEventListener("click", function() {
        newTask.isCompleted = true;
        taskText.style.textDecoration = "line-through";
        console.log(JSON.stringify(tasks));
    });

    //Append the list item to the task list
    taskList.appendChild(li);

    //Clear the input field
    document.getElementById("task-name").value = "";

    });

    //Delete the entire task list
    document.getElementById("delete-list").addEventListener("click", function() {
        tasks = [];
        taskList.innerHTML = "";
        console.log(JSON.stringify(tasks));
    });