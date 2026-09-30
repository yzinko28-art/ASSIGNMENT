const heroOffBtn = document.getElementById("heroOffBtn");
const welcomeModal = document.getElementById("welcomeModal");
const welcomeForm = document.getElementById("welcomeForm");
const welcomeSuccess = document.getElementById("welcomeSuccess");


// Get 10% off button//+
heroOffBtn.addEventListener("click", function () {
    welcomeModal.style.display = "flex";
});


// Close button + background//
const closeButtons = document.querySelectorAll("[data-close-modal]");

closeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        welcomeModal.style.display = "none";
    });
});


// Send My Code//
welcomeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    welcomeForm.style.display = "none";
    welcomeSuccess.hidden = false;
});


// swiper//
const swiper = new Swiper(".hero-swiper", {
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// icon-btn//
const addButtons = document.querySelectorAll(".icon-btn");
addButtons.forEach(function(button){
    button.addEventListener("click",function(){
        button.innerHTML = '<i class="fa-solid fa-check"></i>';
    });
});