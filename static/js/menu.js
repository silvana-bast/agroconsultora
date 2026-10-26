
const botonMenu = document.getElementById("menu-toggle");
const navegacion = document.getElementById("navegacion");

if (botonMenu && navegacion) {
    botonMenu.addEventListener("click", () => {
        const abierto = navegacion.classList.toggle("abierto");
        botonMenu.setAttribute("aria-expanded", String(abierto));
    });

    navegacion.querySelectorAll("a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            navegacion.classList.remove("abierto");
            botonMenu.setAttribute("aria-expanded", "false");
        });
    });
}
