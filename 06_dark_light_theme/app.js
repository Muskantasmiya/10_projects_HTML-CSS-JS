document.querySelector(".btn button").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    document.querySelector(".btn button").textContent = "Light Theme";
  } else {
    document.querySelector(".btn button").textContent = "Dark Theme";
  }
});
