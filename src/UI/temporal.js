const buttons = document.createElement('div');

const projectBtn = document.createElement("button");
projectBtn.setAttribute("id","project");
projectBtn.innerText = "Create Project"
const taskBtn = document.createElement("button");
taskBtn.setAttribute("id","task");
taskBtn.innerText = "Create Task";
const projectTask = document.createElement("button");
projectTask.innerText = "task in a project";
projectTask.setAttribute("id", "task-project");

buttons.appendChild(projectBtn);
buttons.appendChild(taskBtn);
buttons.appendChild(projectTask);


export {buttons}
