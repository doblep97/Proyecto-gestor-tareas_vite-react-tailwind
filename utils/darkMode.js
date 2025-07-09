// Función para aplicar el tema según localStorage o sistema
function applyTheme() {
    // si existe el modo oscuro en el localStorage
    // o si el sistema operativo tiene el modo oscuro activado pero no se ha guardado en el localStorage
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        // agregamos la clase dark al elemento html
        document.documentElement.classList.add("dark");
    } else {
        // si no existe el modo oscuro en el localStorage
        // o si el sistema operativo tiene el modo oscuro desactivado
        // eliminamos la clase dark del elemento html
        document.documentElement.classList.remove("dark");
    }
}

// Escuchar cambios en el sistema
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    // Solo actualiza si no hay preferencia del usuario
    if (!("theme" in localStorage)) {
        if (e.matches) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }
});

// Llamamos la función al inicio
applyTheme();
