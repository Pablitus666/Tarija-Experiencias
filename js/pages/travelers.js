/*
 * Tarija Experiencias
 * Page — Travelers
 *
 * Responsabilidad:
 * Renderizar la guía informativa para viajeros.
 */

export function initializePage() {
    const mainContent = document.querySelector("#main-content");

    if (!mainContent) {
        return;
    }

    mainContent.innerHTML = `
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Cómo funciona</h2>
                    <p class="section-description">
                        Todo lo que necesitas saber para planificar tu viaje a Tarija
                        y vivir experiencias auténticas con nosotros.
                    </p>
                </div>

                <div class="grid grid-3">
                    <article class="card card--flat">
                        <div class="card__content">
                            <span class="card__eyebrow">Paso 1</span>
                            <h3 class="card__title">Elige tu experiencia</h3>
                            <p class="card__description">
                                Explora nuestro catálogo de experiencias, destinos
                                y proveedores locales de Tarija.
                            </p>
                        </div>
                    </article>

                    <article class="card card--flat">
                        <div class="card__content">
                            <span class="card__eyebrow">Paso 2</span>
                            <h3 class="card__title">Reserva con el proveedor</h3>
                            <p class="card__description">
                                Contacta directamente al proveedor local y coordina
                                los detalles de tu actividad.
                            </p>
                        </div>
                    </article>

                    <article class="card card--flat">
                        <div class="card__content">
                            <span class="card__eyebrow">Paso 3</span>
                            <h3 class="card__title">Vive Tarija</h3>
                            <p class="card__description">
                                Disfruta de viñedos, montañas, aguas termales y
                                la calidez de la gente tarijeña.
                            </p>
                        </div>
                    </article>
                </div>

                <div class="section section--compact" style="margin-top: 2rem;">
                    <div class="container">
                        <div class="card">
                            <div class="card__content">
                                <h3 class="card__title">Consejos para tu visita</h3>
                                <ul class="card__description" style="list-style: disc inside; padding-left: 1rem; margin-top: 0.5rem; color: var(--color-text-secondary);">
                                    <li>La mejor temporada para el enoturismo es entre febrero y mayo.</li>
                                    <li>Lleva ropa cómoda y protección solar para caminatas.</li>
                                    <li>Reserva con anticipación en temporada alta.</li>
                                    <li>Prueba el singani, el destilado emblemático de Tarija.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
