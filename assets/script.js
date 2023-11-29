const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


// Mettre un event listener sur chacune des flèches
//var flecheDroite
let flecheDroite = document.querySelector(".arrow_right");
//var flecheGauche
let flecheGauche = document.querySelector(".arrow_left");



//Ajouter les bullet points
// Récupération de la div dots qui contiendra tous les dots
let parentDot = document.querySelector(".dots");

// Boucle pour créer les dots
for (let i = 0; i < slides.length; i++) {
    let enfantDot = document.createElement("button");
    enfantDot.classList.add('dot');
    parentDot.appendChild(enfantDot);

    // pour mettre la Classe check en premier
    if (i === 0) { 
        console.log("C'est le premier dot");
        enfantDot.classList.add('dot_selected');
    } 

  
    //action sur les points.
   enfantDot.addEventListener('click', function () {
    changeSlide(i);
   });
}


let slideCourante = 0; // Démarre à la première diapositive

// Fonction pour changer de diapositive
function changeSlide(index) {

    slideCourante = index;

    // Affichage de la slide correspondante
    let contenuSlide = slides[slideCourante];
    console.log("contenue du slide ", contenuSlide);

    // on charge l'image 
    let imageSlide = document.querySelector(".banner-img");
    imageSlide.src = "./assets/images/slideshow/" + contenuSlide.image;
    //on charge le alt
    imageSlide.setAttribute("alt", contenuSlide.tagLine);

    //on charge le texte
    let txtSlide = document.querySelector("#banner p");
    txtSlide.innerHTML = contenuSlide.tagLine;

     //on supprime la classe dot_selected de tous les dots
     let allDots = document.querySelectorAll('.dot');
     allDots.forEach(dot => dot.classList.remove('dot_selected'));

    //on ajoute de la classe dot_selected
    let selectedDot = document.querySelectorAll('.dot')[slideCourante];
    selectedDot.classList.add('dot_selected');
}



// Mettre un event listener flecheDroite
flecheDroite.addEventListener("click", function () {
    //console.log de la fleche droite
   console.log('ici c est le click de la flèche droite');

   //on fait tourner le carroussel en avant
   if (slideCourante < slides.length - 1) {
        changeSlide(slideCourante + 1);
    } else {
        changeSlide(0);
    }
 });
// Mettre un event listener flecheGauche
flecheGauche.addEventListener("click", function () {
       //console.log de la fleche gauche
    console.log('ici c\'est le click de la flèche Gauche');

  //on fait tourner le carroussel en arriere
    if (slideCourante > 0) {
        changeSlide(slideCourante - 1);
        } else {
        changeSlide(slides.length - 1); // Changer à la dernière diapositive si nous sommes sur la première
    }

 });