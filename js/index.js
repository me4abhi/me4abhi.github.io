import { project_data } from "../models/projects.js";

console.log(project_data);
document.getElementById("menu-icon").addEventListener("click", menuOnClick);
function menuOnClick() {
  const navbarMain = document.getElementById("navbar-main");
  navbarMain.style.display =
    navbarMain.style.display === "none" ? "flex" : "none";
}

// const projectCard = `<div class="project">
// <div class="project-stack">JavaScript</div>
// <img
//   src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/09/ikaw-lang-1.png?fit=650%2C390&ssl=1"
//   alt="#"
// />
// <h3>Title of Project</h3>
// <p>short description of project</p>
// <div class="project-links">
//   <a href="">Live</a>
//   <a href="">Github</a>
// </div>
// </div>`;

window.addEventListener("load", showProjects);
function showProjects() {
  project_data.map((project) => {
    document.querySelector(".projects").innerHTML += `<div class="project">
    <div class="project-stack">${project.stack}</div>
    <img
      src=${project.image}
      alt=${project.name}
    />
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-links">
      <a href=${project.live_link} target=_blank>Live</a>
      <a href=${project.github_link} target=_blank>Github</a>
    </div>
    </div>`;
  });
}
