// Opdracht 3.4: Email Validatie
console.log('🚀 Opdracht 3.4: Email Validatie');

function valideerEmail(email) {
    // Trim en lowercase maken
    const schoonEmail = email.trim().toLowerCase();
    
    // Check @ aanwezig
    if (!schoonEmail.includes('@')) return false;
    
    // Check geen spaties
    if (schoonEmail.includes(' ')) return false;
    
    // Check geldig einde (.com, .nl, .org)
    const geldigeEindes = ['.com', '.nl', '.org'];
    return geldigeEindes.some(einde => schoonEmail.endsWith(einde));
}

// Test de functie
const testEmails = ['jan@test.com', 'marie@voorbeeld.nl', 'fout@test.be', 'fout email@test.com'];
testEmails.forEach(email => {
    console.log(`${email}: ${valideerEmail(email)}`);
});
