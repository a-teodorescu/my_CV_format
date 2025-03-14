// Obținem toate iconițele de telegramă
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