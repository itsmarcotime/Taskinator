var formEl = document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;

    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //creates list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //creats a div to hold info
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    //adds html content to div and append to list item element(<li>)
    taskInfoEl.innerHTML ="<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    //adds entire list item to the list(<ul>)
    tasksToDoEl.appendChild(listItemEl);
};


formEl.addEventListener("submit", createTaskHandler);