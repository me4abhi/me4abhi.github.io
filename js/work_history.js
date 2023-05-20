import { work_history } from "../models/work_history.js";

const projectsInCompany = work_history.map((work) => work.projects);

// load work history data on page load
window.addEventListener("load", showWorkData);
function showWorkData() {
  work_history.map((work) => {
    let projects = ``;
    work.projects.map((project) => {
      projects += `<div class="project-pill">${project}</div>`;
    });

    let detailPoints = ``;
    work.detail_points.map((detail_point) => {
      detailPoints += `<li>${detail_point}</li>`;
    });

    document.querySelector(
      ".work-history-container"
    ).innerHTML += `<div class="work">
    <div class="work-interval">${work.time_interval}</div>
    <h2 class="work-title">${work.designation}</h2>
    <div class="company-title">${work.company}</div>
    <div class="work-description">
      <div class="work-projects">
      ${projects}
      </div>
      <ul class="experience-description">
        ${detailPoints}
      </ul>
    </div>
  </div>`;
  });
}
