/*
 * Tarija Experiencias
 * Component — Hero
 *
 * Responsabilidad:
 * Renderizar el Hero principal de la página de inicio.
 *
 * Este componente contiene únicamente la estructura
 * visual y semántica del Hero.
 *
 * La lógica de navegación permanece fuera de este módulo.
 */

export function renderHero(container) {
    if (!(container instanceof HTMLElement)) {
        throw new TypeError(
            "El contenedor del Hero debe ser un elemento HTML válido."
        );
    }

    container.innerHTML = `
        <section
            class="hero"
            aria-labelledby="hero-title"
        >
            <div class="container hero__container">

                <div class="hero__content">

                    <span class="hero__eyebrow">
                        Tarija, Bolivia
                    </span>

                    <h1
                        id="hero-title"
                        class="hero__title"
                    >
                        Descubre, elige
                        <span>y vive Tarija.</span>
                    </h1>

                    <p class="hero__description">
                        Encuentra experiencias auténticas de Tarija,
                        compara opciones y descubre qué quieres vivir
                        en tu próximo viaje.
                    </p>

                    <div class="hero__actions">

                        <a
                            class="button button--primary hero__primary-action"
                            href="/pages/experiencias.html"
                        >
                            Explorar experiencias
                        </a>

                        <a
                            class="button button--secondary hero__secondary-action"
                            href="/pages/viajeros.html"
                        >
                            Cómo funciona
                        </a>

                    </div>

                    <div class="hero__trust">

                        <div class="hero__trust-item">
                            <strong>Experiencias</strong>
                            <span>para descubrir</span>
                        </div>

                        <div
                            class="hero__trust-divider"
                            aria-hidden="true"
                        ></div>

                        <div class="hero__trust-item">
                            <strong>Proveedores</strong>
                            <span>locales</span>
                        </div>

                        <div
                            class="hero__trust-divider"
                            aria-hidden="true"
                        ></div>

                        <div class="hero__trust-item">
                            <strong>Tarija</strong>
                            <span>auténtica</span>
                        </div>

                    </div>

                </div>

                <div
                    class="hero__visual"
                    aria-label="Vista representativa de una experiencia turística en Tarija"
                >

                    <div class="hero__landscape" aria-hidden="true">

                        <div class="hero__sun"></div>

                        <div
                            class="hero__mountain hero__mountain--back"
                        ></div>

                        <div
                            class="hero__mountain hero__mountain--middle"
                        ></div>

                        <div
                            class="hero__mountain hero__mountain--front"
                        ></div>

                        <div class="hero__vineyard">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                    <article class="hero__experience-card">

                        <span class="hero__card-label">
                            Experiencia destacada
                        </span>

                        <h2 class="hero__card-title">
                            Ruta del vino
                        </h2>

                        <p class="hero__card-description">
                            Viñedos, degustación y sabores del valle
                            de Tarija.
                        </p>

                        <div class="hero__card-meta">

                            <span>
                                3 horas
                            </span>

                            <span>
                                Tarija
                            </span>

                        </div>

                    </article>

                    <div class="hero__floating-badge">

                        <span
                            class="hero__floating-icon"
                            aria-hidden="true"
                        >
                            ✦
                        </span>

                        <span>
                            Vive algo
                            <strong>especial</strong>
                        </span>

                    </div>

                </div>

            </div>
        </section>
    `;
}