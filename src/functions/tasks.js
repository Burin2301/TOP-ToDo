// IMPORTS---------------
import { getTasks, projects } from "./projects";
//------------------------

class Task {
    constructor( titleTask, dueDate, priority, project) {
        this.titleTask = titleTask;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project
    }
    chooseProject () {
        return this.project
    }
};
const defaultTask = new Task( "Example Task", "10/11/2023", "low", "Default" );
const defaultTask1 = new Task( "Example Task", "10/11/2023", "low", "Default" );
const defaultTask2 = new Task( "Example Task", "10/11/2023", "low", "Default" );
const tasks = []
tasks.push(defaultTask)
tasks.push(defaultTask1)
tasks.push(defaultTask2)


function newTask( ) {
    let taskTitle
    let taskDate
    let taskPrio
    let taskProject = "Default"
    try {
        taskTitle = prompt( "Type a title for the new task" );
        taskDate = prompt( "Give a due date for the task" );
        taskPrio = prompt( "Give a priority order for this task" );
        if( taskTitle === "" || taskDate === "" ){
            throw "Please, type a name and a due date for the task, please"
        }
        const taskCreated = new Task( taskTitle, taskDate, taskPrio, taskProject )
        tasks.push(taskCreated)
    }
    catch( error ){
        alert("Error: " + error )
    }
    console.table(tasks)
    getTasks()
    console.table(projects)
    return tasks;
}

export { Task, newTask, tasks }