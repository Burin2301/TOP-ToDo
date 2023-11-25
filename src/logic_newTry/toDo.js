// IMPORTS
import { Project } from "./newProjects"
import { Task } from "./newTasks"

class ToDoList{
    constructor(){
        this.toDoProjects = []
    }
    // PROJECTS METHODS
    addNewProject(targetProject){
        if( !this.toDoProjects.find((project)=>project.getProjectName()===targetProject) ){
            this.toDoProjects.push(targetProject)
        }
    }
    setProjects(){
        this.toDoProjects = this.toDoProjects
    }
    getToDoProjects(){
        return this.toDoProjects
    }
}

export { ToDoList }