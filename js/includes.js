// js/includes.js
document.addEventListener("DOMContentLoaded", () => {
  // Load menu
  fetch("menu.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("menu-placeholder").innerHTML = data;
    });

  // Load footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
