// IMPORT FUNCTIONS -----------
import { newProject } from "./projects";
import { newTask } from "./tasks";

import { popUpProject } from "../UI/pop-ups";
import { popUpTask } from "../UI/pop-ups";
// ----------------------------
// IMPORT UI ------------------
import { header } from '../UI/header';
import { main } from "../UI/body";
// ----------------------------

function renderScreen(){
    const contentDiv = document.querySelector('.content')
    contentDiv.appendChild(header)
    contentDiv.appendChild(main)
}

function showProjectPop(){
    popUpProject
}

function showTaskPop(){
    popUpTask
}



renderScreen()


const createProjectBtn = document.querySelector('#ctProjectBtn')
const createTaskBtn = document.querySelector('#ctTaskBtn')

createProjectBtn.addEventListener('click', showProjectPop)
createTaskBtn.addEventListener('click', showTaskPop)

export { renderScreen }


