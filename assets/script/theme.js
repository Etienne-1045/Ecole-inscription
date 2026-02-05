document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     1. APPLIQUER LE THÈME SAUVÉ
     ========================= */
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  /* =========================
     2. OBSERVER LE DOM POUR LA NAVBAR
     (car elle est chargée via fetch)
     ========================= */
  const observer = new MutationObserver(() => {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    const icon = toggle.querySelector("i");

    // Icône correcte au chargement
    if (document.body.classList.contains("dark")) {
      icon.classList.replace("bi-moon-stars", "bi-sun");
    }

    // Clic sur le bouton
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");

      icon.classList.toggle("bi-moon-stars", !isDark);
      icon.classList.toggle("bi-sun", isDark);
    });

    observer.disconnect(); // On arrête l'observation après initialisation
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
