import {
  addDays,
  isToday,
  isTomorrow,
  isThisWeek,
  isWithinInterval,
  addMonths,
} from "date-fns";

//import the css file
import "../dist/files/index.css";

//import the Task and Project classes
import { Task } from "./seconed";
import { Project } from "./seconed";

//import data-fns
import { compareAsc, format } from "date-fns";
import { fr } from "date-fns/locale";

//adding the iconImage to the tittle
const faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.href = "./images/task.png";
document.head.appendChild(faviconLink);

//creating the header
const header = document.createElement("div");
header.classList.add("header");
header.innerText = `To-Do-List`;
document.body.append(header);

//create a gridContainer
const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
document.body.append(gridContainer);

//creating the aside content
const asideContent = document.createElement("aside");
asideContent.classList.add("sideBar");
gridContainer.appendChild(asideContent);

//creating the main content
const main = document.createElement("div");
main.classList.add("contentSection");
//I want the background of a container to be #fff8dc
const containerForMain = document.createElement("div");
containerForMain.classList.add("containerForMain");
containerForMain.innerHTML = `Welcome, <br> 
click Inbox to add a task <img src="./images/to-do-list.png" alt="" /> <br> 
 `;
main.appendChild(containerForMain);
gridContainer.appendChild(main);

//creating the footer
const footer = document.createElement("footer");
footer.classList.add("footer");

// create a span element to wrap the text
const footerText = document.createElement("span");
footerText.innerText = `Copyright © 2023 Yare-yare`;

const footerImage = document.createElement("img");
footerImage.src = "./images/github-logo.png";
footerImage.alt = "github logo";
footerImage.classList.add("gitHubLogo");

footer.appendChild(footerText);
footer.appendChild(footerImage);

gridContainer.appendChild(footer);

/* work on the aside contents: (Things To do-> Now(ASAP), Today, Tommorrow, This week, This month), (Projects->...)  */

//container for thingsToDo (parent div)
const container = document.createElement("div");
container.classList.add("container");
asideContent.appendChild(container);

//ThingsTodo
const thingsToDo = document.createElement("div");
thingsToDo.classList.add("thingsToDo");
//creating image for Things to Do --> `"image" Things to Do!`
const image = document.createElement("img");
image.src = "./images/alarm.png";
image.alt = "fireAlarm logo";
image.classList.add("image");
thingsToDo.appendChild(image);
//creating text node for "Things to Do!"
const thingsToDoText = document.createTextNode(`Things to Do!`);
thingsToDo.appendChild(thingsToDoText);
container.appendChild(thingsToDo);

// Now
const inbox = document.createElement("button");
inbox.classList.add("inbox");
//create an image for now
const inboxImage = document.createElement("img");
inboxImage.src = "./images/email.png";
inboxImage.alt = "inboxImage";
inboxImage.classList.add("inboxImage");
inbox.appendChild(inboxImage);
//creating text node for "Due Now!"
const inboxMessage = document.createTextNode(`Inbox`);
inbox.appendChild(inboxMessage);
container.appendChild(inbox);

/* // Today
const today = document.createElement("button");
today.classList.add("today");
//image for today button
const todayImage = document.createElement("img");
todayImage.src = "./images/cinema.png ";
todayImage.alt = " today Png";
todayImage.classList.add("todayImage");
today.appendChild(todayImage);
//create a textNode for today
const dueToday = document.createTextNode(`Due Today!`);
today.appendChild(dueToday);
container.appendChild(today); */

/* // Tomorrow
const tomorrow = document.createElement("button");
tomorrow.classList.add("tomorrow");
//create the tomorrow image
const tomorrowImage = document.createElement("img");
tomorrowImage.src = "./images/tomorrow.png ";
tomorrowImage.alt = " tommorow Png";
tomorrowImage.classList.add("tomorrowImage");
tomorrow.appendChild(tomorrowImage);
//create a textNode for tomrrow
const dueTomorrow = document.createTextNode(`Due Tomorrow!`);
tomorrow.appendChild(dueTomorrow);
container.appendChild(tomorrow); */

/* // This Week
const week = document.createElement("button");
week.classList.add("week");
//create the image for week
const weekImage = document.createElement("img");
weekImage.classList.add("weekImage");
weekImage.src = "./images/week.png ";
weekImage.alt = " week Png";
week.appendChild(weekImage);
//create a textNode for due this week
const dueThisWeek = document.createTextNode("Due This Week!");
week.appendChild(dueThisWeek);
container.appendChild(week); */

