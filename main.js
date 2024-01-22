function closePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
  document.body.style.overflow = "auto";
}

function openPopup(popupId) {
  document.getElementById(popupId).style.display = "flex";
  document.body.style.overflow = "hidden";
}

function order(popupId) {
  alert("Terimakasih telah memesan");
}

function reserve(popupId) {
  alert("Terimakasih telah reservasi");
}

document
  .getElementById("popup-trigger1")
  .addEventListener("click", function () {
    openPopup("popup1");
  });

document
  .getElementById("popup-trigger2")
  .addEventListener("click", function () {
    openPopup("popup2");
  });

document
  .getElementById("popup-trigger3")
  .addEventListener("click", function () {
    openPopup("popup3");
  });

document
  .getElementById("popup-trigger4")
  .addEventListener("click", function () {
    openPopup("popup4");
  });

document
  .getElementById("popup-trigger5")
  .addEventListener("click", function () {
    openPopup("popup5");
  });

document
  .getElementById("popup-trigger6")
  .addEventListener("click", function () {
    openPopup("popup6");
  });

// Get the button
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
