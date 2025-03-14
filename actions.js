
// Obținem toate iconițele de telegramă
const telegramIcons = document.querySelectorAll('.telegram-icon');
const imagePopup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('close-btn');

// Variabilă pentru a verifica starea zoom-ului (dacă este zoomat sau nu)
let isZoomedIn = false;

// Când se dă click pe iconița de telegramă
telegramIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-image');  // Obținem sursa imaginii
        popupImage.src = imageSrc;  // Setăm sursa imaginii în pop-up
        imagePopup.style.display = 'flex';  // Afișăm pop-up-ul
        popupImage.style.transform = 'scale(1)';  // Resetăm transformarea (zoom out)
        isZoomedIn = false;  // Resetăm starea zoom-ului
    });
});

// Când se dă click pe butonul de închidere
closeBtn.addEventListener('click', function() {
    imagePopup.style.display = 'none';  // Ascundem pop-up-ul
});

// Închidem pop-up-ul dacă se face click în afacerea acestuia
window.addEventListener('click', function(event) {
    if (event.target === imagePopup) {
        imagePopup.style.display = 'none';  // Ascundem pop-up-ul
    }
});

// Funcționalitate pentru zoom-in și zoom-out pe imagine
popupImage.addEventListener('click', function() {
    if (isZoomedIn) {
        // Dacă imaginea este zoomată, revenim la dimensiunea normală
        popupImage.style.transform = 'scale(1)';
    } else {
        // Dacă imaginea nu este zoomată, facem zoom-in
        popupImage.style.transform = 'scale(2)'; // Poți ajusta scala (2) la o valoare mai mare pentru un zoom mai puternic
    }
    isZoomedIn = !isZoomedIn;  // Inversăm starea zoom-ului
});
                  
