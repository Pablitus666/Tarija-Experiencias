/*
 * Tarija Experiencias
 * Component — Modal
 *
 * Responsabilidad:
 * Gestionar la estructura y comportamiento de modales reutilizables.
 *
 * Este componente no contiene lógica específica de páginas.
 */

/**
 * Crea la estructura de un modal.
 *
 * @param {Object} options
 * @param {string} options.id
 * @param {string} options.title
 * @param {string} options.content
 * @returns {string}
 */
export function createModal({
    id = "app-modal",
    title = "",
    content = ""
} = {}) {
    return `
        <div
            id="${escapeHtml(id)}"
            class="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="${escapeHtml(id)}-title"
            hidden
        >
            <div class="modal__backdrop" data-modal-close></div>

            <div class="modal__dialog">

                <div class="modal__header">

                    <h2
                        id="${escapeHtml(id)}-title"
                        class="modal__title"
                    >
                        ${escapeHtml(title)}
                    </h2>

                    <button
                        class="modal__close"
                        type="button"
                        data-modal-close
                        aria-label="Cerrar ventana"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>

                <div class="modal__content">
                    ${content}
                </div>

            </div>
        </div>
    `;
}

/**
 * Escapa caracteres HTML.
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
 * Renderiza un modal dentro de un contenedor.
 *
 * @param {HTMLElement} container
 * @param {Object} options
 */
export function renderModal(container, options = {}) {
    if (!(container instanceof HTMLElement)) {
        throw new TypeError(
            "El contenedor del modal debe ser un elemento HTML válido."
        );
    }

    container.insertAdjacentHTML(
        "beforeend",
        createModal(options)
    );

    const modalId = options.id || "app-modal";
    const modal = container.querySelector(`#${CSS.escape(modalId)}`);

    if (modal) {
        initializeModal(modal);
    }
}

/**
 * Inicializa el comportamiento de un modal.
 *
 * @param {HTMLElement} modal
 */
function initializeModal(modal) {
    modal.querySelectorAll("[data-modal-close]").forEach((element) => {
        element.addEventListener("click", () => {
            closeModal(modal);
        });
    });

    modal.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal(modal);
        }
    });
}

/**
 * Abre un modal.
 *
 * @param {HTMLElement|string} modal
 */
export function openModal(modal) {
    const element = resolveModal(modal);

    if (!element) {
        return;
    }

    element.hidden = false;
    document.body.classList.add("modal-open");

    const closeButton = element.querySelector(".modal__close");

    closeButton?.focus();
}

/**
 * Cierra un modal.
 *
 * @param {HTMLElement|string} modal
 */
export function closeModal(modal) {
    const element = resolveModal(modal);

    if (!element) {
        return;
    }

    element.hidden = true;
    document.body.classList.remove("modal-open");
}

/**
 * Resuelve un modal a partir de un elemento o selector.
 *
 * @param {HTMLElement|string} modal
 * @returns {HTMLElement|null}
 */
function resolveModal(modal) {
    if (modal instanceof HTMLElement) {
        return modal;
    }

    if (typeof modal === "string") {
        return document.querySelector(modal);
    }

    return null;
}
