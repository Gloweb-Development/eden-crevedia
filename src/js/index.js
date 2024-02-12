document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuCheckbox = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu .menu-item");

  function closeMobileMenu() {
    mobileMenuCheckbox.checked = false;
  }

  menuLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });
});

document.getElementById("button").addEventListener("click", toggleError);
const errMessages = document.querySelectorAll("#error");

function toggleError() {
  // Show error message
  errMessages.forEach((el) => {
    el.classList.toggle("hidden");
  });

  // Highlight input and label with red
  const allBorders = document.querySelectorAll(".border-gray-200");
  const allTexts = document.querySelectorAll(".text-gray-500");
  allBorders.forEach((el) => {
    el.classList.toggle("border-red-600");
  });
  allTexts.forEach((el) => {
    el.classList.toggle("text-red-600");
  });
}
