document.getElementById("menu-icon").addEventListener("click", menuOnClick);

function menuOnClick() {
  const navbarMain = document.getElementById("navbar-main");
  navbarMain.style.display =
    navbarMain.style.display === "none" ? "flex" : "none";
}
