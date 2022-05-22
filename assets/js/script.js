var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");


var taskFormHandler = function (event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;

    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //check if imput values are empty
    if (!taskNameInput || !taskTypeInput) {

        alert("You need to fill out the task form!");
        return false;

    };

    formEl.reset();

    //packages up data as object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //sends as an arguement to createTaskEl
    createTaskEl(taskDataObj);

};

var createTaskEl = function(taskDataObj) {

    //creates list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //creats a div to hold info
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    //adds html content to div and appends to list item element(<li>)
    taskInfoEl.innerHTML ="<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    //adds entire list item to the list appends to ul (<ul>)
    tasksToDoEl.appendChild(listItemEl);

};


formEl.addEventListener("submit", taskFormHandler);