// IMPORTS----------------
import { projects } from "../functions/projects"
import { tasks } from "../functions/tasks"

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
projects.forEach((project)=>{
    const projectTitle = project.nameProject
    const projectListLI = document.createElement('li')
    projectListLI.classList.add('project-list')
    projectListLI.innerText = projectTitle
    projectListUL.appendChild(projectListLI)
})
projectListContainer.appendChild(projectListUL)
aside.appendChild(projectListContainer)
// ----------------------

// MAIN -----------------

const tasksList = document.createElement('div')
tasksList.classList.add('task-list')

const taskListUL = document.createElement('ul')
tasks.forEach((task)=>{
    const taskName = task.titleTask
    const taskDueDate = task.dueDate
    const taskPriority = task.priority
    const taskLi = document.createElement('li')
    taskLi.classList.add('task-Li')
    taskLi.innerHTML = `
    <div class="full-task">
        <button class="task-x-btn">X</button>
        <div class="task-info">
            <h3>${taskName}</h3>
            <p>Due Date: ${taskDueDate}</p>
            <p>Priority: ${taskPriority}</p>
        </div>
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

export { main }
