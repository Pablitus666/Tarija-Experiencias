/*
 * Tarija Experiencias
 * Component — Footer
 *
 * Responsabilidad:
 * Renderizar el pie de página global.
 *
 * Este componente es reutilizable en todas las páginas.
 * No debe contener lógica específica de páginas.
 */

/**
 * Renderiza el pie de página principal.
 *
 * @param {HTMLElement} container
 */
export function renderFooter(container) {
    if (!(container instanceof HTMLElement)) {
        throw new TypeError(
            "El contenedor del footer debe ser un elemento HTML válido."
        );
    }

    container.innerHTML = `
        <div class="site-footer__inner">

            <div class="site-footer__main">

                <div class="site-footer__brand">
                    <a
                        class="site-footer__brand-name"
                        href="/index.html"
                    >
                        Tarija Experiencias
                    </a>

                    <p class="site-footer__description">
                        Descubre, elige y vive Tarija.
                    </p>
                </div>

                <nav
                    class="site-footer__navigation"
                    aria-label="Navegación del pie de página"
                >
                    <div class="site-footer__column">
                        <h2 class="site-footer__title">
                            Explora
                        </h2>

                        <ul class="site-footer__list">
                            <li>
                                <a href="/pages/experiencias.html">
                                    Experiencias
                                </a>
                            </li>
                            <li>
                                <a href="/pages/destinos.html">
                                    Destinos
                                </a>
                            </li>
                            <li>
                                <a href="/pages/viajeros.html">
                                    Para viajeros
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="site-footer__column">
                        <h2 class="site-footer__title">
                            Participa
                        </h2>

                        <ul class="site-footer__list">
                            <li>
                                <a href="/pages/proveedores.html">
                                    Para proveedores
                                </a>
                            </li>
                            <li>
                                <a href="/pages/nosotros.html">
                                    Nosotros
                                </a>
                            </li>
                            <li>
                                <a href="/pages/contacto.html">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="site-footer__column">
                        <h2 class="site-footer__title">
                            Información
                        </h2>

                        <ul class="site-footer__list">
                            <li>
                                <a href="#">
                                    Términos y condiciones
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Política de privacidad
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>

            <div class="site-footer__bottom">

                <p class="site-footer__copyright">
                    © 2026 Tarija Experiencias — Todos los derechos reservados
                </p>

                <div class="site-footer__social">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="instagram"
                        aria-label="Instagram"
                    >
                        <img
                            src="/assets/Redes%20Sociales/instagram.svg"
                            alt="Instagram"
                            width="20"
                            height="20"
                            aria-hidden="true"
                            style="display: block; width: 100%; height: 100%; object-fit: contain;"
                        >
                    </a>

                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="facebook"
                        aria-label="Facebook"
                    >
                        <img
                            src="/assets/Redes%20Sociales/facebook.svg"
                            alt="Facebook"
                            width="20"
                            height="20"
                            aria-hidden="true"
                            style="display: block; width: 100%; height: 100%; object-fit: contain;"
                        >
                    </a>

                    <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="whatsapp"
                        aria-label="WhatsApp"
                    >
                        <img
                            src="/assets/Redes%20Sociales/whatsapp.svg"
                            alt="WhatsApp"
                            width="20"
                            height="20"
                            aria-hidden="true"
                            style="display: block; width: 100%; height: 100%; object-fit: contain;"
                        >
                    </a>

                    <a
                        href="https://t.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="telegram"
                        aria-label="Telegram"
                    >
                        <img
                            src="/assets/Redes%20Sociales/telegram.svg"
                            alt="Telegram"
                            width="20"
                            height="20"
                            aria-hidden="true"
                            style="display: block; width: 100%; height: 100%; object-fit: contain;"
                        >
                    </a>

                    <a
                        href="https://www.tiktok.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="tiktok"
                        aria-label="TikTok"
                    >
                        <img
                            src="/assets/Redes%20Sociales/tiktok.svg"
                            alt="TikTok"
                            width="20"
                            height="20"
                            aria-hidden="true"
                            style="display: block; width: 100%; height: 100%; object-fit: contain;"
                        >
                    </a>
                </div>

            </div>

        </div>
    `;
}

