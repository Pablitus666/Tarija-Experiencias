/*
 * Tarija Experiencias
 * Component — Destination Card
 *
 * Responsabilidad:
 * Representar visualmente un destino turístico.
 *
 * Este componente no contiene datos de destinos.
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
 * Genera el marcado HTML de una tarjeta de destino.
 *
 * @param {Object} destination
 * @returns {string}
 */
export function createDestinationCard(destination = {}) {
    const {
        id = "",
        name = "Destino sin nombre",
        municipality = "Tarija",
        description = "",
        image = "",
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
        <article
            class="destination-card"
            data-destination-id="${escapeHtml(id)}"
        >
            <div class="destination-card__media">
                ${
                    image
                        ? `
                            <img
                                class="destination-card__image"
                                src="${escapeHtml(image)}"
                                alt="${escapeHtml(name)}"
                                loading="eager"
                            >
                        `
                        : `
                            <div
                                class="destination-card__placeholder"
                                aria-hidden="true"
                            ></div>
                        `
                }
            </div>

            <div class="destination-card__content">

                <span class="destination-card__municipality">
                    ${escapeHtml(municipality)}
                </span>

                <h3 class="destination-card__title">
                    ${escapeHtml(name)}
                </h3>

                ${
                    description
                        ? `
                            <p class="destination-card__description">
                                ${escapeHtml(description)}
                            </p>
                        `
                        : ""
                }

                ${
                    experienceLabel
                        ? `
                            <span class="destination-card__experiences">
                                ${escapeHtml(experienceLabel)}
                            </span>
                        `
                        : ""
                }

                <div class="destination-card__footer">

                    <a
                        class="button button--secondary destination-card__action"
                        href="/pages/destinos.html?id=${encodeURIComponent(id)}"
                    >
                        Explorar destino
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
 * @param {Object} destination
 */
export function renderDestinationCard(container, destination) {
    if (!(container instanceof HTMLElement)) {
        throw new TypeError(
            "El contenedor de la tarjeta debe ser un elemento HTML válido."
        );
    }

    container.insertAdjacentHTML(
        "beforeend",
        createDestinationCard(destination)
    );
}
