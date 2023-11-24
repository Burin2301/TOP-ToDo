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
        newLi.id = projectTitle
        newLi.classList.add('project-list')
        const liContent =`
            <div class="project-div">
                <p>${projectTitle}</p>
                <button id="${projectTitle}+Delete" class="project-x-btn">X</button>
            </div>
            `
        newLi.innerHTML = liContent
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
function updateTasksLIst(){
    taskListUL.innerHTML = ''
    tasks.forEach((task)=>{
        const taskName = task.getName()
        const taskDueDate = task.dueDate
        const taskLi = document.createElement('li')
        taskLi.classList.add('task-Li')
        taskLi.innerHTML = `
        <div class="full-task">
            <div class="task-info">
                <h3>${taskName}</h3>
                <p>Due Date: ${taskDueDate}</p>
            </div>
            <button class="task-x-btn">X</button>
        </div>`
        taskListUL.appendChild(taskLi)

        console.table(projects)
        console.table(tasks)
    })
}
updateTasksLIst()
tasksList.appendChild(taskListUL)
taskContainer.appendChild(tasksList)
// ----------------------

main.appendChild(aside)
main.appendChild(taskContainer)
main.appendChild(popUpProject)
main.appendChild(popUpTask)

export { main, updateProjectsList, updateTasksLIst }
