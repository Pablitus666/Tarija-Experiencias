/*
 * Tarija Experiencias
 * Utility — Render Grid
 *
 * Responsabilidad:
 * Renderizar una lista de tarjetas dentro de un contenedor
 * usando una función generadora de marcado.
 */

/**
 * Renderiza una grilla de tarjetas dentro de un contenedor.
 *
 * @param {HTMLElement} container
 * @param {Array} items
 * @param {(item: Object) => string} createCard
 * @param {string} [gridClass] Clase CSS adicional para el contenedor de la grilla
 */
export function renderCardGrid(container, items, createCard, gridClass = "") {
    if (!(container instanceof HTMLElement)) {
        throw new TypeError("El contenedor de la grilla debe ser un elemento HTML válido.");
    }

    container.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = `grid grid-3${gridClass ? " " + gridClass : ""}`;

    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = createCard(item);

        const element = wrapper.firstElementChild;
        if (element) {
            fragment.append(element);
        }
    });

    grid.append(fragment);
    container.append(grid);
}
