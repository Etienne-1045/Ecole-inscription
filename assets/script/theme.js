document.addEventListener("DOMContentLoaded", () => {

  /* 1. APPLIQUER LE THÈME SAUVÉ */
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  /* 2. OBSERVER LE DOM POUR LES BOUTONS (navbar chargée via fetch) */
  const observer = new MutationObserver(() => {

    // Sélectionner tous les boutons de thème (desktop + mobile)
    const toggles = document.querySelectorAll("#themeToggle, #themeToggleMobile");
    if (!toggles.length) return;

    toggles.forEach(toggle => {
      const icon = toggle.querySelector("i");

      // Icône correcte au chargement
      if (document.body.classList.contains("dark")) {
        if(icon) icon.classList.replace("bi-moon-stars", "bi-sun");
      }

      // Ajouter l'événement clic
      toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        // Mettre à jour toutes les icônes en même temps
        toggles.forEach(t => {
          const ic = t.querySelector("i");
          if(ic){
            ic.classList.toggle("bi-moon-stars", !isDark);
            ic.classList.toggle("bi-sun", isDark);
          }
        });
      });
    });

    observer.disconnect(); // stop observer après initialisation
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
