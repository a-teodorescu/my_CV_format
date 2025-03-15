// ------------------- POP-UP pentru Hobbies -------------------

// Obținem toate iconițele de hobby
const hobbyIcons = document.querySelectorAll('.hobby-icon');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('popup-close');
const prevBtn = document.getElementById('prev-image');
const nextBtn = document.getElementById('next-image');

// Variabile pentru controlul imaginilor
let currentImageIndex = 0;
let images = [];

// Când se dă click pe iconițele de hobby
hobbyIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Obținem imaginile din atributul data-images
        images = this.getAttribute('data-images').split(',');
        currentImageIndex = 0; // Începem cu prima imagine
        popupImage.src = images[currentImageIndex]; // Setăm sursa imaginii
        popup.style.display = 'flex'; // Afișăm pop-up-ul
    });
});

// Când se apasă pe butonul de închidere al pop-up-ului
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none'; // Ascundem pop-up-ul
});

// Când se face click pe imagine pentru zoom in/zoom out
popupImage.addEventListener('click', function() {
    if (popupImage.style.transform === 'scale(1.5)') {
        popupImage.style.transform = 'scale(1)'; // Zoom out
    } else {
        popupImage.style.transform = 'scale(1.5)'; // Zoom in
    }
});

// Când se apasă pe butonul "Prev" (imaginea anterioară)
prevBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    popupImage.src = images[currentImageIndex];
});

// Când se apasă pe butonul "Next" (imaginea următoare)
nextBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    popupImage.src = images[currentImageIndex];
});

// Închidem pop-up-ul dacă se face click în afara imaginii
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// ------------------- POP-UP pentru Certificates -------------------

// Obținem toate iconițele de telegramă
const telegramIcons = document.querySelectorAll('.telegram-icon');
const imagePopup = document.getElementById('image-popup');
const popupImageCertificate = document.getElementById('popup-image-certificate');
const closeBtnCertificate = document.getElementById('close-btn-certificate');

// Când se dă click pe iconițele de telegramă (Certificates)
telegramIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-image');
        popupImageCertificate.src = imageSrc;  // Setăm sursa imaginii în pop-up
        imagePopup.style.display = 'flex';  // Afișăm pop-up-ul
    });
});

// Când se dă click pe butonul de închidere al pop-up-ului (Certificates)
closeBtnCertificate.addEventListener('click', function() {
    imagePopup.style.display = 'none';  // Ascundem pop-up-ul
});

// Când se face click pe imaginea din pop-up pentru zoom in/zoom out
popupImageCertificate.addEventListener('click', function() {
    if (popupImageCertificate.style.transform === 'scale(1.5)') {
        popupImageCertificate.style.transform = 'scale(1)'; // Zoom out
    } else {
        popupImageCertificate.style.transform = 'scale(1.5)'; // Zoom in
    }
});

// Închidem pop-up-ul dacă se face click în afacerea imaginii (Certificates)
window.addEventListener('click', function(event) {
    if (event.target === imagePopup) {
        imagePopup.style.display = 'none';
    }
});
