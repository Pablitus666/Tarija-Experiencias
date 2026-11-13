/*
 * Tarija Experiencias
 * Component — Experience Detail
 *
 * Responsabilidad:
 * Renderizar la página de detalle de una experiencia individual.
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
 * Genera el marcado HTML del detalle de una experiencia.
 *
 * @param {Object} experience
 * @returns {string}
 */
export function createExperienceDetail(experience = {}) {
    const {
        id = "",
        name = "Experiencia sin nombre",
        category = "Experiencia",
        location = "Tarija",
        duration = "",
        price = null,
        image = "/assets/images/placeholder-experience.svg",
        description = ""
    } = experience;

    const formattedPrice =
        typeof price === "number"
            ? `Bs ${price.toFixed(2)}`
            : price || "Consultar";

    return `
        <section class="section section--large">
            <div class="container">

                <!-- Galería de imágenes con carrusel -->
                ${
                    experience.gallery && experience.gallery.length > 0
                        ? createImageCarousel(experience.gallery, {
                            height: "450px",
                            aspectRatio: "16 / 9",
                            showIndicators: true,
                            showControls: true,
                            altPrefix: `${escapeHtml(name)}`
                        })
                        : `
                        <div class="experience-detail__media">
                            <img
                                class="experience-detail__image"
                                src="${escapeHtml(image)}"
                                alt="${escapeHtml(name)}"
                                loading="eager"
                                style="aspect-ratio: 16 / 9;"
                            >
                        </div>
                        `
                }

                <div class="experience-detail__content">

                    <div class="experience-detail__header">
                        <span class="experience-detail__category">
                            ${escapeHtml(category)}
                        </span>
                        <h1 class="experience-detail__title">
                            ${escapeHtml(name)}
                        </h1>
                    </div>

                    <div class="experience-detail__meta">
                        <span class="experience-detail__meta-item">
                            <strong>Lugar:</strong> ${escapeHtml(location)}
                        </span>
                        ${
                            duration
                                ? `
                                <span class="experience-detail__meta-item">
                                    <strong>Duración:</strong> ${escapeHtml(duration)}
                                </span>
                                `
                                : ""
                        }
                        <span class="experience-detail__meta-item">
                            <strong>Precio:</strong> ${escapeHtml(formattedPrice)}
                        </span>
                    </div>

                    <div class="experience-detail__description">
                        <h2 class="experience-detail__subtitle">Descripción</h2>
                        <p class="experience-detail__text">
                            ${escapeHtml(description)}
                        </p>
                    </div>

                    <div class="experience-detail__actions" style="margin-top: var(--spacing-2xl);">
                        <a
                            href="/pages/experiencias.html"
                            class="button button--primary"
                        >
                            ← Volver a experiencias
                        </a>
                    </div>

                </div>

            </div>
        </section>
    `;
}