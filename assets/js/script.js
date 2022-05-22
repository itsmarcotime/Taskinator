var taskIdCounter = 0;

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

    //add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    //creats a div to hold info
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    //adds html content to div and appends to list item element(<li>)
    taskInfoEl.innerHTML ="<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

    //adds entire list item to the list appends to ul (<ul>)
    tasksToDoEl.appendChild(listItemEl);

    //increase task counter for next unique id
    taskIdCounter++;

};

var createTaskActions = function(taskId) {

    //container for all other elements
    var actionContainerEl = document.createElement("div");
    actionContainerEl.classname = "task-actions";

    //create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    //create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    //create a drop down to know the tasks status
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ["To do", "In Progress", "Completed"];

    for (var i = 0; i < statusChoices.length; i++) {
        
        //create option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        statusSelectEl.appendChild(statusOptionEl);
    };

    return actionContainerEl;

};


formEl.addEventListener("submit", taskFormHandler);