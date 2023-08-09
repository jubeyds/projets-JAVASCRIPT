const cleAPI = '0a07e851-d7b4-4cf9-9935-b8d9cd5564db'; 
const urlAPI = `http://api.airvisual.com/v2/nearest_city?key=${cleAPI}`;

async function recupererDonnees() {
  try {
    const reponse = await fetch(urlAPI);
    const donnees = await reponse.json();

    const ville = donnees.data.city;
    const pays = donnees.data.country;
    const temperature = donnees.data.current.weather.tp;
    const codeIconeMeteo = donnees.data.current.weather.ic;

    const carteMeteo = document.getElementById('carteMeteo');
    carteMeteo.innerHTML = `
      <div class="localisation">${ville}, ${pays}</div>
      <div class="icone-meteo">
        <i class="fas ${obtenirClasseIconeMeteo(codeIconeMeteo)}"></i>
      </div>
      <div class="temperature">${temperature}°C</div>
    `;
  } catch (erreur) {
    console.error('Erreur lors de la récupération des données :', erreur);
  }
}

function obtenirClasseIconeMeteo(codeIconeMeteo) {
  switch (codeIconeMeteo) {
    case '01d': return 'fa-sun';
    case '01n': return 'fa-moon';
    case '02d': return 'fa-cloud-sun';
    case '02n': return 'fa-cloud-moon';
    case '03d': return 'fa-cloud';
    case '04d': return 'fa-cloud';
    case '09d': return 'fa-cloud-showers-heavy';
    case '10d': return 'fa-cloud-rain';
    case '10n': return 'fa-cloud-moon-rain';
    case '11d': return 'fa-bolt';
    case '13d': return 'fa-snowflake';
    case '50d': return 'fa-smog';
    default: return 'fa-question-circle';
  }
}

recupererDonnees();
