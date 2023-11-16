// IMPORTS------------------------------------------------------------------------------
import { format } from "date-fns";
import { printMessage } from "./custom_modules/printMessages"
import { buttons } from "./modules/forTheMoment";
// -------------------------------------------------------------------------------------


// CLASS CONSTRUCTORS------------------------------------------------------------------

class Project {
    constructor( nameProject, descriptionProject ){
        this.nameProject = nameProject;
        this.descriptionProject = descriptionProject;
    }
};
class Task {
    constructor( titleTask, descriptionTask, dueDate, priority) {
        this.titleTask = titleTask;
        this.descriptionTask = descriptionTask;
        this.dueDate = dueDate;
        this.priority = priority
    }
};

// DEFAULT OBJECTS FOR TESTING -----------------------------------------------------------
const projectDefault = new Project("No Project", "Tasks that are not from any project will be here 😀");
const defaultTask = new Task( "Example Task", "This task has been created automatically", "10/11/2023", "low" );

const projects = [];
projects.push(projectDefault);
const tasks = []
tasks.push(defaultTask)

function newProject( ) {
    let projectName
    let projectDescr
    try {
        projectName = prompt("Please, type a name for the project.");
        projectDescr = prompt("Please, type a description for the project, this is optional.");
        if ( projectName === "" ){
            throw "Please, type a name for the project, please"
        }
        const projectCreated = new Project(projectName,projectDescr);
        projects.push(projectCreated);
        printMessage.log(projects);
    }
    catch(error){
        alert("Error: " + error )
    }
    console.table(projects)
    return projects;
}
function newTask( ) {
    let taskTitle
    let taskDescr
    let taskDate
    let taskPrio
    try {
        taskTitle = prompt( "Type a title for the new task" );
        taskDescr = prompt( "Type a description for the task" );
        taskDate = prompt( "Give a due date for the task" );
        taskPrio = prompt( "Give a priority order for this task" );
        if( taskTitle === "" || taskDate === "" ){
            throw "Please, type a name and a due date for the task, please"
        }
        const taskCreated = new Task( taskTitle, taskDescr, taskDate, taskPrio )
        tasks.push(taskCreated)
        printMessage.log(tasks)
    }
    catch( error ){
        alert("Error: " + error )
    }
    console.table(tasks)
    return tasks;
}
function render(){
    const contentDiv = document.querySelector('.content')
    contentDiv.appendChild(buttons)
    console.table(projects)
    console.table(tasks)
}

render()

const projectBtn = document.querySelector("#project");
projectBtn.addEventListener("click", newProject);

const taskBtn = document.querySelector("#task");
taskBtn.addEventListener("click", newTask)