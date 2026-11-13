/*
 * Tarija Experiencias
 * Page — About
 *
 * Responsabilidad:
 * Renderizar la página "Nosotros" con la historia, misión, valores y equipo.
 */

export function initializePage() {
    const mainContent = document.querySelector("#main-content");

    if (!mainContent) {
        return;
    }

    mainContent.innerHTML = `
        <section class="section section--large">
            <div class="container">

                <!-- Encabezado principal -->
                <div class="section-header" style="max-width: 700px; margin: 0 auto var(--spacing-4xl); text-align: center;">
                    <h2 class="section-title" style="font-size: clamp(2.5rem, 6vw, 3.5rem);">
                        Nosotros
                    </h2>
                    <p class="section-description" style="font-size: 1.125rem; max-width: 600px; margin: 0 auto;">
                        Somos el puente entre viajeros curiosos y la alma de Tarija.
                        Conectamos a personas con experiencias auténticas diseñadas por
                        quienes conocen cada valle, cada viñedo y cada sendero del departamento.
                    </p>
                </div>

                <!-- Nuestra misión -->
                <section class="about__block">
                    <div class="about__card">
                        <div class="about__icon">✦</div>
                        <h3 class="about__title">Nuestra misión</h3>
                        <p class="about__text">
                            Promover un turismo sostenible y consciente en Tarija, poniendo en
                            valor a los productores locales, las bodegas familiares, los guías de
                            montaña y los emprendedores del valle. Creemos que viajar bien
                            significa dejar huella positiva en las comunidades que visitamos.
                        </p>
                    </div>
                </section>

                <!-- Nuestros valores -->
                <section class="about__block about--values">
                    <div class="about__card">
                        <div class="about__icon">◆</div>
                        <h3 class="about__title">Nuestros valores</h3>
                        <div class="about__values-list">
                            <div class="about__value-item">
                                <span class="about__value-label">Autenticidad</span>
                                <span class="about__value-desc">Experiencias reales, vividas y contadas por los propios locales de Tarija.</span>
                            </div>
                            <div class="about__value-item">
                                <span class="about__value-label">Sostenibilidad</span>
                                <span class="about__value-desc">Respeto profundo por el entorno natural y las comunidades que lo habitan.</span>
                            </div>
                            <div class="about__value-item">
                                <span class="about__value-label">Cercanía</span>
                                <span class="about__value-desc">Contacto directo entre viajero y proveedor, sin intermediarios que distorsionen la experiencia.</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- El equipo -->
                <section class="section section--compact" style="margin-top: var(--spacing-5xl);">
                    <div class="container">
                        <div class="section-header" style="text-align: center; margin-bottom: var(--spacing-3xl);">
                            <h3 class="section-title">El equipo</h3>
                            <p class="section-description">
                                Personas apasionadas por compartir lo mejor de Tarija con el mundo.
                            </p>
                        </div>

                        <div class="grid grid-3">
                            <article class="card card--interactive text-center">
                                <div class="card__media">
                                    <div class="team__avatar" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));"></div>
                                </div>
                                <div class="card__content">
                                    <h4 class="card__title">Ana Pérez</h4>
                                    <p class="card__description" style="color: var(--color-text-muted); font-size: 0.875rem;">Coordinadora de experiencias</p>
                                </div>
                            </article>
                            <article class="card card--interactive text-center">
                                <div class="card__media">
                                    <div class="team__avatar" style="background: linear-gradient(135deg, var(--color-secondary), var(--color-accent));"></div>
                                </div>
                                <div class="card__content">
                                    <h4 class="card__title">Luis Rojas</h4>
                                    <p class="card__description" style="color: var(--color-text-muted); font-size: 0.875rem;">Guía de enoturismo</p>
                                </div>
                            </article>
                            <article class="card card--interactive text-center">
                                <div class="card__media">
                                    <div class="team__avatar" style="background: linear-gradient(135deg, var(--color-accent), var(--color-primary));"></div>
                                </div>
                                <div class="card__content">
                                    <h4 class="card__title">María Gómez</h4>
                                    <p class="card__description" style="color: var(--color-text-muted); font-size: 0.875rem;">Atención al viajero</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    `;
}