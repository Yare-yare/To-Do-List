/* this is where all of the classes will be:
     -->Task class 
     -->Project class
*/

export class Task {
  constructor(nameOfTask) {
    this.nameOfTask = nameOfTask;
  }

  /* function to store the value/nameOftask in a local storage */
  storingValue() {
    // Get the existing tasks from the local storage (if any)
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Adding the new task name to the existing tasks array
    existingTasks.push(this.nameOfTask);

    localStorage.setItem("tasks", JSON.stringify(existingTasks));
  }

  pushingValue() {}
}

export class Project {
  constructor(nameOfProject) {
    this.nameOfProject = nameOfProject;
  }

  storingValue() {
    // Get the existing tasks from the local storage (if any)
    const existingTasks = JSON.parse(localStorage.getItem("projects")) || [];

    // Adding the new task name to the existing tasks array
    existingTasks.push(this.nameOfProject);

    localStorage.setItem("projects", JSON.stringify(existingTasks));
  }

  pushingValue() {}
}
