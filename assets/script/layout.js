document.addEventListener("DOMContentLoaded", () => {

  const loadPartial = (id, file) => {
    const container = document.getElementById(id);
    if (!container) return;

    fetch(file)
      .then(res => res.text())
      .then(html => container.innerHTML = html)
      .catch(err => console.error(`Erreur chargement ${file}`, err));
  };

  loadPartial("navbar", "partials/navbar.html");
  loadPartial("footer", "partials/footer.html");

});
