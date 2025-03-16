// ------------------- POP-UP pentru Hobbies -------------------

// Obținem toate iconițele de camera (pentru secțiunea de Hobbies)
const hobbyIcons = document.querySelectorAll('.hobby-icon');
const hobbyPopup = document.getElementById('hobby-popup');
const hobbyPopupImage = document.getElementById('hobby-popup-image');
const closeHobbyBtn = document.getElementById('close-hobby-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Inițializăm indexul imaginii curente pentru fiecare hobby
let currentImageIndex = 0;
let hobbyImages = [];

// Când se dă click pe iconița de camera (pentru fiecare hobby)
hobbyIcons.forEach((icon, index) => {
    icon.addEventListener('click', function() {
        const hobby = icon.getAttribute('data-hobby'); // Obținem numele hobby-ului
        // Facem o cerere pentru a încărca pozele asociate acestui hobby
        fetch(get_images.php?hobby=${hobby})
            .then(response => response.json())
            .then(images => {
                hobbyImages = images; // Stocăm imaginile într-un array
                currentImageIndex = 0; // Resetăm indexul la prima poză
                hobbyPopup.style.display = 'flex'; // Afișăm pop-up-ul
                hobbyPopupImage.src = hobbyImages[currentImageIndex]; // Setăm prima imagine
            });
    });
});

// Când se dă click pe butonul de închidere a pop-up-ului
closeHobbyBtn.addEventListener('click', function() {
    hobbyPopup.style.display = 'none'; // Ascundem pop-up-ul
});

// Când se dă click pe butonul "Next" pentru a trece la următoarea poză
nextBtn.addEventListener('click', function() {

    if (currentImageIndex < hobbyImages.length - 1) 
        currentImageIndex++;
        hobbyPopupImage.src = hobbyImages[currentImageIndex]; // Schimbăm poza
    );

// Când se dă click pe butonul "Previous" pentru a merge la poza anterioară
prevBtn.addEventListener('click', function() 
    if (currentImageIndex > 0) 
        currentImageIndex–;
        hobbyPopupImage.src = hobbyImages[currentImageIndex]; // Schimbăm poza
    );

// Închidem pop-up-ul dacă se face click în afacerea acestuia
window.addEventListener('click', function(event) 
    if (event.target === hobbyPopup) 
        hobbyPopup.style.display = 'none'; // Ascundem pop-up-ul
    );


// ------------------- POP-UP pentru Certificates -------------------



// Obținem toate iconițele de telegramă (pentru secțiunea de Certificates)
const telegramIcons = document.querySelectorAll('.telegram-icon');
const imagePopup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('close-btn');

// Când se dă click pe iconița de telegramă
telegramIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-image');
        popupImage.src = imageSrc;  // Setăm sursa imaginii în pop-up
        imagePopup.style.display = 'flex';  // Afișăm pop-up-ul
    });
});

// Când se dă click pe butonul de închidere
closeBtn.addEventListener('click', function() {
    imagePopup.style.display = 'none';  // Ascundem pop-up-ul
});

// Închidem pop-up-ul dacă se face click în afacerea acestuia
window.addEventListener('click', function(event) {
    if (event.target === imagePopup) {
        imagePopup.style.display = 'none'; // Ascundem pop-up-ul
    }
});

