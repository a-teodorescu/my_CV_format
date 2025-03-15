// Obținem toate elementele de hobby
const hobbyItems = document.querySelectorAll('.hobby-item');
const hobbyPopup = document.getElementById('hobby-popup');
const popupImage = document.getElementById('popup-image');
const closeHobbyPopup = document.getElementById('close-hobby-popup');
const prevImage = document.getElementById('prev-image');
const nextImage = document.getElementById('next-image');

// Variabile pentru imagini și navigare
let currentImageIndex = 0;
let hobbyImages = [];

// Când se dă click pe un element de hobby
hobbyItems.forEach(item => {
    item.addEventListener('click', function() {
        // Obținem imaginile asociate fiecărui hobby
        hobbyImages = JSON.parse(this.getAttribute('data-images'));
        currentImageIndex = 0; // Pornim de la prima imagine

        // Setăm imaginea inițială
        popupImage.src = hobbyImages[currentImageIndex];
        
        // Afișăm pop-up-ul
        hobbyPopup.style.display = 'flex';
    });
});

// Când se dă click pe butonul de închidere
closeHobbyPopup.addEventListener('click', function() {
    hobbyPopup.style.display = 'none'; // Ascundem pop-up-ul
});

// Navigare între imagini
prevImage.addEventListener('click', function() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        popupImage.src = hobbyImages[currentImageIndex];
    }
});

nextImage.addEventListener('click', function() {
    if (currentImageIndex < hobbyImages.length - 1) {
        currentImageIndex++;
        popupImage.src = hobbyImages[currentImageIndex];
    }
});

// Închidem pop-up-ul dacă se face click în afacerea acestuia
window.addEventListener('click', function(event) {
    if (event.target === hobbyPopup) {
        hobbyPopup.style.display = 'none'; // Ascundem pop-up-ul
    }
});