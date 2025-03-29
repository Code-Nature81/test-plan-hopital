// script.js

// Fonction pour obtenir la position de l'utilisateur
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("La géolocalisation n'est pas supportée par votre navigateur.");
    }
}

// Fonction pour afficher la position de l'utilisateur sur le plan
function showPosition(position) {
    // Définir les bornes géographiques du plan de l'hôpital
    let longitude_min = 1.460026;   // Longitude minimale (exemple)
    let longitude_max = 1.460089;   // Longitude maximale (exemple)
    let latitude_min = 43.627886;   // Latitude minimale (exemple)
    let latitude_max = 43.627878;   // Latitude maximale (exemple)

    // Coordonnées GPS de l'utilisateur
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;

    // Calcul des pourcentages pour la longitude et la latitude
    let longitude_percentage = (longitude - longitude_min) / (longitude_max - longitude_min) * 100;
    let latitude_percentage = (latitude_max - latitude) / (latitude_max - latitude_min) * 100;

    // Récupérer l'élément du marqueur de l'utilisateur
    let userLocation = document.getElementById("user-location");

    // Appliquer les pourcentages calculés pour positionner le marqueur
    userLocation.style.left = longitude_percentage + "%";  // Position horizontale
    userLocation.style.top = latitude_percentage + "%";    // Position verticale
    userLocation.style.display = "block";  // Afficher le marqueur
}

// Fonction pour gérer les erreurs de géolocalisation
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Vous devez autoriser la localisation pour utiliser cette fonctionnalité.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("La localisation est indisponible.");
            break;
        case error.TIMEOUT:
            alert("La demande de localisation a expiré.");
            break;
        default:
            alert("Une erreur inconnue est survenue.");
    }
}
