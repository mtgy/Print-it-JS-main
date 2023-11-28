const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/// etape 2

// la fleche Gauche
let flecheGaughe = document.querySelector(".arrow_left");
console.log(flecheGaughe);

flecheGaughe.addEventListener("click", () => {
console.log("Vous avez cliqué sur la fleche Gauche")
});

// la fleche droite
let flecheDroite = document.querySelector(".arrow_right");
console.log(flecheDroite);

flecheDroite.addEventListener("click", () => {
console.log("Vous avez cliqué sur la fleche Droite")
});