/* // This Month
const month = document.createElement("button");
month.classList.add("month");
//create image for month
const monthImage = document.createElement("img");
monthImage.classList.add("monthImage");
monthImage.src = "./images/month.png ";
monthImage.alt = " month Png";
month.appendChild(monthImage);
//create a text node for due in a month
const dueInAMonth = document.createTextNode("Due In a Month");
month.appendChild(dueInAMonth);
container.appendChild(month);
 */
/* //projects
const project = document.createElement("button");
project.classList.add("projects");
const projectImage = document.createElement("img");
projectImage.src = "./images/project-management.png";
projectImage.alt = "project Image";
project.appendChild(projectImage);
//textNode for projects
const projectsText = document.createTextNode("Projects");
project.appendChild(projectsText);
container.appendChild(project); */
/* export the button names: */

/* when buttons are clicked: What the containerForMain will look like*/
//inbox button clicked
inbox.addEventListener("click", () => {
  containerForMain.innerHTML = `    
  <form action="" method="" id = "task">
  <fieldset>
    <label for="addingTask" name="addingTask" class="addingTask"
      ><button class="addingTaskButton">Add Task</button></label
    >
    <input type="text" id="taskInput" placeholder="Task Name" />
  </fieldset>
</form>`;
});

/* //projects button
project.addEventListener("click", () => {
  containerForMain.innerHTML = `  
    <form action="" method="" id = "project">
    <fieldset class = "fieldSet">
      <label for="addingProject" name="addingProject" class="addingProject"
        ><button class="addingProject">Add Project</button></label
      >
      <input type="text" id="projectInput" placeholder="Project Name" />
    </fieldset>

  </form>`;
}); */

/* creating a new instance and storing it in local storage every time someone clicks the add project/add task button */

