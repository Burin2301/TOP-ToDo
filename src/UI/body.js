// IMPORTS----------------
import { projects } from "../logic_newTry/newProjects"
import { tasks } from "../logic_newTry/newTasks"

import { popUpProject } from "./pop-ups"
import { popUpTask } from "./pop-ups"
// -----------------------

const main = document.createElement('main')
const aside = document.createElement('aside')
const taskContainer = document.createElement('div')
taskContainer.classList.add('task-container')

// ASIDE ----------------

const projectListContainer = document.createElement('div')
projectListContainer.classList.add('project-list-container')

const projectListUL = document.createElement('ul')

function updateProjectsList(){
    projectListUL.innerHTML = ''
    projects.forEach((project)=>{
        const projectTitle = project.getProjectName()
        const newLi = document.createElement('li')
        newLi.setAttribute('id', projectTitle)
        newLi.classList.add('project-list')
        newLi.innerText = projectTitle
        projectListUL.appendChild(newLi)
    })
}


updateProjectsList()

projectListContainer.appendChild(projectListUL)
aside.appendChild(projectListContainer)
// ----------------------

// MAIN -----------------

const tasksList = document.createElement('div')
tasksList.classList.add('task-list')

const taskListUL = document.createElement('ul')
tasks.forEach((task)=>{
    const taskName = task.getName()
    const taskDueDate = task.dueDate
    const taskPriority = task.getPrio()
    const taskStatus = task.getStatus()
    const taskLi = document.createElement('li')
    taskLi.classList.add('task-Li')
    taskLi.innerHTML = `
    <div class="full-task">
        <div class="task-info">
            <h3>${taskName}</h3>
            <p>Due Date: ${taskDueDate}</p>
            <p>Status: ${taskStatus}</p>
            <p>Priority: ${taskPriority}</p>
        </div>
        <button class="task-x-btn">X</button>
    </div>`
    taskListUL.appendChild(taskLi)
})
tasksList.appendChild(taskListUL)
taskContainer.appendChild(tasksList)
// ----------------------

main.appendChild(aside)
main.appendChild(taskContainer)
main.appendChild(popUpProject)
main.appendChild(popUpTask)

export { main, updateProjectsList }
