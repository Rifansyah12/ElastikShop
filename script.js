// Hamburger menu toggle
const hamburger = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  navMenu.classList.toggle("show");
  overlay.classList.toggle("show");
  hamburger.innerHTML = navMenu.classList.contains("show") ? "✕" : "☰";
}

if (hamburger) {
  hamburger.addEventListener("click", toggleMenu);
}
if (overlay) {
  overlay.addEventListener("click", toggleMenu);
}

document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("show")) toggleMenu();
  });
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
      overlay.classList.remove("show");
      if (hamburger) hamburger.innerHTML = "☰";
    }
  }
});

// Form submit handler (khusus halaman custom)
const customForm = document.getElementById("customOrderForm");
if (customForm) {
  customForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Terima kasih! Permintaan custom Anda telah dikirim. Tim Elastik Shop akan segera menghubungi Anda.",
    );
    customForm.reset();
  });
}
