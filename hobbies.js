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

// Când se dă click pe iconița de hobby
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
