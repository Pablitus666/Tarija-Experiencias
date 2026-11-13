/*
 * Tarija Experiencias
 * Core — Application
 *
 * Responsabilidad:
 * Coordinar la inicialización general de la aplicación.
 *
 * Este archivo funciona como punto de entrada.
 * No contiene lógica específica de páginas,
 * componentes ni servicios.
 */

import { initializeTheme } from "./theme.js";
import { initializePage } from "./router.js";

import { renderHeader } from "../components/header.js";
import { renderNavigation } from "../components/navigation.js";
import { renderFooter } from "../components/footer.js";

/**
 * Inicializa los componentes globales.
 */
function initializeGlobalComponents() {
    const headerContainer = document.querySelector("#site-header");
    const footerContainer = document.querySelector("#site-footer");

    if (headerContainer) {
        renderHeader(headerContainer);

        const navigationContainer =
            headerContainer.querySelector("#site-navigation");

        if (navigationContainer) {
            renderNavigation(navigationContainer);
        }
    }

    if (footerContainer) {
        renderFooter(footerContainer);
    }
}

/**
 * Alterna la clase de scroll en el header para aplicar
 * estilos de estado compacto y sombra al desplazar.
 */
function initializeHeaderScrollEffect() {
    const header = document.querySelector("#site-header");

    if (!header) {
        return;
    }

    const onScroll = () => {
        const isScrolled = window.scrollY > 10;

        header.classList.toggle("site-header--scrolled", isScrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Ejecutar una vez al iniciar por si la página carga con scroll.
    onScroll();
}

/**
 * Cierra el menú móvil al hacer clic fuera de él.
 */
function initializeMenuClickOutside() {
    document.addEventListener("click", (event) => {
        const menu = document.querySelector("#site-navigation-menu");
        const toggle = document.querySelector(".site-navigation__toggle");

        if (!menu || !toggle) {
            return;
        }

        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        const clickedInside = menu.contains(event.target) || toggle.contains(event.target);

        if (isOpen && !clickedInside) {
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Abrir menú");
            menu.classList.remove("is-open");
        }
    });
}

/**
 * Inicializa el botón "Volver arriba" con visibilidad condicional.
 */
function initializeScrollToTop() {
    const btn = document.createElement("button");

    btn.type = "button";
    btn.className = "button button--primary button--small scroll-to-top";
    btn.innerHTML = `
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    `;
    btn.setAttribute("aria-label", "Volver arriba");
    btn.setAttribute("title", "Volver arriba");

    document.body.appendChild(btn);

    const toggleVisibility = () => {
        const show = window.scrollY > 400;
        btn.classList.toggle("is-visible", show);
    };

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    // Estado inicial.
    toggleVisibility();
}

/**
 * Inicializa Intersection Observer para revelar elementos al hacer scroll.
 */
function initializeRevealAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0,
            rootMargin: "0px 0px -200px 0px"
        }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
        observer.observe(el);
    });
}

/**
 * Inicializa la aplicación.
 */
async function initializeApp() {
    initializeTheme();

    initializeGlobalComponents();

    initializeHeaderScrollEffect();
    initializeMenuClickOutside();
    initializeScrollToTop();

    await initializePage();

    // Las animaciones de revelado se inicializan DESPUÉS de renderizar el
    // contenido dinámico, para que el IntersectionObserver capture los
    // elementos que se inyectan en el DOM (hero, tarjetas, secciones).
    initializeRevealAnimations();
}

/**
 * Punto de entrada.
 */
document.addEventListener("DOMContentLoaded", initializeApp);
