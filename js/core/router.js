/*
 * Tarija Experiencias
 * Core — Router
 *
 * Responsabilidad:
 * Determinar qué módulo de página debe inicializarse
 * según el documento HTML actualmente cargado.
 *
 * Este router NO reemplaza la navegación tradicional.
 * Las páginas continúan siendo documentos HTML independientes.
 */

const PAGE_MODULES = {
    "/": "../pages/home.js",
    "/index.html": "../pages/home.js",

    "/pages/experiencias.html": "../pages/experiences.js",
    "/pages/destinos.html": "../pages/destinations.js",
    "/pages/viajeros.html": "../pages/travelers.js",
    "/pages/proveedores.html": "../pages/providers.js",
    "/pages/nosotros.html": "../pages/about.js",
    "/pages/contacto.html": "../pages/contact.js"
};

/**
 * Normaliza la ruta actual.
 *
 * @returns {string}
 */
function getCurrentPath() {
    const path = window.location.pathname;

    if (path.length > 1 && path.endsWith("/")) {
        return path.slice(0, -1);
    }

    return path;
}

/**
 * Obtiene el módulo asociado a la página actual.
 *
 * @returns {string|null}
 */
export function getPageModule() {
    const currentPath = getCurrentPath();

    return PAGE_MODULES[currentPath] ?? null;
}

/**
 * Inicializa el módulo correspondiente a la página actual.
 *
 * @returns {Promise<unknown>|null}
 */
export async function initializePage() {
    const modulePath = getPageModule();

    if (!modulePath) {
        return null;
    }

    const pageModule = await import(modulePath);

    if (typeof pageModule.initializePage === "function") {
        return pageModule.initializePage();
    }

    return null;
}

export {
    PAGE_MODULES
};