const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme")) {
  document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
}

toggle.addEventListener("click", () => {
  let current = document.documentElement.getAttribute("data-theme");
  let next = current === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  toggle.textContent = next === "dark" ? "☀️" : "🌙";
});
