const btnAbrir = document.querySelector(".abrir-menu");
const btnCerrar = document.querySelector(".cerrar-menu");
const listaNav = document.querySelector(".lista-nav");
const navLinks = document.querySelectorAll(".lista-nav a");

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
