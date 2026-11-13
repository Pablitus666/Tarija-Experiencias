/*
 * Tarija Experiencias
 * Component — Destination Detail
 *
 * Responsabilidad:
 * Renderizar la página de detalle de un destino individual.
 */

import { createImageCarousel } from "./image-carousel.js";

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/**
 * Genera el marcado HTML del detalle de un destino.
 *
 * @param {Object} destination
 * @returns {string}
 */
export function createDestinationDetail(destination = {}) {
    const {
        id = "",
        name = "Destino sin nombre",
        municipality = "Tarija",
        description = "",
        image = "/assets/images/placeholder-destination.svg",
        experienceCount = null
    } = destination;

    const experienceLabel =
        typeof experienceCount === "number"
            ? `${experienceCount} ${
                experienceCount === 1
                    ? "experiencia"
                    : "experiencias"
              }`
            : "";

    return `
        <section class="section section--large">
            <div class="container">

                <!-- Galería de imágenes con carrusel -->
                ${
                    destination.gallery && destination.gallery.length > 0
                        ? createImageCarousel(destination.gallery, {
                            height: "450px",
                            aspectRatio: "16 / 9",
                            showIndicators: true,
                            showControls: true,
                            altPrefix: `${escapeHtml(name)}`
                        })
                        : `
                        <div class="destination-detail__media">
                            <img
                                class="destination-detail__image"
                                src="${escapeHtml(image)}"
                                alt="${escapeHtml(name)}"
                                loading="eager"
                                style="aspect-ratio: 16 / 9;"
                            >
                        </div>
                        `
                }

                <div class="destination-detail__content">

                    <div class="destination-detail__header">
                        <span class="destination-detail__municipality">
                            ${escapeHtml(municipality)}
                        </span>
                        <h1 class="destination-detail__title">
                            ${escapeHtml(name)}
                        </h1>
                    </div>

                    ${
                        experienceLabel
                            ? `
                            <span class="destination-detail__experiences">
                                ${escapeHtml(experienceLabel)} disponibles
                            </span>
                            `
                            : ""
                    }

                    <div class="destination-detail__description">
                        <h2 class="destination-detail__subtitle">Sobre ${escapeHtml(name)}</h2>
                        <p class="destination-detail__text">
                            ${escapeHtml(description)}
                        </p>
                    </div>

                    <div class="destination-detail__actions" style="margin-top: var(--spacing-2xl);">
                        <a
                            href="/pages/destinos.html"
                            class="button button--primary"
                        >
                            ← Volver a destinos
                        </a>
                    </div>

                </div>

            </div>
        </section>
    `;
}