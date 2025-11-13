document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const name = "Ochieng' Sulwe";
  const footerText = document.getElementById("footer-text");
  if (footerText) {
    footerText.textContent = `© ${year} | ${name}`;
  }
});

