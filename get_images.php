<?php
// Funcție pentru a obține pozele dintr-un folder specificat
function get_images_from_folder(folder_path) {
    images = [];

    // Deschidem folderul și obținem lista fișierelorfiles = scandir(folder_path);

    // Parcurgem fișierele
    foreach (files as file) 
        // Verificăm dacă fișierul este o imagine (extensii de imagini comune)
        if (in_array(pathinfo(file, PATHINFO_EXTENSION), ['jpg', 'jpeg', 'png', 'gif'])) {
            images[] =file;
        }
    }

    return images;


// Verificăm hobby-ul trimis în cerere (via GET)
if (isset(_GET['hobby'])) {
    hobby =_GET['hobby'];

    // Asociem hobby-urile cu folderele corespunzătoare
    $folders = [
        'Photography' => 'images/Photography', // folderul pentru "Photography"
        'Hiking' => 'images/Hiking',           // folderul pentru "Hiking"
        'Cooking' => 'images/Cooking'          // folderul pentru "Cooking"
    ];

    // Dacă hobby-ul există în array, obținem pozele din folderul corespunzător
    if (isset(folders[hobby]))folder_path = folders[hobby];
        images = get_images_from_folder(folder_path);
        echo json_encode(images);  // Returnăm pozele ca JSON
     else 
        echo json_encode([]);  // Dacă nu există hobby-ul, returnăm un array gol
     else 
    echo json_encode([]);  // Dacă nu există hobby în cerere, returnăm un array gol

?>
