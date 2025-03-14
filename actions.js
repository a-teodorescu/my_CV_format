javascript
// Obținem toate iconițele de telegramă
const telegramIcons = document.querySelectorAll('.telegram-icon');
const imagePopup = document.getElementById('image-popup');
const closeBtn = document.getElementById('close-btn');

// Când se dă click pe iconița de telegramă
telegramIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const fileSrc = this.getAttribute('data-image'); // Obținem calea fișierului
        const fileExtension = fileSrc.split('.').pop().toLowerCase(); // Obținem extensia fișierului

        // Resetăm conținutul pop-up-ului (pentru a evita acumularea de conținut vechi)
imagePopup.innerHTML = <span id="close-btn" class="close-btn">&times;</span>;

        // Verificăm tipul fișierului (PDF sau imagine)
        if (fileExtension === 'pdf') {
            // Dacă fișierul este un PDF, îl încărcăm într-un tag <embed>
            imagePopup.innerHTML += `<embed src="fileSrc" type="application/pdf" width="100
         else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) 
            // Dacă fișierul este o imagine, îl încărcăm într-un tag <img>
            imagePopup.innerHTML += <img src="{fileSrc}" alt="Certificate Image" />;
        }

        imagePopup.style.display = 'flex';  // Afișăm pop-up-ul
    });
});

// Când se dă click pe butonul de închidere
closeBtn.addEventListener('click', function() {
    imagePopup.style.display = 'none';  // Ascundem pop-up-ul
});

// Închidem pop-up-ul dacă se face click în afara acestuia
window.addEventListener('click', function(event) {
    if (event.target === imagePopup) {
        imagePopup.style.display = 'none';  // Ascundem pop-up-ul
    }
});
