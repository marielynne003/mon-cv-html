function showForm() {
    let form = document.getElementById("form-section");

    form.classList.remove("hidden");
    form.style.animation = "fadeIn 1s forwards";
}

function generateCV() {

    let template = document.getElementById("template").value;

    // 🔒 Bloquer premium
    if(template !== "classic"){
        alert("Ce modèle est premium ⭐. Contactez-moi sur WhatsApp : +225XXXXXXXX");
        return;
    }

    // INFOS
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let job = document.getElementById("job").value;
    let phone = document.getElementById("phone").value;

    let description = document.getElementById("description").value;
    let skills = document.getElementById("skills").value;
    let languages = document.getElementById("languages").value;
    let experience = document.getElementById("experience").value;
    let education = document.getElementById("education").value;
    let hobbies = document.getElementById("hobbies").value;

    // Vérification
    if(nom === "" || prenom === "" || email === ""){
        alert("Remplis les informations importantes !");
        return;
    }

    // Injection données
    document.getElementById("cv-name").innerText = prenom + " " + nom;
    document.getElementById("cv-email").innerText = email;
    document.getElementById("cv-job").innerText = job;
    document.getElementById("cv-phone").innerText = phone;

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

    // Afficher CV
    document.getElementById("cv-result").classList.remove("hidden");

    // 🎨 Appliquer modèle
    let cv = document.querySelector(".cv");

    cv.classList.remove("modern", "dark", "creative");

    if(template === "modern"){
        cv.classList.add("modern");
    }

    if(template === "dark"){
        cv.classList.add("dark");
    }

    if(template === "creative"){
        cv.classList.add("creative");
    }
}

// 📄 PDF
function downloadPDF() {
    const element = document.querySelector(".cv");

    const opt = {
        margin: 0,
        filename: 'mon_cv.pdf',
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
}

// 💰 PREMIUM
function goPremium() {
    alert("Pour débloquer les modèles premium ⭐ contactez-moi sur WhatsApp : +225XXXXXXXX");
}

// 📄 WORD
function downloadWord() {
    let content = document.querySelector(".cv").innerText;

    let blob = new Blob([content], {
        type: "application/msword"
    });

    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "mon_cv.doc";
    link.click();
}

// 📄 LETTRE DE MOTIVATION
function generateLetter() {

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let job = document.getElementById("job").value;

    let text = `
Objet : Candidature au poste de ${job}

Madame, Monsieur,

Je me permets de vous adresser ma candidature pour le poste de ${job}.

Motivé, sérieux et passionné, je souhaite mettre mes compétences au service de votre entreprise.

Je serais honoré de pouvoir vous rencontrer lors d’un entretien.

Dans l’attente de votre réponse, veuillez agréer mes salutations distinguées.

${prenom} ${nom}
    `;

    document.getElementById("letter-content").innerText = text;
}
function payWave() {
    alert(
        "💰 Paiement Wave\n\n" +
        "Envoyez 1000 FCFA au numéro : +2250758810609\n\n" +
        "Puis envoyez la preuve sur WhatsApp pour recevoir votre CV premium."
    );
}

function payOM() {
    alert(
        "🟠 Paiement Orange Money\n\n" +
        "Envoyez 1000 FCFA au numéro : +2250758810609\n\n" +
        "Puis envoyez la preuve sur WhatsApp pour recevoir votre CV premium."
    );
}