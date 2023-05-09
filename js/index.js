import { project_data } from "../models/project_data.js";

function menuOnClick() {
  console.log("hello")
  const navbarMain = document.getElementById("navbar-main");
  console.log("do 1")
  
  if (navbarMain.style.display === 'none') {
    navbarMain.style.display = 'flex';
  } else {
    navbarMain.style.display = 'none';
  }

  // navbarMain.style.display =
  //   navbarMain.style.display === "none" ? "flex" : "none";
    console.log("do 2")
}

document.getElementById("menu-icon").addEventListener("click", () => menuOnClick());


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
