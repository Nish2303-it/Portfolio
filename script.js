// script.js

// Dark mode toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-theme");
    const html = document.documentElement;
  
    // Optional: Save dark mode preference in local storage
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
    }
  
    toggleBtn.addEventListener("click", () => {
      html.classList.toggle("dark");
  
      // Save preference
      if (html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
  