// IMPORTS------
import { Task, tasks as taskObject } from "./tasks";
// -------------

const projects = [];
class Project {
    constructor( nameProject, descrProject, tasks ){
        this.nameProject = nameProject;
        this.descrProject = descrProject
        this.tasksOfProject = []
    }

};
const projectDefault = new Project("Default", "Tasks that are not from any project will be here 😀");
const testProject = new Project("Testing", "For testing purposes")
projects.push(projectDefault);
projects.push(testProject);

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
    }
    catch(error){
        alert("Error: " + error )
    }
    console.table(projects)
    return projects;
}

function getTasks () {
    const targetProject = projects.find( ( project ) => project[0] === taskObject.project )
    if ( targetProject ){
        const isTaskPresent = targetProject.tasksOfProject.some( (existingTask) => existingTask.titleTask === taskObject.titleTask )
        if(!isTaskPresent){
            targetProject.tasksOfProject.push(taskObject)
        }
    }
    return projects
}
getTasks();

export { projects, newProject, getTasks}