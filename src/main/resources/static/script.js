//Her er det første jeg gjør å definerer et tomt array for å lagre kinobillettobjekter
let billetter = [];

//Funksjon for å kjøpe kinobillettene
function kjopBillett() {
    const valgtFilm = document.getElementById('movieSelect').value;
    const antall = document.getElementById('quantity').value;
    const fornavn = document.getElementById('firstName').value;
    const etternavn = document.getElementById('lastName').value;
    const telefonNr = document.getElementById('phoneNumber').value;
    const epost = document.getElementById('email').value;

// Her nullstilles det feilmeldinger før validering
    document.getElementById('movieSelectError').textContent = '';
    document.getElementById('quantityError').textContent = '';
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('phoneNumberError').textContent = '';
    document.getElementById('emailError').textContent = '';

//Validerer inndataen
    let isValid = true;

    if (valgtFilm === 'Velg film her') {
        document.getElementById('movieSelectError').textContent = 'Du må velge en film.';
        isValid = false;
    }

    if (antall <= 0) {
        document.getElementById('quantityError').textContent = 'Du må oppgi et gyldig antall billetter.';
        isValid = false;
    }

    if (fornavn.trim() === '') {
        document.getElementById('firstNameError').textContent = 'Du må oppgi fornavn.';
        isValid = false;
    }

    if (etternavn.trim() === '') {
        document.getElementById('lastNameError').textContent = 'Du må oppgi etternavn.';
        isValid = false;
    }

    const telefonRegex = /^[0-9]{8}$/;
    if (!telefonRegex.test(telefonNr)) {
        document.getElementById('phoneNumberError').textContent = 'Du må oppgi telefonnummer.';
        isValid = false;
    }

    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epostRegex.test(epost)) {
        document.getElementById('emailError').textContent = 'Du må oppgi e-postadresse.';
        isValid = false;
    }
 //Her er en if-setning som avbryter funksjonen hvis inndata ikke er gyldig
    if (!isValid) {
        return;
    }
//Oppretter et billettobjekt
    const billett = {
        film: valgtFilm,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonNr: telefonNr,
        epost: epost
    };
//Legger til billettobjektet i listen over billetter.
    billetter.push(billett);
//Oppdaterer visningen av billetter
    visBilletter();
    
//Her blir inndatafeltene nullstilt for neste bestilling
    document.getElementById('quantity').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('email').value = '';
}
 //En funksjon for å slette alle billettene
function slettAlleBilletter() {
//Tømmer listen over billetter
    billetter = [];
    visBilletter();
}
//Funksjon for å vise billettene
function visBilletter() {
    //Finner ul-elementet hvor billettene skal vises
    const billettListe = document.getElementById('billettListe');
    //Tømmer innholdet først
    billettListe.innerHTML = '';

    //Her går koden igjennom hver billett i listen
    billetter.forEach(billett => {
        //Oppretter et nytt li-element for hver billett
        const li = document.createElement('li');
        //Legger til tekst basert på billettobjektet
        li.textContent = `Film: ${billett.film}, Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.telefonNr}, Epost: ${billett.epost}`;
        //Legg til li-elementet i ul-elementet
        billettListe.appendChild(li);
    });
}