function showForm(){
    document.getElementById("form-section").classList.remove("hidden");
}

function generateCV(){

    let template = document.getElementById("template").value;

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let job = document.getElementById("job").value;

    let description = document.getElementById("description").value;
    let skills = document.getElementById("skills").value;
    let languages = document.getElementById("languages").value;
    let experience = document.getElementById("experience").value;
    let education = document.getElementById("education").value;
    let hobbies = document.getElementById("hobbies").value;

    document.getElementById("cv-name").innerText = prenom + " " + nom;
    document.getElementById("cv-email").innerText = email;
    document.getElementById("cv-phone").innerText = phone;
    document.getElementById("cv-job").innerText = job;

    document.getElementById("cv-description").innerText = description;
    document.getElementById("cv-skills").innerText = skills;
    document.getElementById("cv-languages").innerText = languages;
    document.getElementById("cv-exp").innerText = experience;
    document.getElementById("cv-edu").innerText = education;
    document.getElementById("cv-hobbies").innerText = hobbies;

    // PHOTO
    let photo = document.getElementById("photo").files[0];
    if(photo){
        let reader = new FileReader();
        reader.onload = function(e){
            document.getElementById("cv-photo").src = e.target.result;
        }
        reader.readAsDataURL(photo);
    }

    document.getElementById("cv-result").classList.remove("hidden");

    let actions = document.getElementById("actions");

    // ======================
    // CLASSIQUE (GRATUIT)
    // ======================
    if(template === "classic"){

        document.querySelector(".cv").classList.remove("premium-style");

        actions.innerHTML = `
        <button onclick="downloadPDF()">📄 Télécharger PDF</button>
        <button onclick="downloadWord()">📝 Télécharger Word</button>
        `;
    }

    // ======================
    // PREMIUM
    // ======================
 // RESET
let cv = document.querySelector(".cv");
cv.classList.remove("classic-style","modern-style","dark-style");

// CLASSIQUE
if(template === "classic"){

    cv.classList.add("classic-style");

    actions.innerHTML = `
    <button onclick="downloadPDF()">📄 PDF</button>
    <button onclick="downloadWord()">📝 Word</button>
    `;
}

// MODERNE
else if(template === "modern"){

    cv.classList.add("modern-style");

    actions.innerHTML = `
    <div class="premium-box">
        <h3>✨ Modèle Moderne</h3>
        <p>Design style Canva, clair et professionnel</p>
        <button onclick="premiumDownload()">Télécharger</button>
    </div>
    `;
}

// DARK
else if(template === "dark"){

    cv.classList.add("dark-style");

    actions.innerHTML = `
    <div class="premium-box">
        <h3>🌑 Modèle Dark</h3>
        <p>Design sombre et élégant haut niveau</p>
        <button onclick="premiumDownload()">Télécharger</button>
    </div>
    `;
}
}

// ======================
// TELECHARGEMENT GRATUIT
// ======================
function downloadPDF(){
    html2pdf().from(document.querySelector(".cv")).save();
}

function downloadWord(){
    let content = document.querySelector(".cv").innerText;

    let blob = new Blob([content], {type:"application/msword"});
    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "cv.doc";
    link.click();
}

// ======================
// PREMIUM → PAIEMENT
// ======================
function premiumDownload(){

    let msg = "Bonjour, je veux payer le CV Premium (1000F) via Wave ou Orange Money";

    alert("Ce modèle est Premium.\nPaiement requis avant téléchargement.");

    window.open("https://wa.me/2250758810609?text=" + encodeURIComponent(msg));
}

// ======================
// LETTRE PRO
// ======================
function showLetter(){
    document.getElementById("letter-section").classList.remove("hidden");
}

function generateLetter(){

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let job = document.getElementById("job").value;

    let text = `
Objet : Candidature au poste de ${job}

Madame, Monsieur,

Titulaire d’une formation solide et animé par une forte motivation, je me permets de vous adresser ma candidature pour le poste de ${job}.

Au cours de mon parcours, j’ai acquis des compétences en organisation, rigueur et travail en équipe. Je suis une personne sérieuse, dynamique et capable de m’adapter rapidement aux exigences professionnelles.

Intégrer votre entreprise représente pour moi une réelle opportunité de mettre en pratique mes compétences et de contribuer à votre développement.

Je reste disponible pour un entretien afin de vous démontrer ma motivation.

Dans l’attente de votre retour, veuillez agréer, Madame, Monsieur, l’expression de mes salutations distinguées.

${prenom} ${nom}
    `;

    document.getElementById("letter-content").innerText = text;
    document.getElementById("letter-result").classList.remove("hidden");
}
// ======================
// TELECHARGEMENT LETTRE
// ======================
function downloadLetterPDF(){
    html2pdf().from(document.getElementById("letter-box")).save("lettre_motivation.pdf");
}

function downloadLetterWord(){
    let content = document.getElementById("letter-box").innerText;

    let blob = new Blob([content], {type:"application/msword"});
    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "lettre_motivation.doc";
    link.click();
}
