let billetter = [];

function kjopBillett() {
    const valgtFilm = document.getElementById('movieSelect').value;
    const antall = document.getElementById('quantity').value;
    const fornavn = document.getElementById('firstName').value;
    const etternavn = document.getElementById('lastName').value;
    const telefonNr = document.getElementById('phoneNumber').value;
    const epost = document.getElementById('email').value;

    document.getElementById('movieSelectError').textContent = '';
    document.getElementById('quantityError').textContent = '';
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('phoneNumberError').textContent = '';
    document.getElementById('emailError').textContent = '';

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

    if (telefonNr.trim() === '') {
        document.getElementById('phoneNumberError').textContent = 'Du må oppgi telefonnummer.';
        isValid = false;
    }

    if (epost.trim() === '') {
        document.getElementById('emailError').textContent = 'Du må oppgi e-postadresse.';
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    const billett = {
        film: valgtFilm,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonNr: telefonNr,
        epost: epost
    };

    billetter.push(billett);
    visBilletter();

    document.getElementById('quantity').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('email').value = '';
}

function slettAlleBilletter() {
    billetter = [];
    visBilletter();
}
function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';

    billetter.forEach(billett => {
        const li = document.createElement('li');
        li.textContent = `Film: ${billett.film}, Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.telefonNr}, Epost: ${billett.epost}`;
        billettListe.appendChild(li);
    });
}