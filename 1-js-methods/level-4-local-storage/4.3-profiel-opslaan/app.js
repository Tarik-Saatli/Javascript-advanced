// Opdracht 4.3: Profiel Opslaan
console.log('🚀 Opdracht 4.3: Profiel Opslaan');

function slaProfielOp() {
    // Haal alle waarden uit formulier
    const naam = document.getElementById('naam').value.trim();
    const email = document.getElementById('email').value.trim();
    const leeftijd = document.getElementById('leeftijd').value.trim();
    const kleur = document.getElementById('kleur').value.trim();
    
    // Valideer verplichte velden
    if (naam === '' || email === '') {
        alert('Naam en email zijn verplicht!');
        return;
    }
    
    // Sla elk veld apart op in localStorage
    localStorage.setItem('profiel-naam', naam);
    localStorage.setItem('profiel-email', email);
    localStorage.setItem('profiel-leeftijd', leeftijd);
    localStorage.setItem('profiel-kleur', kleur);
    
    // Sla ook opslag datum op
    localStorage.setItem('profiel-opgeslagen', new Date().toLocaleString());
    
    alert('Profiel opgeslagen!');
    toonProfiel();
}

function laadProfiel() {
    // Haal alle waarden op uit localStorage
    const naam = localStorage.getItem('profiel-naam');
    const email = localStorage.getItem('profiel-email');
    const leeftijd = localStorage.getItem('profiel-leeftijd');
    const kleur = localStorage.getItem('profiel-kleur');
    
    // Vul formulier als data bestaat
    if (naam) {
        document.getElementById('naam').value = naam;
    }
    
    if (email) {
        document.getElementById('email').value = email;
    }
    
    if (leeftijd) {
        document.getElementById('leeftijd').value = leeftijd;
    }
    
    if (kleur) {
        document.getElementById('kleur').value = kleur;
    }
}

function toonProfiel() {
    const container = document.getElementById('profiel-weergave');
    
    // Haal alle opgeslagen waarden op
    const naam = localStorage.getItem('profiel-naam');
    const email = localStorage.getItem('profiel-email');
    const leeftijd = localStorage.getItem('profiel-leeftijd');
    const kleur = localStorage.getItem('profiel-kleur');
    const opgeslagenOp = localStorage.getItem('profiel-opgeslagen');
    
    // Check of er profiel data is
    if (naam) {
        // Toon p
