import { project_data } from "../models/project_data.js";

const navbarMain = document.getElementById("navbar-main");

// navbar menu switch-flex
function menuOnClick() {
  if (navbarMain.style.display === "flex") {
    navbarMain.style.display = "none";
  } else {
    navbarMain.style.display = "flex";
  }
}

// navbar handle-click
document
  .getElementById("menu-icon")
  .addEventListener("click", () => menuOnClick());

// navbar handle-resize
window.addEventListener("resize", function () {
  if (this.window.innerWidth > 915) {
    navbarMain.style.display = "flex";
  } else {
    navbarMain.style.display = "none";
  }
});

// load projects on page load
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
