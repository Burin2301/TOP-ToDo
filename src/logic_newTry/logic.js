// IMPORTS====
import { header } from "../UI/header"
import { main } from "../UI/body"
import { popUpProject, popUpTask } from "../UI/pop-ups"
import { newProject } from "./newProjects"
import { newTask } from "./newTasks"
// SET UI

const screenContent = document.querySelector('.content')
function renderScreen(){
    screenContent.appendChild(header)
    screenContent.appendChild(main)
}
renderScreen()

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
popupTaskBtn.addEventListener('click', createTaskPopUp)

// BUTTONS FROM POPUPS TO CREATE STUFF
const createProjectBtn = document.querySelector('#addProject')
createProjectBtn.addEventListener('click', ()=>{
    const projectNameInput = document.querySelector('#projectNameInput').value
    const projectDescrInput = document.querySelector('#projectDescrInput').value
    newProject(projectNameInput, projectDescrInput)
})

const createTaskBtn = document.querySelector('#addTask')
createTaskBtn.addEventListener('click', newTask)

export { renderScreen }