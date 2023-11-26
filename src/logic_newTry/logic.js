// IMPORTS====
import { header } from "../UI/header"
import { main, updateTasksLIst } from "../UI/body"
import { popUpProject, popUpTask, updateProjectForTasks } from "../UI/pop-ups"
import { Project,newProject, projects } from "./newProjects"
import { Task, newTask, tasks, tasksToProject } from "./newTasks"
// SET UI

const screenContent = document.querySelector('.content')
function renderScreen(){
    screenContent.appendChild(header)
    screenContent.appendChild(main)
}
renderScreen()
tasksToProject()

// FUNCTION TO CREATE POPUP
function createProjectPopUp(){
    const taskIsOpen = !popUpTask.classList.contains('inactive')
    if(taskIsOpen){
        popUpTask.classList.add('inactive')
    }
    popUpProject.classList.toggle('inactive')
}
function createTaskPopUp(){
    const projectIsOpen = !popUpProject.classList.contains('inactive')
    if(projectIsOpen){
        popUpProject.classList.add('inactive')
    }
    popUpTask.classList.toggle('inactive')
}

// CREATE POPUP BUTTONS
const popupProjectBtn = document.querySelector('#ctProjectBtn')
popupProjectBtn.addEventListener('click', createProjectPopUp)
const popupTaskBtn = document.querySelector('#ctTaskBtn')
popupTaskBtn.addEventListener('click',()=>{
    createTaskPopUp()
    updateProjectForTasks()
} )

// BUTTONS FROM POPUPS TO CREATE STUFF
const createProjectBtn = document.querySelector('#addProject')
createProjectBtn.addEventListener('click', ()=>{
    let projectNameInput = document.querySelector('#projectNameInput').value
    newProject(projectNameInput)
    document.querySelector('#projectNameInput').value = ""
})

const createTaskBtn = document.querySelector('#addTask')
createTaskBtn.addEventListener('click', ()=>{
    let nameOfTask = document.querySelector('#taskNameInput').value
    let taskDueDate = document.querySelector('#taskDateInput').value
    let taskProject = document.querySelector('#taskProjectChoice').value
    newTask(nameOfTask, taskDueDate, taskProject)
    updateTasksLIst()
})


export { renderScreen }