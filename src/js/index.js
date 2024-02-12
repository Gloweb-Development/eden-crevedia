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

document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll('[id^="button-"]');
  var dropdownMenus = document.querySelectorAll(".dropdown-menu");

  var menuItems = document.querySelectorAll(".menu-item");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Hide all items by default
      menuItems.forEach(function (item) {
        item.style.display = "none";
      });

      // Show items based on the selected set
      var setClass = button.id.replace("button-", "");
      document.querySelectorAll(".set-" + setClass).forEach(function (item) {
        item.style.display = "block";
      });
      dropdownMenus.forEach(function (dropdownMenu) {
        // Toggle dropdown visibility
        dropdownMenu.style.display =
          dropdownMenu.style.display === "none" ||
          dropdownMenu.style.display === ""
            ? "block"
            : "none";
      });
    });
  });

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Handle the selection logic here
      console.log("Selected item:", item.innerText);
      // You can add additional logic based on the selected item
      dropdownMenu.style.display = "none"; // Close the dropdown after selection
    });
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownMenu.contains(event.target) &&
      !buttons[0].contains(event.target) &&
      !buttons[1].contains(event.target) &&
      !buttons[2].contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const dropdownMenu = document.getElementById("dropdown-menu");
  const productContainers = document.querySelectorAll(
    ".flex.flex-col.col-span-1"
  );

  dropdownMenu.addEventListener("click", function (event) {
    if (event.target.classList.contains("menu-item")) {
      const selectedCategory = event.target.getAttribute("data-category");

      productContainers.forEach((container) => {
        const category = container.getAttribute("data-category");

        if (selectedCategory === "all" || selectedCategory === category) {
          container.style.display = "flex";
        } else {
          container.style.display = "none";
        }
      });
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
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
