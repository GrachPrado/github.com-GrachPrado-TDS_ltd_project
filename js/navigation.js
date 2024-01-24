function openNav() {
  document.querySelector("#header__menu").style.width = "100vw";
}
function closeNav() {
  document.querySelector("#header__menu").style.width = "0";
}

document.querySelector("#closeMenu").addEventListener("click", closeNav);
document.querySelector("#openNav").addEventListener("click", openNav);
