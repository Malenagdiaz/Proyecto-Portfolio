const btnAbrir = document.querySelector(".abrir-menu");
const btnCerrar = document.querySelector(".cerrar-menu");
const listaNav = document.querySelector(".lista-nav");
const navLinks = document.querySelectorAll(".lista-nav a");
const modoClaroBtn = document.querySelector(".modo-claro");
const modoOscuroBtn = document.querySelector(".modo-oscuro");

/* ✮⋆˙ MENU HAMBURGUESA ✮⋆˙ */

btnAbrir.addEventListener("click", () => {
  listaNav.classList.add("open");
  btnAbrir.style.display = "none";
  btnCerrar.style.display = "block";
  btnCerrar.classList.add("rotate");
});

btnCerrar.addEventListener("click", () => {
  listaNav.classList.remove("open");
  btnCerrar.style.display = "none";
  btnAbrir.style.display = "block";
  btnAbrir.classList.add("rotate");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    listaNav.classList.remove("open");
    btnCerrar.style.display = "none";
    btnAbrir.style.display = "block";
    btnAbrir.classList.remove("rotate");
  });
});

/* ✮⋆˙ TEMA ✮⋆˙ */

modoClaroBtn.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "light");
  modoClaroBtn.style.display = "none";
  modoOscuroBtn.style.display = "block";
});

modoOscuroBtn.addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "dark");
  modoClaroBtn.style.display = "block";
  modoOscuroBtn.style.display = "none";
});

if (document.documentElement.getAttribute("data-theme") === "dark") {
  modoClaroBtn.style.display = "block";
  modoOscuroBtn.style.display = "none";
} else {
  modoClaroBtn.style.display = "none";
  modoOscuroBtn.style.display = "block";
}
