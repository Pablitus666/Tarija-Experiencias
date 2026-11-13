/*
 * Tarija Experiencias
 * Component — Navigation
 *
 * Responsabilidad:
 * Renderizar y gestionar la navegación global.
 *
 * Este módulo controla:
 * - Enlaces principales.
 * - Menú móvil.
 * - Estado activo.
 * - Botón de tema.
 *
 * La gestión real del tema pertenece a core/theme.js.
 */

import { toggleTheme, THEME_DARK, THEME_LIGHT, getPreferredTheme } from "../core/theme.js";

const NAVIGATION_ITEMS = [
    {
        label: "Inicio",
        href: "/index.html",
        path: "/index.html"
    },
    {
        label: "Experiencias",
        href: "/pages/experiencias.html",
        path: "/pages/experiencias.html"
    },
    {
        label: "Destinos",
        href: "/pages/destinos.html",
        path: "/pages/destinos.html"
    },
    {
        label: "Para viajeros",
        href: "/pages/viajeros.html",
        path: "/pages/viajeros.html"
    },
    {
        label: "Para proveedores",
        href: "/pages/proveedores.html",
        path: "/pages/proveedores.html"
    },
    {
        label: "Nosotros",
        href: "/pages/nosotros.html",
        path: "/pages/nosotros.html"
    }
];

/**
 * Obtiene la ruta actual del documento.
 *
 * @returns {string}
 */
function getCurrentPath() {
    const path = window.location.pathname;

    if (path === "/" || path.endsWith("/index.html")) {
        return "/index.html";
    }

    return path;
}

/**
 * Renderiza los enlaces de navegación.
 *
 * @returns {string}
 */
function renderNavigationItems() {
    const currentPath = getCurrentPath();

    return NAVIGATION_ITEMS.map((item) => {
        const isActive = currentPath === item.path;

        return `
            <li class="site-navigation__item">
                <a
                    class="site-navigation__link${isActive ? " is-active" : ""}"
                    href="${item.href}"
                    ${isActive ? 'aria-current="page"' : ""}
                >
                    ${item.label}
                </a>
            </li>
        `;
    }).join("");
}

/**
 * Renderiza la navegación dentro de un contenedor.
 *
 * @param {HTMLElement} container
 */
export function renderNavigation(container) {
    if (!(container instanceof HTMLElement)) {
        throw new TypeError(
            "El contenedor de navegación debe ser un elemento HTML válido."
        );
    }

    container.innerHTML = `
        <nav
            class="site-navigation"
            aria-label="Navegación principal"
        >
            <button
                class="site-navigation__toggle"
                type="button"
                aria-expanded="false"
                aria-controls="site-navigation-menu"
                aria-label="Abrir menú"
            >
                <span
                    class="site-navigation__toggle-icon"
                    aria-hidden="true"
                ></span>
            </button>

            <div
                id="site-navigation-menu"
                class="site-navigation__menu"
            >
                <ul class="site-navigation__list">
                    ${renderNavigationItems()}
                </ul>

                <div class="site-navigation__actions">
                    <button
                        class="button button--primary site-navigation__explore"
                        type="button"
                        data-action="explore"
                    >
                        Explorar experiencias
                    </button>

                    <button
                        class="site-navigation__theme"
                        type="button"
                        data-action="theme"
                        aria-label="Cambiar tema"
                        title="Cambiar tema"
                    >
                        <span class="theme-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </nav>
    `;

    initializeNavigation(container);
}

/**
 * Inicializa los eventos de la navegación.
 *
 * @param {HTMLElement} container
 */
/**
 * Actualiza el icono del botón de tema según el tema actual.
 *
 * @param {HTMLElement} themeButton
 */
function updateThemeIcon(themeButton) {
    if (!themeButton) {
        return;
    }

    const currentTheme =
        document.documentElement.dataset.theme || getPreferredTheme();
    const icon = themeButton.querySelector(".theme-icon");

    // Limpia cualquier contenido previo para evitar superposición de iconos.
    icon.innerHTML = "";

    if (currentTheme === THEME_DARK) {
        themeButton.setAttribute("aria-label", "Cambiar a tema claro");
        icon.innerHTML = `
            <img
                src="/assets/images/moon.png"
                alt="Modo claro"
                width="20"
                height="20"
                aria-hidden="true"
                style="display: block; width: 100%; height: 100%; object-fit: contain;"
            >
        `;
    } else {
        themeButton.setAttribute("aria-label", "Cambiar a tema oscuro");
        icon.innerHTML = `
            <img
                src="/assets/images/sun.png"
                alt="Modo oscuro"
                width="20"
                height="20"
                aria-hidden="true"
                style="display: block; width: 100%; height: 100%; object-fit: contain;"
            >
        `;
    }
}

function initializeNavigation(container) {
    const toggle = container.querySelector(".site-navigation__toggle");
    const menu = container.querySelector("#site-navigation-menu");
    const themeButton = container.querySelector(
        '[data-action="theme"]'
    );
    const exploreButton = container.querySelector(
        '[data-action="explore"]'
    );

    if (!toggle || !menu) {
        return;
    }

    // Establece el icono inicial según el tema guardado/sistema.
    updateThemeIcon(themeButton);

    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";

        toggle.setAttribute("aria-expanded", String(!isOpen));
        toggle.setAttribute(
            "aria-label",
            isOpen ? "Abrir menú" : "Cerrar menú"
        );

        menu.classList.toggle("is-open", !isOpen);
    });

    container
        .querySelectorAll(".site-navigation__link")
        .forEach((link) => {
            link.addEventListener("click", () => {
                toggle.setAttribute("aria-expanded", "false");
                toggle.setAttribute("aria-label", "Abrir menú");
                menu.classList.remove("is-open");
            });
        });

    themeButton?.addEventListener("click", () => {
        toggleTheme();
        updateThemeIcon(themeButton);
    });

    exploreButton?.addEventListener("click", () => {
        window.location.href = "/pages/experiencias.html";
    });
}