document.body.addEventListener("submit", (event) => {
  event.preventDefault();
  //Task
  if (event.target.id === "task") {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value;

    // Create an instance of the Task class with the input value as an argument
    const newTask = new Task(taskName);

    // Store the task's name in the local storage using the storingValue() method
    newTask.storingValue();

    //create a div to hold everything after task is added
    const taskParentDiv = document.createElement("div");
    taskParentDiv.classList.add("taskParentDiv");

    //create a div to hold image and task added
    const imageAndTaskAdded = document.createElement("div");
    imageAndTaskAdded.classList.add("imageAndTaskAdded");

    //create div for taskCalanderIcon Parent
    const taskCalanderIconParent = document.createElement("div");
    //create div for calander Icon
    const taskCalanderIcon = document.createElement("input");
    taskCalanderIcon.type = "date";
    taskCalanderIcon.id = "taskCalanderIcon";
    //append the taskCalanderIcon to taskCalanderIconParent
    taskCalanderIconParent.appendChild(taskCalanderIcon);

    //add the task added to the containerForMain.innerText so that the user can see the project
    //create taskImage
    const taskImage = document.createElement("img");
    taskImage.src = "./images/approved.png";
    taskImage.alt = "task Image";

    const taskAdded = document.createElement("div"); //container/display for the newly added project
    taskAdded.classList.add("taskAdded");
    let storedTaskValue = taskInput.value;
    taskAdded.innerText = storedTaskValue;

    //append the image and then the task added into imageAndTaskAdded div
    imageAndTaskAdded.appendChild(taskImage); //image
    imageAndTaskAdded.appendChild(taskAdded); //task

    taskParentDiv.appendChild(imageAndTaskAdded); //image and task
    taskParentDiv.appendChild(taskCalanderIconParent); //date picker/calander
    containerForMain.appendChild(taskParentDiv);

    taskImage.addEventListener("click", () => {
      taskParentDiv.remove();
    });
  }

  /*  Date and image logic
    // Event listener for buttons
    today.addEventListener("click", () => {
      const taskDate = new Date(taskCalanderIcon.value);
      const currentDate = new Date();
      if (taskDate.setHours(0, 0, 0, 0) === currentDate.setHours(0, 0, 0, 0)) {
        containerForMain.innerText = `${taskAdded.innerText} is due today`;
      }
    });

    tomorrow.addEventListener("click", () => {
      const taskDate = new Date(taskCalanderIcon.value);
      const tomorrowDate = new Date();
      tomorrowDate.setDate(tomorrowDate.getDate() + 1);
      if (taskDate.setHours(0, 0, 0, 0) === tomorrowDate.setHours(0, 0, 0, 0)) {
        containerForMain.innerText = `${taskAdded.innerText} is due tomorrow`;
      }
    });

    week.addEventListener("click", () => {
      const taskDate = new Date(taskCalanderIcon.value);
      const currentDate = new Date();
      const weekFromNow = new Date();
      weekFromNow.setDate(currentDate.getDate() + 7);
      if (taskDate >= currentDate && taskDate <= weekFromNow) {
        containerForMain.innerText = `${taskAdded.innerText} is due this week`;
      }
    });

    month.addEventListener("click", () => {
      const taskDate = new Date(taskCalanderIcon.value);
      const currentDate = new Date();
      const monthFromNow = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      );
      if (taskDate >= currentDate && taskDate < monthFromNow) {
        containerForMain.innerText = `${taskAdded.innerText} is due a month from now`;
      }
    });
  } */

  /*
//Project
if (event.target.id === "project") {
  const projectInput = document.getElementById("projectInput"); //name of input
  const nameOfProject = projectInput.value;

  //create a new instance of the Project class and store it in local storage
  const newProject = new Project(nameOfProject);
  newProject.storingValue();

  //create a div to hold everything when the project is added
  const projectParentDiv = document.createElement("div");
  projectParentDiv.classList.add("projectParentDiv");

  //create a div to hold image and project added
  const imageAndProjectAdded = document.createElement("div");
  imageAndProjectAdded.classList.add("imageAndProjectAdded");

  //create div for projectCalanderIcon Parent
  const projectCalanderIconParent = document.createElement("div");
  //create div for projectCalanderIcon
  const projectCalanderIcon = document.createElement("input");
  projectCalanderIcon.type = "date";
  //append the projectCalanderIcon to projectCalanderIconParent
  projectCalanderIconParent.appendChild(projectCalanderIcon);

  //add the Project added to the containerForMain.innerText so that the user can see the project
  //create ProjectImage
  const projectImage = document.createElement("img");
  projectImage.src = "./images/approved.png";
  projectImage.alt = "project Image";

  //create
  //add the project added to the containerForMain.innerText so that the user can see the project
  const projectAdded = document.createElement("div"); //container/display for the newly added project
  projectAdded.classList.add("projectAdded");
  let storedValue = projectInput.value;
  projectAdded.innerText = storedValue;

  //append the image and then the task added into imageAndTaskAdded div
  imageAndProjectAdded.appendChild(projectImage); //image
  imageAndProjectAdded.appendChild(projectAdded); //project

  projectParentDiv.appendChild(imageAndProjectAdded); //image and project
  projectParentDiv.appendChild(projectCalanderIconParent); //date picker/calander
  containerForMain.appendChild(projectParentDiv);

  projectInput.value = "";

   Date and image logic 
   Event listener for buttons 
   today.addEventListener("click", () => {
     if(the taskCalanderIcon.value is currentDay){
     containerForMain.innerText = `${taskAdded} is due today`;
     }
   });
   tomorrow.addEventListener("click", () => {
     if(the taskCalanderIcon.value is tomorrow){
     containerForMain.innerText = `${taskAdded} is due tomorrow`;
     }
   });
   week.addEventListener("click", () => {
     if(the taskCalanderIcon.value is this week){
     containerForMain.innerText = `${taskAdded} is due this week`;
     }
   });
   month.addEventListener("click", () => {
     if(the taskCalanderIcon.value is a month away from currentday){
     containerForMain.innerText = `${taskAdded} is due a month from now`;
     }
   });
}
*/

  /* 
                                    //To-Do-List:

        --> Figure out how to click on images and add event listeners to them.. using the image click
            as a way to complete the task, also add hover effect on it
                
        --> make sure the user can't just submit/add an empty input... also depending on how you feel, 
            check to see if the user put a date or not, if not add an error or not, up to you.

        --> make sure the web app is responsive on phones, and devices greater the 1920x1080
            --> so like use of drop-down menus when on mobile 
*/
});
