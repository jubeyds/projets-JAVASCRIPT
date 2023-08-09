// Sélectionner toutes les régions
const regions = document.querySelectorAll('.region');

// Parcourir toutes les régions et ajouter les écouteurs d'événements
regions.forEach(region => {
    // Ajouter l'écouteur d'événement pour le survol de la région
    region.addEventListener('mouseover', () => {
        region.style.fill = '#ff0000'; // Changer la couleur au survol
    });

    // Ajouter l'écouteur d'événement pour la sortie de survol de la région
    region.addEventListener('mouseout', () => {
        region.style.fill = '#ccc'; // Revenir à la couleur par défaut
    });

    // Ajouter l'écouteur d'événement pour le clic sur la région
    region.addEventListener('click', () => {
        // Afficher les informations de la région
        showRegionInfo(region.dataset.regionName, region.dataset.population, region.dataset.superficie, region.dataset.latitude, region.dataset.longitude, region.dataset.departements);
    });
});



fetch('./regions.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      // Afficher les informations de la région
      showRegionInfo(data[0].region, data[0].population, data[0].superficie, data[0].latitude, data[0].longitude, data[0].departements);

    })






// Fonction pour afficher les informations de la région
function showRegionInfo(regionName, population, superficie, latitude, longitude, departements) {
    // Sélectionner l'élément d'informations de la région
    const regionInfo = document.getElementById('region-info');

    // Remplir les informations de la région
    regionInfo.innerHTML = `
        <h2>${regionName}</h2>
        <p>Population : ${population}</p>
        <p>Superficie : ${superficie}</p>
        <p>Latitude : ${latitude}</p>
        <p>Longitude : ${longitude}</p>
        <h3>Départements :</h3>
        <ul id="departements">${departements}</ul>
    `;

    // Afficher les informations de la région
    regionInfo.style.display = 'block';
}


