<<<<<<< HEAD
// ------------------- POP-UP pentru Hobbies -------------------

// Obținem toate iconițele de hobby
const hobbyItems = document.querySelectorAll('.hobby-item');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('popup-close');
const prevBtn = document.getElementById('prev-image');
const nextBtn = document.getElementById('next-image');

// Variabile pentru controlul imaginilor
let currentImageIndex = 0;
let images = [];

// Când se dă click pe iconițele de hobby
hobbyItems.forEach(icon => {
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




//-----------------------------------------------------------


=======
document.addEventListener('DOMContentLoaded', function () {
    // Sectiunea Hobbies
    const hobbyIcons = document.querySelectorAll('.hobby-icon'); // Iconițele asociate hobby-urilor
    const imagePopup = document.getElementById('image-popup'); // Pop-up-ul pentru imagini
    const popupContent = document.getElementById('popup-content'); // Conținutul pop-up-ului
    let images = []; // Array pentru imagini
    let currentIndex = 0; // Index-ul imaginii curente
    // Funcția pentru a închide pop-up-ul
    function closePopup() {
        imagePopup.style.display = 'none';
        popupContent.innerHTML = ''; // Resetăm conținutul
        images = []; // Resetăm array-ul cu imagini
        currentIndex = 0; // Resetăm indexul imaginii curente
    }

    // Eveniment de click pe iconițele hobby-urilor
    hobbyIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const hobby = this.getAttribute('data-hobby'); // Obținem hobby-ul selectat

            // Cerem imagini din folderul corespunzător hobby-ului
            fetch(`get_images.php?hobby=${hobby}`)
                .then(response => response.json())
                .then(imagePaths => {
                    images = imagePaths;
                    currentIndex = 0; // Setăm indexul imaginii curente la 0
                    showImage(); // Afișăm prima imagine
                    imagePopup.style.display = 'flex'; // Afișăm pop-up-ul
                })
                .catch(error => console.error('Eroare la încărcarea imaginilor:', error));
        });
    });

    // Funcția pentru a arăta imaginea curentă
    function showImage() {
        const image = images[currentIndex]; // Obținem imaginea curentă
        const imageElement = document.createElement('img');
            imageElement.src = images/{image};
            imageElement.alt = 'Hobby Image';
            imageElement.style.maxWidth = '100%';
            imageElement.style.maxHeight = '80vh';
            imageElement.style.transition = 'transform 0.25s ease';

        // Setăm conținutul pop-up-ului
            popupContent.innerHTML = `
                <span id="close-btn" class="close-btn">&times;</span>
                <div id="zoom-controls">
                    <button id="zoom-in">Zoom In</button>
                    <button id="zoom-out">Zoom Out</button>
                </div>
                <div id="image-container">
                    imageElement.outerHTML
                </div>
            `;

        // Controlează zoom-ul
        let scale = 1;
        const zoomInButton = document.getElementById('zoom-in');
        const zoomOutButton = document.getElementById('zoom-out');
        const imageContainer = document.getElementById('image-container');

        zoomInButton.addEventListener('click', function () {
        scale *= 1.2; // Mărim escala
        imageContainer.style.transform = `scale(scale)`; // Folosim template literal pentru a aplica transformarea
        });

        zoomOutButton.addEventListener('click', function () {
        scale /= 1.2; // Micșorăm scala
        imageContainer.style.transform = `scale({scale})`; // Folosim template literal pentru a aplica transformarea
        });



        // Butonul de închidere al pop-up-ului
        document.getElementById('close-btn').addEventListener('click', closePopup);

        // Săgețile pentru navigare între imagini
        const prevButton = document.createElement('button');
        prevButton.innerHTML = 'Prev';
        prevButton.id = 'prev-btn';
        const nextButton = document.createElement('button');
        nextButton.innerHTML = 'Next';
        nextButton.id = 'next-btn';

        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex === images.length - 1 ? 'none' : 'block';

        prevButton.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                showImage();
            }
        });

        nextButton.addEventListener('click', function () {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                showImage();
            }
        });

        popupContent.appendChild(prevButton);
        popupContent.appendChild(nextButton);
    }

    // Sectiunea Certificates
    const telegramIcons = document.querySelectorAll('.telegram-icon'); // Iconițele telegram
    const certificatePopup = document.getElementById('certificate-popup'); // Pop-up-ul pentru certificare
    const certificateContent = document.getElementById('certificate-content'); // Conținutul pop-up-ului pentru certificare

    // Eveniment de click pe iconițele Telegram
    telegramIcons.forEach(icon => 
        icon.addEventListener('click', function () {
            const imageSrc = this.getAttribute('data-image'); // Obținem sursa imaginii

            // Creăm un pop-up pentru imagine
            const imageElement = document.createElement('img');
            imageElement.src = imageSrc;
            imageElement.alt = 'Certificate Image';
            imageElement.style.maxWidth = '100';
            imageElement.style.maxHeight = '80vh';
            imageElement.style.transition = 'transform 0.25s ease';

            certificateContent.innerHTML = `
                <span id="close-cert-btn" class="close-btn">   times;</span>
                <div id="zoom-controls">
                    <button id="zoom-in-cert">Zoom In</button>
                    <button id="zoom-out-cert">Zoom Out</button>
                </div>
                <div id="certificate-container">{imageElement.outerHTML}
                </div>
            `;
            certificatePopup.style.display = 'flex'; // Afișăm pop-up-ul de certificare

            // Controlează zoom-ul
            let scale = 1;
            const zoomInButtonCert = document.getElementById('zoom-in-cert');
            const zoomOutButtonCert = document.getElementById('zoom-out-cert');
            const certificateContainer = document.getElementById('certificate-container');

            zoomInButtonCert.addEventListener('click', function () {
                scale *= 1.2;
                certificateContainer.style.transform = scale(scale);
            });

            zoomOutButtonCert.addEventListener('click', function () {
                scale /= 1.2;
                certificateContainer.style.transform = scale({scale});
            });

            // Butonul de închidere al pop-up-ului pentru certificare
            document.getElementById('close-cert-btn').addEventListener('click', function () {
                certificatePopup.style.display = 'none';
                certificateContent.innerHTML = ''; // Resetăm conținutul
            });
        }));
});
>>>>>>> 3531cbb23ac10d52ee8d39b45e9bcbb3ad19d69c
