// IMPORTS==================
import { Task, tasks } from '../logic_newTry/newTasks'
import { updateProjectsList } from "../UI/body";


// NEW PROJECT
const projects = []

class Project{
    constructor(projectName, tasks){
        this.projectName = projectName;
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
    addTask(newTask){
        if(!this.tasks.find((task)=>task.taskName === newTask)){
            this.tasks.push(newTask)
        }
    }
}

const projectTest1 = new Project('Default', 'For testing')
const projectTest2 = new Project('Testing', 'For testing')
projects.push(projectTest1)
projects.push(projectTest2)

function doesProjectExists(name) {
    let exists = projects.some((project) => project.projectName === name);
    return exists;
}

function newProject(name){
    let projectName = name
    let projectExists = doesProjectExists(name)
    console.log(projectExists)
    switch(true){
        case projectName==="":
            alert('Please, type a name for the project')
            console.table(projects)
            break;
        case projectExists:
            alert('This project already exists')
            console.table(projects)
            break;
        case !projectExists:
        case projectName != "":
            const newProjectCreated = new Project(projectName)
            projects.push(newProjectCreated)
            updateProjectsList()
            break
    }
}

export { Project, newProject, projects }