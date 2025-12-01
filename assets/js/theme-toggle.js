document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const getStoredTheme = () => localStorage.getItem("theme");

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    updateToggleUI(theme);
  };

  const updateToggleUI = (theme) => {
    const iconSpan = toggle.querySelector(".theme-icon");
    const labelSpan = toggle.querySelector(".theme-label");

    if (!iconSpan || !labelSpan) return;

    if (theme === "dark") {
      iconSpan.textContent = "🌙";
      labelSpan.textContent = "Dark";
      toggle.setAttribute("aria-label", "Switch to light theme");
    } else {
      iconSpan.textContent = "☀️";
      labelSpan.textContent = "Light";
      toggle.setAttribute("aria-label", "Switch to dark theme");
    }
  };

  const preferredTheme =
    getStoredTheme() ||
    (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  // Ensure UI matches whichever theme is currently set on <html>
  const currentTheme =
    document.documentElement.getAttribute("data-bs-theme") || preferredTheme;

  setTheme(currentTheme);

  toggle.addEventListener("click", () => {
    const theme =
      document.documentElement.getAttribute("data-bs-theme") === "dark"
        ? "light"
        : "dark";
    setTheme(theme);
  });
});
