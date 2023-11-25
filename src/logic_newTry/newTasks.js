// IMPORTS==================
import { Project, projects, addTaskToProject } from "./newProjects";

// NEW TASK
class Task{
    constructor(taskName, dueDate, project, status, prio, notes){
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.project = project;
        this.status = status;
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
    setPrio(prio){/*  */
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

const task1 = new Task('testing', '12/11/2023','Testing','started','high')
const task2 = new Task('testing2', '01/23/2024','Default','started','low')
tasks.push(task1)
tasks.push(task2)

function tasksToProject(){
    tasks.forEach((task)=>{
        addTaskToProject(task)
    })
}


function newTask(name, dueDate, project){
    let taskName = name
    let taskDueDate = dueDate
    let taskProject = project
    let taskExists = compareNewProjectInfo(taskName)
    switch(true){
        case taskExists:
            alert('This task already exists')
            console.table(tasks)
            break
        case !taskExists:
            if(taskDueDate === ''){
                let today = new Date()
                let todayDays = today.getDate()
                let todayMonth = today.getMonth()+1
                let todayYear = today.getFullYear()
                taskDueDate = `${todayMonth}/${todayDays}/${todayYear}`
            }
            if(taskProject === '')taskProject = 'Default'
            const newTaskCreated = new Task(taskName, taskDueDate, taskProject)
            tasks.push(newTaskCreated)
            tasksToProject()

            break
    }
}

function compareNewProjectInfo(a){
    if(tasks.find((task)=>task.taskName===a))
    return true
}

export { newTask, tasks, Task, tasksToProject }