// ------------------- POP-UP pentru Hobbies -------------------


document.addEventListener('DOMContentLoaded', function() {
    // Selectăm toate iconițele de cameră din secțiunea "Hobbies"
    const cameraIcons = document.querySelectorAll('.hobby-icon');

    // Selectăm elementele pentru pop-up
    const imagePopup = document.getElementById('image-popup');
    const popupContent = document.getElementById('popup-content');
    const closeBtn = document.getElementById('close-btn');
    let currentImageIndex = 0;
    let images = [];

    // Când se apasă pe iconița de cameră
    cameraIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const hobby = this.getAttribute('data-hobby'); // Obținem hobby-ul asociat iconiței

            // Apelăm PHP pentru a obține pozele asociate hobby-ului
            fetch(get_images.php?hobby=${hobby}).then(response => response.json())
                .then(data => 
                    if (data.length > 0) 
                        images = data; // Salvăm pozele în array
                        currentImageIndex = 0; // Resetăm indexul la prima poză
                        showImage(currentImageIndex); // Arătăm prima poză
                        imagePopup.style.display = 'flex'; // Afișăm pop-up-ul
                    )
                .catch(error => 
                    console.error('Eroare la încărcarea imaginilor:', error);
                );
        );
    );

    // Închidem pop-up-ul când se apasă pe butonul de X
    closeBtn.addEventListener('click', function() 
        imagePopup.style.display = 'none';
    );

    // Funcție pentru a arăta imaginea curentă
    function showImage(index) 
        if (index >= 0        index < images.length) 
            popupContent.innerHTML = <img src="images/{images[index]}" alt="Image" style="max-width: 100%; max-height: 80vh;" />;
        }
    }

    // Navigare între imagini
    document.getElementById('next-btn').addEventListener('click', function() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            showImage(currentImageIndex);
        }
    });
    document.getElementById('prev-btn').addEventListener('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            showImage(currentImageIndex);
        }
    });
});





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

