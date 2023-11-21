// IMPORTS-------
import headerIcon from '../asset/agenda.png';
import burgerMenu from '../asset/barramenu.png'
//---------------

const header = document.createElement('header')
header.classList.add('header')
header.setAttribute('id','header')

const headerBrand = document.createElement('div')
headerBrand.classList.add('header-brand')

const headerLogo = document.createElement('img')
headerLogo.src = headerIcon

const headerTitle = document.createElement('h1')
headerTitle.classList.add('header-title')
headerTitle.innerText = 'Focus-Forge'

const headerBtns = document.createElement('div')
headerBtns.classList.add('header-btns')

const burgerMenuButton = document.createElement('img')
burgerMenuButton.classList.add('burgerBtn')
burgerMenuButton.src = burgerMenu

const createProject = document.createElement('p')
createProject.id = 'ctProjectBtn'
createProject.innerText = 'Create Project'
createProject.classList.add('ct-project-button')
createProject.classList.add('navbar-button')

const createTask = document.createElement('p')
createTask.id = 'ctTaskBtn'
createTask.innerText = 'Create Task'
createTask.classList.add('ct-task-button')
createTask.classList.add('navbar-button')

headerBrand.appendChild(headerLogo)
headerBrand.appendChild(headerTitle)
header.appendChild(headerBrand)

headerBtns.appendChild(createProject)
headerBtns.appendChild(createTask)
headerBtns.appendChild(burgerMenuButton)
header.appendChild(headerBtns)

export { header }