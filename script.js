// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.getElementById("navbar_toggler");
  const navbarMenu = document.getElementById("navbar_menu");

  navbarToggler.addEventListener("click", () => {
    if (navbarMenu.style.display === "flex") {
      navbarMenu.style.display = "none";
    } else {
      navbarMenu.style.display = "flex";
    }
  });
});

$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    // center: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// Get the modal
let modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// // date and time
// function updateDateTime() {
//   const dateElement = document.getElementById("date");
//   const now = new Date();
//   const dateOptions = { day: "numeric" };
//   const hours = now.getHours();
//   const minutes = now.getMinutes();

//   dateElement.textContent = now.toLocaleDateString(undefined, dateOptions);
//   document.getElementById("hours").textContent =
//     hours < 10 ? "0" + hours : hours;
//   document.getElementById("minutes").textContent =
//     minutes < 10 ? "0" + minutes : minutes;
// }

// // Update the time immediately
// updateDateTime();

// // Update the time every minute
// setInterval(updateDateTime, 60000);
