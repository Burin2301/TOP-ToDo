// IMPORTS==================
import { Task, tasks, tasksToProject } from '../logic_newTry/newTasks'
import { updateProjectsList } from "../UI/body";


// NEW PROJECT
const projects = []

class Project{
    constructor(projectName, index){
        this.projectName = projectName;
        this.index = index
        this.tasks = []
    }
    // SETTER METHODS
    setProjectName(projectName){
        this.projectName = projectName
    }
    setTasks(tasks){
        this.tasks = tasks
    }
    // GETTER METHODS
    getProjectName(){
        return this.projectName
    }
    getTasks(){
        return this.tasks
    }
    getIndex(){
        return this.index
    }
}

const projectTest1 = new Project('Default', 1)
const projectTest2 = new Project('Testing', 2)
projects.push(projectTest1)
projects.push(projectTest2)

function doesProjectExists(name) {
    let exists = projects.some((project) => project.projectName === name);
    return exists;
}

function newProject(name){
    let projectIndex = projects.length+1
    let projectName = name
    let projectExists = doesProjectExists(name)
    console.log(projectExists)
    switch(true){
        case projectName==="":
            alert('Please, type a name for the project')
            break;
        case projectExists:
            alert('This project already exists')
            break;
        case !projectExists:
        case projectName != "":
            const newProjectCreated = new Project(projectName, projectIndex)
            projects.push(newProjectCreated)
            updateProjectsList()
            console.table(projects)
            break
    }
}
function addTaskToProject(targetTask){
    const taskTargetProject = targetTask.project
    const targetProject = projects.find((project)=>project.projectName===taskTargetProject)

    let taskExists = false;
    targetProject.tasks.forEach((task) => {
        if (task.taskName === targetTask.taskName) {
            taskExists = true;
        }
    });
    if (!taskExists) {
        targetProject.tasks.push(targetTask);
    }
}


export { Project, newProject, projects, addTaskToProject }