/*
 * Tarija Experiencias
 * Core — Theme
 *
 * Responsabilidad:
 * Gestionar exclusivamente el tema visual de la aplicación.
 */

const THEME_STORAGE_KEY = "tarija_experiencias_theme";

const THEME_DARK = "dark";
const THEME_LIGHT = "light";

/**
 * Obtiene el tema preferido por el usuario.
 *
 * Prioridad:
 * 1. Preferencia guardada en localStorage.
 * 2. Preferencia del sistema operativo.
 *
 * @returns {"light"|"dark"}
 */
export function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === THEME_DARK || savedTheme === THEME_LIGHT) {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? THEME_DARK
        : THEME_LIGHT;
}

/**
 * Aplica el tema al documento con una transición suave.
 *
 * @param {"light"|"dark"} theme
 * @param {boolean} persist
 * @returns {"light"|"dark"}
 */
export function setTheme(theme, persist = true) {
    const normalizedTheme = theme === THEME_DARK
        ? THEME_DARK
        : THEME_LIGHT;

    document.documentElement.dataset.theme = normalizedTheme;

    // Marca de transición para evitar parpadeo y animar el cambio.
    document.documentElement.classList.add("theme-transitioning");
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            document.documentElement.classList.remove("theme-transitioning");
        });
    });

    if (persist) {
        localStorage.setItem(THEME_STORAGE_KEY, normalizedTheme);
    }

    return normalizedTheme;
}

/**
 * Alterna entre tema claro y oscuro.
 *
 * @returns {"light"|"dark"}
 */
export function toggleTheme() {
    const currentTheme =
        document.documentElement.dataset.theme || getPreferredTheme();

    const nextTheme =
        currentTheme === THEME_DARK
            ? THEME_LIGHT
            : THEME_DARK;

    return setTheme(nextTheme);
}

/**
 * Inicializa el tema de la aplicación.
 *
 * No modifica localStorage durante la inicialización.
 *
 * @returns {"light"|"dark"}
 */
export function initializeTheme() {
    return setTheme(getPreferredTheme(), false);
}

export {
    THEME_DARK,
    THEME_LIGHT,
    THEME_STORAGE_KEY
};
