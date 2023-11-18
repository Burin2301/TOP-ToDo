// IMPORTS-----------------------
import { projects } from "../functions/projects";
// ------------------------------

// PROJECT POP UP ---------------
const popUpProject = document.createElement('div')
// popUpProject.classList.add('inactive')
popUpProject.classList.add('pop-up-project')
const projectContent = `
<div class="project-pop">
    <h3>Create a Project</h3>
    <label for="projectNameInput">Project Name</label>
    <input id="projectNameInput" type="text" placeholder="Name">
    <label for="projectDescrInput">Project Description</label>
    <input id="projectDescrInput" type="text" placeholder="Description">
</div>
`
popUpProject.innerHTML = projectContent


// TASK POP UP ------------------

const popUpTask = document.createElement('div')
// popUpTask.classList.add('inactive')
popUpTask.classList.add('pop-up-task')
const taskContent = `
<div class="task-pop">
    <h3>Create a task</h3>
    <label for="taskNameInput">Task Name</label>
    <input id="taskNameInput" type="text" placeholder="Name">

    <label for="taskDateInput">Due Date</label>
    <input id="taskDateInput" type="date" placeholder="Due Date">

    <label for="taskPrioChoice">Priority</label>
    <select name="taskPrioChoice" id="taskPrioChoice">
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
        <option value="extreme">Asap</option>
    </select>
    </div>
`
popUpTask.innerHTML = taskContent
const taskProjectLabel = document.createElement('label')
taskProjectLabel.setAttribute("for", "taskProjectChoice")
taskProjectLabel.innerText = "Priority"

const taskProjectSelect = document.createElement('select')
taskProjectSelect.setAttribute("name", "taskProjectChoice")
taskProjectSelect.id = "taskProjectChoice"

projects.forEach((project)=>{
    const projectTitle = project.nameProject
    const optionProject = document.createElement('option')
    optionProject.setAttribute("value",projectTitle)
    optionProject.id = projectTitle
    taskProjectSelect.appendChild(optionProject)
})


popUpTask.appendChild(taskProjectSelect)



export { popUpProject, popUpTask }