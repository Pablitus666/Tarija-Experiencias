/*
 * Tarija Experiencias
 * Page — Experiences
 *
 * Responsabilidad:
 * Renderizar el catálogo de experiencias turísticas.
 */

import { renderCardGrid } from "../utils/render-grid.js";
import { createExperienceCard } from "../components/experience-card.js";
import { createExperienceDetail } from "../components/experience-detail.js";
import { initImageCarousel } from "../components/image-carousel.js";
import { EXPERIENCIAS } from "../../data/experiencias.js";

/**
 * Obtiene el parámetro id de la URL actual.
 *
 * @returns {string|null}
 */
function getExperienceIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id") ?? null;
}

/**
 * Inicializa la página de experiencias.
 * Si hay un parámetro ?id= en la URL, muestra el detalle de esa experiencia.
 * De lo contrario, muestra el catálogo completo.
 */
export function initializePage() {
    const mainContent = document.querySelector("#main-content");

    if (!mainContent) {
        return;
    }

    const experienceId = getExperienceIdFromUrl();

    // ——— Modo detalle: una experiencia individual ———
    if (experienceId) {
        const experience = EXPERIENCIAS.find(
            (e) => e.id === experienceId
        );

        if (experience) {
            mainContent.innerHTML = createExperienceDetail(experience);
            const carousel = mainContent.querySelector(".image-carousel");
            if (carousel) {
                initImageCarousel(carousel, experience.gallery.length);
            }
            return;
        }

        // Si no se encuentra la experiencia, mostrar el catálogo
        mainContent.innerHTML = `
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Experiencia no encontrada</h2>
                        <p class="section-description">
                            La experiencia que buscas no está disponible.
                        </p>
                    </div>
                    <div style="text-align: center; margin-top: var(--spacing-xl);">
                        <a
                            href="/pages/experiencias.html"
                            class="button button--primary"
                        >
                            Ver todas las experiencias
                        </a>
                    </div>
                </div>
            </section>
        `;
        return;
    }

    // ——— Modo catálogo: lista de todas las experiencias ———
    mainContent.innerHTML = `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Experiencias destacadas</h2>
                    <p class="section-description">
                        Descubre las mejores experiencias de Tarija:
                        enoturismo, aventura, bienestar, cultura y naturaleza.
                    </p>
                </div>

                <div id="experiences-grid" class="experiences-grid"></div>
            </div>
        </section>
    `;

    const grid = mainContent.querySelector("#experiences-grid");

    renderCardGrid(grid, EXPERIENCIAS, createExperienceCard, "grid--spacious");
}
