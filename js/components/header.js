/*
 * Tarija Experiencias
 * Component — Header
 *
 * Responsabilidad:
 * Renderizar el contenedor global del encabezado.
 *
 * La navegación será responsabilidad de navigation.js.
 * Este módulo no debe contener lógica de navegación.
 */

/**
 * Renderiza el encabezado principal.
 *
 * @param {HTMLElement} container
 */
export function renderHeader(container) {
    if (!(container instanceof HTMLElement)) {
        throw new TypeError(
            "El contenedor del header debe ser un elemento HTML válido."
        );
    }

    container.innerHTML = `
        <div class="site-header__inner">
            <a
                class="site-header__brand"
                href="/index.html"
                aria-label="Tarija Experiencias — Inicio"
            >
                <img
                    src="/assets/logo/logo.svg"
                    alt="Tarija Experiencias"
                    class="site-header__logo"
                    width="180"
                    height="43"
                    loading="auto"
                    decoding="async"
                />
                <span class="site-header__brand-name">
                    Tarija Experiencias
                </span>
            </a>

            <div
                id="site-navigation"
                class="site-header__navigation"
            ></div>
        </div>
    `;
}
