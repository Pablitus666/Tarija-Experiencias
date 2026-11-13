/*
 * Tarija Experiencias
 * Page — Destinations
 *
 * Responsabilidad:
 * Renderizar el catálogo de destinos turísticos de Tarija.
 */

import { renderCardGrid } from "../utils/render-grid.js";
import { createDestinationCard } from "../components/destination-card.js";
import { createDestinationDetail } from "../components/destination-detail.js";
import { initImageCarousel } from "../components/image-carousel.js";
import { DESTINOS } from "../../data/destinos.js";

/**
 * Obtiene el parámetro id de la URL actual.
 *
 * @returns {string|null}
 */
function getDestinationIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id") ?? null;
}

/**
 * Inicializa la página de destinos.
 * Si hay un parámetro ?id= en la URL, muestra el detalle de ese destino.
 * De lo contrario, muestra el catálogo completo.
 */
export function initializePage() {
    const mainContent = document.querySelector("#main-content");

    if (!mainContent) {
        return;
    }

    const destinationId = getDestinationIdFromUrl();

    // ——— Modo detalle: un destino individual ———
    if (destinationId) {
        const destination = DESTINOS.find(
            (d) => d.id === destinationId
        );

        if (destination) {
            mainContent.innerHTML = createDestinationDetail(destination);
            const carousel = mainContent.querySelector(".image-carousel");
            if (carousel) {
                initImageCarousel(carousel, destination.gallery.length);
            }
            return;
        }

        // Si no se encuentra el destino, mostrar el catálogo
        mainContent.innerHTML = `
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Destino no encontrado</h2>
                        <p class="section-description">
                            El destino que buscas no está disponible.
                        </p>
                    </div>
                    <div style="text-align: center; margin-top: var(--spacing-xl);">
                        <a
                            href="/pages/destinos.html"
                            class="button button--primary"
                        >
                            Ver todos los destinos
                        </a>
                    </div>
                </div>
            </section>
        `;
        return;
    }

    // ——— Modo catálogo: lista de todos los destinos ———
    mainContent.innerHTML = `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Destinos de Tarija</h2>
                    <p class="section-description">
                        Conoce los municipios y zonas turísticas del departamento
                        de Tarija, cada uno con su propia identidad y experiencias.
                    </p>
                </div>

                <div id="destinations-grid" class="destinations-grid"></div>
            </div>
        </section>
    `;

    const grid = mainContent.querySelector("#destinations-grid");

    renderCardGrid(grid, DESTINOS, createDestinationCard, "grid--spacious");
}
