// IMPORTS==================
import { isToday } from "date-fns";
import { projects } from "./newProjects";

// NEW TASK
class Task{
    constructor(taskName, dueDate, status, project, prio, notes){
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.status = status;
        this.project = project;
        this.prio = prio
        this.notes = []
    }
    // SETTER METHODS
    setNotes(notes){
        this.notes = notes
    }
    setProject(project){
        this.project = project
    }
    setPrio(prio){
        this.prio = prio
    }
    setStatus(status){
        this.status = status
    }
    // GETTER METHODS
    getName(){
        return this.taskName
    }
    getPrio(){
        return this.prio
    }
    getProject(){
        return this.project
    }
    getNote(){
        return this.notes
    }
    getStatus(){
        return this.status
    }

    formatDate(){
        const month = this.dueDate.split('/')[0]
        const day = this.dueDate.split('/')[0]
        const year = this.dueDate.split('/')[0]
        return `${month}/${day}/${year}`
    }
}

const tasks = []

const task1 = new Task('testing', '12/11/2023','started','Testing','high')
const task2 = new Task('testing2', '01/23/2024','started','Default','low')
tasks.push(task1)
tasks.push(task2)

function newTask(name, dueDate, status, project){
    let taskName = name
    let taskDueDate = dueDate
    let taskStatus = status
    let taskProject = project
    let taskExists = compareNewProjectInfo(taskName)
    switch(true){
        case taskExists:
            alert('This task already exists')
            console.table(tasks)
            break
        case taskDueDate === '':
            taskDueDate = isToday
            console.table(tasks)
            break
        case taskProject === '':
            taskProject = 'Default'
            console.table(tasks)
            break
        case !taskExists:
            const newTaskCreated = new Task(taskName, taskDueDate, taskStatus, taskProject, taskProject)
            tasks.push(newTaskCreated)
            console.table(tasks)
            console.table(projects)
            break
    }
}


export { newTask, tasks, Task }