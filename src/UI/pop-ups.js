// IMPORTS-----------------------
import { Project, projects } from "../logic_newTry/newProjects"
// ------------------------------

// PROJECT POP UP ---------------
const popUpProject = document.createElement('div')
popUpProject.classList.add('inactive')
popUpProject.classList.add('pop-up-project')
const projectContent = `
<div class="project-pop">
    <h3>Create a Project</h3>
    <br>
    <label for="projectNameInput">Project Name</label>
    <input id="projectNameInput" type="text" placeholder="Name">
    <br>
    <button class="add-btn" id="addProject">Add Project</button>
</div>
`
popUpProject.innerHTML = projectContent


// TASK POP UP ------------------

const popUpTask = document.createElement('div')
popUpTask.classList.add('inactive')
popUpTask.classList.add('pop-up-task')

const taskPop = document.createElement('div')
taskPop.classList.add("task-pop")
const taskContent = `
    <h3>Create a task</h3>
    <br>
    <label for="taskNameInput">Task Name</label>
    <input id="taskNameInput" type="text" placeholder="Name">
    <br>
    <label for="taskDateInput">Due Date</label>
    <input id="taskDateInput" type="date" placeholder="Due Date">
    <br>`

taskPop.innerHTML = taskContent
const taskProjectLabel = document.createElement('label')
taskProjectLabel.setAttribute("for", "taskProjectChoice")
taskProjectLabel.innerText = "Priority"


const taskProjectSelectLabel = document.createElement('label')
taskProjectSelectLabel.setAttribute("for",'taskProjectChoice')
taskProjectSelectLabel.innerText = "Choose a Project"

const taskProjectSelect = document.createElement('select')
taskProjectSelect.setAttribute("name", "taskProjectChoice")
taskProjectSelect.id = "taskProjectChoice"

function updateProjectForTasks(){
    taskProjectSelect.innerHTML = ""
    projects.forEach((project)=>{
        const projectTitle = project.getProjectName()
        const optionProject = document.createElement('option')
        optionProject.value = projectTitle
        optionProject.innerText = projectTitle
        optionProject.id = projectTitle
        taskProjectSelect.appendChild(optionProject)
    })
}





const br = document.createElement('br')

const addTaskBtn = document.createElement('button')
addTaskBtn.innerText = "Add Task"
addTaskBtn.id = 'addTask'
addTaskBtn.classList.add('add-btn')

taskPop.appendChild(taskProjectSelectLabel)
taskPop.appendChild(taskProjectSelect)
taskPop.appendChild(br)
taskPop.appendChild(addTaskBtn)

popUpTask.appendChild(taskPop)


export { popUpProject, popUpTask, updateProjectForTasks  }