/*
 * Tarija Experiencias
 * Page — Providers
 *
 * Responsabilidad:
 * Renderizar la página de incorporación para proveedores de experiencias.
 */

export function initializePage() {
    const mainContent = document.querySelector("#main-content");

    if (!mainContent) {
        return;
    }

    mainContent.innerHTML = `
        <section class="section">
            <div class="container">
                <div class="section-header" style="max-width: 700px; margin: 0 auto 2rem;">
                    <h2 class="section-title">Únete como proveedor</h2>
                    <p class="section-description">
                        Si ofreces experiencias turísticas en Tarija, únete a nuestra
                        plataforma y llega a viajeros que buscan vivir el valle de forma
                        auténtica.
                    </p>
                </div>

                <div class="grid grid-3">
                    <article class="card">
                        <div class="card__content">
                            <span class="card__eyebrow">Ventaja 1</span>
                            <h3 class="card__title">Visibilidad local</h3>
                            <p class="card__description">
                                Tu experiencia se muestra ante viajeros interesados
                                en Tarija y sus alrededores.
                            </p>
                        </div>
                    </article>

                    <article class="card">
                        <div class="card__content">
                            <span class="card__eyebrow">Ventaja 2</span>
                            <h3 class="card__title">Gestión sencilla</h3>
                            <p class="card__description">
                                Publica, actualiza y promociona tus experiencias
                                sin complicaciones técnicas.
                            </p>
                        </div>
                    </article>

                    <article class="card">
                        <div class="card__content">
                            <span class="card__eyebrow">Ventaja 3</span>
                            <h3 class="card__title">Contacto directo</h3>
                            <p class="card__description">
                                Recibe solicitudes de los viajeros y coordina
                                las reservas directamente con ellos.
                            </p>
                        </div>
                    </article>
                </div>

                <div class="card" style="max-width: 700px; margin: 2rem auto 0;">
                    <div class="card__content">
                        <h3 class="card__title">¿Listo para empezar?</h3>
                        <p class="card__description" style="margin-bottom: 1rem;">
                            Escríbenos a <strong>proveedores@tarijaexperiencias.example</strong>
                            y te contactaremos para activar tu perfil.
                        </p>
                        <a href="/pages/contacto.html" class="button button--primary">Contactar ahora</a>
                    </div>
                </div>
            </div>
        </section>
    `;
}
