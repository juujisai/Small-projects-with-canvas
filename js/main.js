window.addEventListener('load', () => {

  const nav = document.querySelector('.nav')

  const navProjects = ['Approximating the value of PI - Monte Carlo']
  let navButtons = []

  navProjects.map(item => {
    const liElement = document.createElement('li')
    const buttonElement = document.createElement('button')

    buttonElement.innerHTML = item
    navButtons = [...navButtons, buttonElement]

    liElement.appendChild(buttonElement)
    nav.appendChild(liElement)
  })

  const projectName = document.getElementById('project-name')
  let currentProjectId;

  navButtons.forEach(item => item.addEventListener('click', function () {
    projectName.textContent = this.textContent
    currentProjectId = navProjects.findIndex(item => item === this.textContent)


    project1(currentProjectId)
  }))

})