/*
 * Tarija Experiencias
 * Component — Image Carousel
 *
 * Responsabilidad:
 * Renderizar un carrusel de imágenes táctil y accesible
 * para galerías de experiencias y destinos.
 */

export function createImageCarousel(images = [], options = {}) {
    const {
        className = "image-carousel",
        height = "450px",
        aspectRatio = "16 / 9",
        showIndicators = true,
        showControls = true,
        altPrefix = "Imagen"
    } = options;

    if (!images || images.length === 0) {
        return "";
    }

    const isSingle = images.length === 1;

    const slidesHtml = images
        .map(
            (src, index) => `
            <div
                class="carousel__slide ${index === 0 ? "is-active" : ""}"
                data-slide-index="${index}"
            >
                <img
                    class="carousel__image"
                    src="${src}"
                    alt="${altPrefix} ${index + 1}"
                    loading="${index === 0 ? "eager" : "lazy"}"
                    style="aspect-ratio: ${aspectRatio};"
                >
            </div>
        `
        )
        .join("");

    const indicatorsHtml = showIndicators && images.length > 1
        ? `
            <div class="carousel__indicators">
                ${images
                    .map(
                        (_, index) => `
                        <button
                            class="carousel__indicator ${index === 0 ? "is-active" : ""}"
                            data-slide-index="${index}"
                            aria-label="Ir a imagen ${index + 1}"
                            aria-pressed="${index === 0}"
                        ></button>
                    `
                    )
                    .join("")}
            </div>
        `
        : "";

    const controlsHtml = showControls && images.length > 1
        ? `
            <button
                class="carousel__control carousel__control--prev"
                aria-label="Imagen anterior"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button
                class="carousel__control carousel__control--next"
                aria-label="Siguiente imagen"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        `
        : "";

    const counterHtml = images.length > 1
        ? `
            <div class="carousel__counter">
                <span class="carousel__current">1</span>
                <span class="carousel__separator"> / </span>
                <span class="carousel__total">${images.length}</span>
            </div>
        `
        : "";

    return `
        <section class="${className}" style="--carousel-height: ${height};">
            <div class="carousel__viewport">
                <div class="carousel__track">
                    ${slidesHtml}
                </div>
                ${controlsHtml}
            </div>
            ${indicatorsHtml}
            ${counterHtml}
        </section>
    `;
}

/**
 * Inicializa la interactividad de un carrusel renderizado.
 *
 * @param {HTMLElement} container
 * @param {number} totalSlides
 */
export function initImageCarousel(container, totalSlides) {
    if (!(container instanceof HTMLElement) || totalSlides <= 1) {
        return;
    }

    let currentIndex = 0;
    const track = container.querySelector(".carousel__track");
    const slides = container.querySelectorAll(".carousel__slide");
    const indicators = container.querySelectorAll(".carousel__indicator");
    const currentEl = container.querySelector(".carousel__current");
    const prevBtn = container.querySelector(".carousel__control--prev");
    const nextBtn = container.querySelector(".carousel__control--next");

    function updateSlide(index) {
        currentIndex = ((index % totalSlides) + totalSlides) % totalSlides;

        if (track) {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        slides.forEach((slide, i) => {
            slide.classList.toggle("is-active", i === currentIndex);
            const img = slide.querySelector("img");
            if (img && i === currentIndex) {
                img.loading = "eager";
            }
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("is-active", i === currentIndex);
            indicator.setAttribute("aria-pressed", i === currentIndex);
        });

        if (currentEl) {
            currentEl.textContent = currentIndex + 1;
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => updateSlide(currentIndex - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => updateSlide(currentIndex + 1));
    }

    indicators.forEach((indicator) => {
        indicator.addEventListener("click", () => {
            const index = parseInt(indicator.getAttribute("data-slide-index"), 10);
            updateSlide(index);
        });
    });

    // Soporte táctil básico (swipe)
    let startX = 0;
    let isDragging = false;

    const viewport = container.querySelector(".carousel__viewport");

    viewport.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    viewport.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = startX - currentX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                updateSlide(currentIndex + 1);
            } else {
                updateSlide(currentIndex - 1);
            }
            isDragging = false;
        }
    });

    viewport.addEventListener("touchend", () => {
        isDragging = false;
    });
}