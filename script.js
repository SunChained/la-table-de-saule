const zoneAnnee = document.querySelector(".annee");
zoneAnnee.textContent = new Date().getFullYear();

const jour = new Date().getDay();
const heure = new Date().getHours();
const zoneStatut = document.querySelector(".hero-statut");

if (jour === 1) {
  zoneStatut.textContent = "Fermé aujourd'hui";
} else if (jour === 0 && heure >= 15) {
  zoneStatut.textContent = "Fermé pour ce soir";
} else if (jour === 0) {
  zoneStatut.textContent = "Ouvert ce midi jusqu'à 14h30";
} else if (heure >= 22) {
  zoneStatut.textContent = "Fermé pour ce soir";
} else {
  zoneStatut.textContent = "Ouvert ce soir jusqu'à 22h";
}
