const menuIcon = document.getElementById("menu__icon");
const closeIcon = document.getElementById("close__icon")
const navMenu = document.getElementById("navbar");

menuIcon.onclick = () => {
  navMenu.classList.add("active");
  document.body.style.background = 'dimgray';
}

closeIcon.onclick = () => {
  navMenu.classList.remove("active");
  document.body.style.background = 'var(--color-off-white)';
}