document.addEventListener("DOMContentLoaded", () => {
  // Select input field, add button, and task list container
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a task item (list element)
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Create a container for task details
    const taskDetails = document.createElement("div");
    taskDetails.className = "task-details";

    // Add the task text
    const taskContent = document.createElement("p");
    taskContent.textContent = taskText;

    // Add the creation date and time
    const taskDate = document.createElement("span");
    taskDate.className = "task-date";
    const currentDate = new Date();
    taskDate.textContent = `Created on: ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    // Append task text and date to the task details container
    taskDetails.appendChild(taskContent);
    taskDetails.appendChild(taskDate);

    // Create a priority button
    const priorityBtn = document.createElement("button");
    priorityBtn.className = "priority-btn";
    priorityBtn.innerHTML = "❤️";
    priorityBtn.title = "Mark as Priority";

    // Add event listener for the priority button
    priorityBtn.addEventListener("click", () => {
      taskItem.style.backgroundColor = "#ffe5e5";
    });

    // Append task details and priority button to the task item
    taskItem.appendChild(taskDetails);
    taskItem.appendChild(priorityBtn);

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    taskInput.value = "";
  };
  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});
