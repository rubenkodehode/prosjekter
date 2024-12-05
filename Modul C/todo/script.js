const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#user-input");
const listContainer = document.querySelector("#list-container");

let tasks = [];

// henter fra localstorage hvis det er noe der

const storedTasks = localStorage.getItem("tasks");
if (storedTasks) {
  // gjør en if sjekk på om storedTasks er undefined eller ikke
  tasks = JSON.parse(storedTasks);
  renderTasks();
  //   console.log(tasks);
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); //hindrer en automatisk refresh av nettsiden

  const formData = new FormData(taskForm);

  tasks.push({
    timeStamp: new Date().toLocaleString("no-NO"),
    description: formData.get("user-input"),
    completed: false,
  });
  saveToLocalStorage();
  renderTasks();
});

function renderTasks() {
  while (listContainer.firstChild) {
    listContainer.firstChild.remove();
  }
  tasks.forEach((task, index) => {
    // bygg opp HTML elementer for å vise tasks på nettsiden
    // bygg en task-container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    // vis timeStamp
    const timeStampElem = document.createElement("p");
    timeStampElem.classList.add("timestamp");
    timeStampElem.textContent = task.timeStamp;

    // vis description
    const descriptionElem = document.createElement("input");
    descriptionElem.type = "text";
    descriptionElem.classList.add("description");
    descriptionElem.value = task.description;
    descriptionElem.readOnly = true;

    // vis task completed checkbox
    const taskCompletedElem = document.createElement("input");
    taskCompletedElem.type = "checkbox";
    taskCompletedElem.checked = task.completed;
    if (taskCompletedElem.checked) {
      descriptionElem.classList.add("checked");
      taskContainer.classList.add("checkedbg");
    } else {
      descriptionElem.classList.remove("checked");
      taskContainer.classList.remove("checkedbg");
    }
    taskCompletedElem.classList.add("completed-checkbox");
    taskCompletedElem.addEventListener("change", () => {
      if (taskCompletedElem.checked) {
        descriptionElem.classList.add("checked");
        taskContainer.classList.add("checkedbg");
      } else {
        descriptionElem.classList.remove("checked");
        taskContainer.classList.remove("checkedbg");
      }
      tasks[index].completed = taskCompletedElem.checked;
      saveToLocalStorage();
    });

    // edit button
    const editButtonElem = document.createElement("button");
    editButtonElem.textContent = "Edit";
    editButtonElem.classList.add("edit-button");
    editButtonElem.addEventListener("click", () => {
      if (descriptionElem.readOnly) {
        descriptionElem.readOnly = false;
        descriptionElem.focus();
        editButtonElem.textContent = "Save";
      } else {
        tasks[index].description = descriptionElem.value;
        saveToLocalStorage();
        descriptionElem.readOnly = true;
        editButtonElem.textContent = "Edit";
      }
    });

    // delete button
    const deleteButtonElem = document.createElement("button");
    deleteButtonElem.classList.add("delete-button");
    deleteButtonElem.textContent = "Delete";
    deleteButtonElem.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveToLocalStorage();
      renderTasks();
    });

    // append items
    taskContainer.append(
      timeStampElem,
      descriptionElem,
      taskCompletedElem,
      editButtonElem,
      deleteButtonElem
    );
    listContainer.prepend(taskContainer);
  });
}

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
