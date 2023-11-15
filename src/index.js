// IMPORTS------------------------------------------------------------------------------
import { format } from "date-fns";
import { printMessage } from "./custom_modules/printMessages"
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
const projectDefault = new Project("Default", "This project has been created automatically");
const defaultTask = new Task( "Default Task", "This task has been created automatically", "10/11/2023", "low" );

const projects = [];
projects.push(projectDefault);

const tasks = []
tasks.push(defaultTask)

function newProject( ) {

    let projectName = prompt("Please, type a name for the project.");
    let projectDescr = prompt("Please, type a description for the project, this is optional.");

    if( projectName === '' ) {
        projectName = prompt("Please, type a name for the project.")
    }
    const projectCreated = new Project(projectName,projectDescr);
    projects.push(projectCreated);

    printMessage.log(projects);

    newTask()
    
    return projects;
}

function newTask( ) {
    let taskTitle = prompt( "Type a title for the new task" );
    let taskDescr = prompt( "Type a description for the task" );
    let taskDate = prompt( "Give a due date for the task" );
    let taskPrio = prompt( "Give a priority order for this task" );

    if ( taskTitle === "" ) {
        taskTitle = prompt( "Type a title for the new task" );
    }else if ( taskDate === "" ) {
        taskDate = prompt( "Give a due date for the task" );
    }

    const taskCreated = new Task( taskTitle, taskDescr, taskDate, taskPrio )
    tasks.push(taskCreated)
    printMessage.log(tasks)
    return tasks;

}

newProject();