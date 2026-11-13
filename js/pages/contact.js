/*
 * Tarija Experiencias
 * Page — Contact
 *
 * Responsabilidad:
 * Renderizar el formulario de contacto con validación en el cliente
 * y retroalimentación visual clara.
 */

export function initializePage() {
    const mainContent = document.querySelector("#main-content");

    if (!mainContent) {
        return;
    }

    mainContent.innerHTML = `
        <section class="section" data-reveal="fade-up">
            <div class="container" style="max-width: 680px; margin: 0 auto;">
                <div class="section-header">
                    <h2 class="section-title">Contáctanos</h2>
                    <p class="section-description">
                        ¿Tienes dudas sobre una experiencia, una reserva o necesitas
                        información turística de Tarija? Escríbenos y te responderemos
                        a la brevedad.
                    </p>
                </div>

                <form id="contact-form" class="form" novalidate data-reveal="fade-up" reveal-delay-2>
                    <div class="form-group">
                        <label class="form-label" for="contact-name">
                            Nombre completo <span class="form-required">*</span>
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="contact-name"
                            name="name"
                            placeholder="Juan Pérez"
                            required
                            minlength="2"
                            autocomplete="name"
                        >
                        <p class="form-error" id="contact-name-error" hidden>
                            El nombre debe tener al menos 2 caracteres.
                        </p>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="contact-email">
                            Correo electrónico <span class="form-required">*</span>
                        </label>
                        <input
                            type="email"
                            class="form-control"
                            id="contact-email"
                            name="email"
                            placeholder="juan@ejemplo.com"
                            required
                            autocomplete="email"
                        >
                        <p class="form-error" id="contact-email-error" hidden>
                            Ingresa un correo electrónico válido.
                        </p>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="contact-subject">Asunto</label>
                        <select class="form-control" id="contact-subject" name="subject">
                            <option value="">Selecciona un asunto</option>
                            <option value="experiencia">Consulta sobre una experiencia</option>
                            <option value="reserva">Ayuda con una reserva</option>
                            <option value="proveedor">Quiero ser proveedor</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="contact-message">
                            Mensaje <span class="form-required">*</span>
                        </label>
                        <textarea
                            class="form-control"
                            id="contact-message"
                            name="message"
                            rows="5"
                            placeholder="Cuéntanos en qué podemos ayudarte..."
                            required
                            minlength="10"
                        ></textarea>
                        <p class="form-error" id="contact-message-error" hidden>
                            El mensaje debe tener al menos 10 caracteres.
                        </p>
                    </div>

                    <div class="form-actions">
                        <button
                            type="submit"
                            class="button button--primary"
                            id="contact-submit"
                        >
                            <span class="button-label">Enviar mensaje</span>
                            <span class="button-loading" hidden>Enviando...</span>
                        </button>
                    </div>

                    <div
                        id="contact-message-success"
                        hidden
                        class="form-success"
                        role="status"
                        aria-live="polite"
                    >
                        ¡Mensaje enviado correctamente! Te responderemos pronto.
                    </div>
                </form>
            </div>
        </section>
    `;

    initializeContactForm();
}

/**
 * Inicializa la validación y envío del formulario de contacto.
 */
function initializeContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) {
        return;
    }

    const fields = {
        name: {
            element: form.querySelector("#contact-name"),
            error: form.querySelector("#contact-name-error"),
            minLength: 2,
            required: true
        },
        email: {
            element: form.querySelector("#contact-email"),
            error: form.querySelector("#contact-email-error"),
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            required: true
        },
        message: {
            element: form.querySelector("#contact-message"),
            error: form.querySelector("#contact-message-error"),
            minLength: 10,
            required: true
        }
    };

    const submitButton = form.querySelector("#contact-submit");
    const buttonLabel = submitButton.querySelector(".button-label");
    const buttonLoading = submitButton.querySelector(".button-loading");
    const successMessage = form.querySelector("#contact-message-success");

    let isValidating = false;

    const validateField = (field) => {
        const value = field.element.value.trim();
        let valid = true;

        if (field.required && value.length === 0) {
            valid = false;
        } else if (field.minLength && value.length < field.minLength) {
            valid = false;
        } else if (field.pattern && !field.pattern.test(value)) {
            valid = false;
        }

        field.error.hidden = valid;
        field.element.classList.toggle("invalid", !valid);
        field.element.setAttribute("aria-invalid", String(!valid));

        return valid;
    };

    const validateAll = () => {
        let valid = true;
        Object.values(fields).forEach((field) => {
            if (!validateField(field)) {
                valid = false;
            }
        });
        return valid;
    };

    Object.values(fields).forEach((field) => {
        field.element.addEventListener("input", () => validateField(field));
        field.element.addEventListener("blur", () => validateField(field));
    });

    const setLoadingState = (loading) => {
        isValidating = loading;
        submitButton.disabled = loading;
        buttonLabel.hidden = loading;
        buttonLoading.hidden = !loading;
    };

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (!validateAll()) {
            return;
        }

        setLoadingState(true);

        try {
            // Simulación de envío al servidor (no hay backend en este proyecto).
            await new Promise((resolve) => setTimeout(resolve, 1500));

            form.reset();
            Object.values(fields).forEach((field) => {
                field.element.classList.remove("invalid");
                field.element.setAttribute("aria-invalid", "false");
            });
            successMessage.hidden = false;

            // Enfoque al mensaje de éxito para lectores de pantalla.
            successMessage.focus();

            setTimeout(() => {
                successMessage.hidden = true;
            }, 6000);
        } catch {
            alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        } finally {
            setLoadingState(false);
        }
    });
}
