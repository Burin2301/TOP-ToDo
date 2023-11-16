const buttons = document.createElement('div');

const projectBtn = document.createElement("button");
projectBtn.setAttribute("id","project");
projectBtn.innerText = "Create Project"
const taskBtn = document.createElement("button");
taskBtn.setAttribute("id","task");
taskBtn.innerText = "Create Task"

buttons.appendChild(projectBtn);
buttons.appendChild(taskBtn);

export {buttons}
