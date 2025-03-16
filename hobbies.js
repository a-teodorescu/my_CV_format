// ------------------- POP-UP pentru Hobbies -------------------

document.addEventListener('DOMContentLoaded', function () {
    // Selectăm toate iconițele de cameră din lista Hobbies
    const cameraIcons = document.querySelectorAll('.hobby-icon');

    // Selectăm elementele pentru pop-up
    const imagePopup = document.getElementById('image-popup');
    const popupContent = document.getElementById('popup-content');
    const popupImage = document.getElementById('popup-image');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentImageIndex = 0;
    let imagesArray = [];

    // Când se dă click pe o iconiță de cameră
    cameraIcons.forEach((icon, index) => {
        icon.addEventListener('click', function () {
            const hobby = this.getAttribute('data-hobby');  // Hobby-ul asociat iconiței
            // Facem un request pentru a obține pozele din folderul asociat hobby-ului
            fetchImages(hobby);
        });
    });

    // Funcția care obține pozele pentru hobby-ul respectiv
    function fetchImages(hobby) {
        fetch(get_images.php?hobby=hobby)
            .then(response => response.json())
            .then(data => 
                if (data.error) 
                    alert(data.error);
                    return;
                
                // Resetăm indexul curent
                currentImageIndex = 0;
                imagesArray = data; // Salvează pozele într-un array

                // Afișăm prima poză
                showImage(currentImageIndex);
                // Afișăm pop-up-ul
                imagePopup.style.display = 'flex';
            )
            .catch(error => 
                console.error('Eroare la încărcarea imaginilor:', error);
            );
    

    // Funcția care afișează imaginea pe baza indexului
    function showImage(index) 
        if (imagesArray.length === 0) return;

        const imageSrc = images/{imagesArray[index]};
        popupImage.src = imageSrc;

        // Actualizăm butoanele pentru navigare
        prevBtn.style.display = index === 0 ? 'none' : 'block';
        nextBtn.style.display = index === imagesArray.length - 1 ? 'none' : 'block';
    }

    // Eveniment pentru butonul de închidere
    closeBtn.addEventListener('click', function () {
        imagePopup.style.display = 'none'; // Închidem pop-up-ul
    });

    // Eveniment pentru a închide pop-up-ul când se apasă în afara imaginii
    window.addEventListener('click', function (event) {
        if (event.target === imagePopup) {
            imagePopup.style.display = 'none'; // Închidem pop-up-ul
        }
    });

    // Eveniment pentru butonul anterior
    prevBtn.addEventListener('click', function () {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            showImage(currentImageIndex);
        }
    });

    // Eveniment pentru butonul următor
    nextBtn.addEventListener('click', function () {
        if (currentImageIndex < imagesArray.length - 1) {
            currentImageIndex++;
            showImage(currentImageIndex);
        }
    });
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
