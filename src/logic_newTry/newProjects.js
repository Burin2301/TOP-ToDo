// IMPORTS==================


// NEW PROJECT
const projects = []

class Project{
    constructor(projectName, descr, tasks){
        this.projectName = projectName;
        this.descr = descr;
        this.tasks = []
    }
    // SETTER METHODS
    setName(projectName){
        this.projectName
    }
    setTasks(tasks){
        this.tasks = tasks
    }
    // GETTER METHODS
    getProjectName(){
        return this.projectName
    }
    getTasks(){
        return this.tasks
    }
}

const projectTest1 = new Project('Testing', 'For testing')
const projectTest2 = new Project('Default', 'For testing')
projects.push(projectTest1)
projects.push(projectTest2)

function doesProjectExists(a){
    const lowerCaseName = name.toLowerCase(); // Convertir a minúsculas
    const projectValues = Object.values(projects).map(value => value.toLowerCase());
    return projectValues.includes(lowerCaseName);
}

function newProject(name, descr){
    const doesprojectExists = function(name){
        const lowerCaseName = name.toLowerCase(); // Convertir a minúsculas
        const projectValues = Object.values(projects).map(value => value.toLowerCase());
        return projectValues.includes(lowerCaseName);
    }
    let projectName = name
    let projectDescr = descr
    let projectExists = doesProjectExists(name)
    console.log(name)
    console.log(projects[0])
    console.log(projectExists)
    switch(true){
        case projectName==="":
            alert('Please, type a name for the project')
            console.table(projects)
            break;
        case projectExists:
            alert('This project already exists')
            console.table(projects)
            break;
        case !projectExists:
        case projectName != "":
            const newProjectCreated = new Project(projectName, projectDescr)
            projects.push(newProjectCreated)
            console.table(projects)
            break
    }
}

for(let i = 0;i<projects.length;i++){
        console.log(typeof(projects[i]))
}


export { newProject, projects }