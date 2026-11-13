/*
 * Tarija Experiencias
 * Page — Home
 *
 * Responsabilidad:
 * Inicializar los componentes específicos
 * de la página de inicio: Hero, experiencias
 * destacadas, destinos y llamada a la acción final.
 */

import { renderHero } from "../components/hero.js";
import { renderCardGrid } from "../utils/render-grid.js";
import { createExperienceCard } from "../components/experience-card.js";
import { createDestinationCard } from "../components/destination-card.js";
import { EXPERIENCIAS } from "../../data/experiencias.js";
import { DESTINOS } from "../../data/destinos.js";

/**
 * Inicializa la página de inicio.
 */
export function initializePage() {
    const mainContent = document.querySelector("#main-content");

    if (!mainContent) {
        return;
    }

    // ——— Hero (contenedor dedicado para no limpiar el resto del main) ———
    const heroContainer = document.createElement("div");
    heroContainer.setAttribute("data-reveal", "fade-up");
    mainContent.appendChild(heroContainer);
    renderHero(heroContainer);

    // ——— Experiencias populares ———
    mainContent.insertAdjacentHTML(
        "beforeend",
        `
        <section class="section section--compact" data-reveal="fade-up" reveal-delay-2>
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Experiencias populares</h2>
                    <p class="section-description">
                        Las experiencias más reservadas por nuestros viajeros.
                    </p>
                </div>

                <div id="home-experiences-grid"></div>
            </div>
        </section>
        `
    );

    renderCardGrid(
        mainContent.querySelector("#home-experiences-grid"),
        EXPERIENCIAS.slice(0, 3),
        createExperienceCard
    );

    // ——— Destinos por descubrir ———
    mainContent.insertAdjacentHTML(
        "beforeend",
        `
        <section class="section" data-reveal="fade-up" reveal-delay-3>
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Destinos por descubrir</h2>
                    <p class="section-description">
                        Explora los municipios y zonas turísticas de Tarija.
                    </p>
                </div>

                <div id="home-destinations-grid"></div>

                <div style="margin-top: var(--spacing-xl); text-align: center;">
                    <a
                        href="/pages/destinos.html"
                        class="button button--outline"
                    >
                        Ver todos los destinos
                    </a>
                </div>
            </div>
        </section>
        `
    );

    renderCardGrid(
        mainContent.querySelector("#home-destinations-grid"),
        DESTINOS.slice(0, 3),
        createDestinationCard
    );

    // ——— Llamada a la acción final ———
    mainContent.insertAdjacentHTML(
        "beforeend",
        `
        <section class="section section--large" data-reveal="fade-up" reveal-delay-4>
            <div class="container" style="max-width: 700px; margin: 0 auto; text-align: center;">
                <h2 class="section-title">¿Listo para vivir Tarija?</h2>
                <p class="section-description" style="margin-bottom: var(--spacing-xl);">
                    Explora nuestro catálogo y encuentra la experiencia ideal
                    para tu próximo viaje al valle.
                </p>
                <a
                    href="/pages/experiencias.html"
                    class="button button--primary button--large"
                >
                    Explorar experiencias
                </a>
            </div>
        </section>
        `
    );
}
