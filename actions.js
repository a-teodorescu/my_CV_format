javascript
// Obținem toate iconițele de telegramă
const telegramIcons = document.querySelectorAll('.telegram-icon');
const imagePopup = document.getElementById('image-popup');
const closeBtn = document.getElementById('close-btn');

// Când se dă click pe iconița de telegramă
telegramIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-image');
        // Verificăm tipul fișierului (PDF sau imagine)
        const fileExtension = imageSrc.split('.').pop().toLowerCase();

        // Resetăm conținutul pop-up-ului
        imagePopup.innerHTML = <span id="close-btn" class="close-btn">&times;</span>;

        if (fileExtension === 'pdf') {
            // Dacă fișierul este un PDF, îl încărcăm într-un tag <embed>
            imagePopup.innerHTML += `<embed src="imageSrc" type="application/pdf" width="100
         else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) 
            // Dacă fișierul este o imagine, îl încărcăm într-un tag <img>
            imagePopup.innerHTML += <img src="{imageSrc}" alt="Certificate Image" />;
        }

        imagePopup.style.display = 'flex';  // Afișăm pop-up-ul
    });
});

// Când se dă click pe butonul de închidere
closeBtn.addEventListener('click', function() {
    imagePopup.style.display = 'none';  // Ascundem pop-up-ul
});
