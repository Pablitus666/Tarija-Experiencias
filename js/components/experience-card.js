/*
 * Tarija Experiencias
 * Component — Experience Card
 *
 * Responsabilidad:
 * Representar visualmente una experiencia turística.
 *
 * Este componente no contiene datos de experiencias.
 * Los datos serán proporcionados por los servicios.
 */

/**
 * Escapa caracteres HTML para evitar insertar contenido
 * no confiable directamente en el marcado.
 *
 * @param {unknown} value
 * @returns {string}
 */
function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/**
 * Genera el marcado HTML de una tarjeta de experiencia.
 *
 * @param {Object} experience
 * @returns {string}
 */
export function createExperienceCard(experience = {}) {
    const {
        id = "",
        name = "Experiencia sin nombre",
        category = "Experiencia",
        location = "Tarija",
        duration = "",
        price = null,
        image = "",
        description = ""
    } = experience;

    const formattedPrice =
        typeof price === "number"
            ? `Bs ${price.toFixed(2)}`
            : price || "Consultar";

    return `
        <article
            class="experience-card"
            data-experience-id="${escapeHtml(id)}"
        >
            <div class="experience-card__media">
                ${
                    image
                        ? `
                            <img
                                class="experience-card__image"
                                src="${escapeHtml(image)}"
                                alt="${escapeHtml(name)}"
                                loading="eager"
                            >
                        `
                        : `
                            <div
                                class="experience-card__placeholder"
                                aria-hidden="true"
                            ></div>
                        `
                }
            </div>

            <div class="experience-card__content">

                <span class="experience-card__category">
                    ${escapeHtml(category)}
                </span>

                <h3 class="experience-card__title">
                    ${escapeHtml(name)}
                </h3>

                ${
                    description
                        ? `
                            <p class="experience-card__description">
                                ${escapeHtml(description)}
                            </p>
                        `
                        : ""
                }

                <div class="experience-card__meta">

                    ${
                        location
                            ? `
                                <span class="experience-card__location">
                                    ${escapeHtml(location)}
                                </span>
                            `
                            : ""
                    }

                    ${
                        duration
                            ? `
                                <span class="experience-card__duration">
                                    ${escapeHtml(duration)}
                                </span>
                            `
                            : ""
                    }

                </div>

                <div class="experience-card__footer">

                    <span class="experience-card__price">
                        ${escapeHtml(formattedPrice)}
                    </span>

                    <a
                        class="button button--secondary experience-card__action"
                        href="/pages/experiencias.html?id=${encodeURIComponent(id)}"
                    >
                        Ver experiencia
                    </a>

                </div>

            </div>
        </article>
    `;
}

/**
 * Renderiza una tarjeta dentro de un contenedor.
 *
 * @param {HTMLElement} container
 * @param {Object} experience
 */
export function renderExperienceCard(container, experience) {
    if (!(container instanceof HTMLElement)) {
        throw new TypeError(
            "El contenedor de la tarjeta debe ser un elemento HTML válido."
        );
    }

    container.insertAdjacentHTML(
        "beforeend",
        createExperienceCard(experience)
    );
}
