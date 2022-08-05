// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]
const slideElements = []

console.log(slides[0].url)

// Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice che trovate allegato,
// Bisogna generare il murkup delle slide ciclando l’array di oggetti che trovare nel file js.
// Il murkup da generare invece lo potrete trovare nel file html.
// A parte la generezione del murkup, il resto della logica è la stessa del vecchio esercizio,

// RECUPERO LO SLIDESWRAPPERELEMENT
const slidesWrapperEl = document.querySelector('.slides-wrapper')
// const slide = document.querySelector('.slide')
let currentIndex = 0
// LO SVUOTO
slidesWrapperEl.innerHTML = ""
for (i = 0; i < slides.length; i++){

	const src = slides[i].url;
	// CREO L' LI
	const li = document.createElement('li')
	// AGGIUNGO LA CLASSE SLIDE ALL' LI
	li.classList = 'slide'
	// IMMAGINE DI PARTENZA
	if (i === currentIndex) {
		li.classList.add('active')
	}

	// CREO IMG
	const img = document.createElement ('img')
	// ASSEGNO ALLA PROPRIETà SRC DI IMG IL VALORE SRC DELL'ARRAY
	img.src = src
	// INSERISCO IMG DENTRO LI 
	li.append(img)
	// AGGIUNGO LI ALLO SLIDESWRAPPER
	slidesWrapperEl.append(li)
	// CREO IL DIV, AGGIUNGO CLASSE E LO APPENDO ALL' LI
	const div = document.createElement('div')
	div.classlist = 'slide__content'
	li.append(div)
	// AGGIUNGO H3 E P DENTRO IL DIV
	div.innerHTML += `
	<h3 class="slide__title">${slides[i].title} </h3>
	<p class="slide__description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem suscipit aspernatur dicta laudantium delectus inventore itaque tempora quo earum, facilis nam, officia necessitatibus esse voluptates harum. Repudiandae nesciunt quod sunt!</p>
	`;
	// PUSHO GLI LI CREATI NELL'ARRAY DA ME CREATO
	slideElements.push(li)
}
console.log(slideElements)


// // PESCO LA FRECCIA AVANTI DALL'HTML
const nextElement = document.querySelector('.arrow-next');
// AGGIUNGO L'EVENT LISTENER
nextElement.addEventListener('click', function () {
	clearInterval(autoslide)
    // TOLGO CLASSE ACTIVE DALLA SLIDE ATTIVA
    slideElements[currentIndex].classList.remove('active');

    // AGGIUNGO LA CLASSE ACTIVE ALLA SLIDE SEGUENTE
    // BONUS 1 LOOP
    if (currentIndex === slideElements.length - 1) {
        currentIndex = 0;
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    } else {
		currentIndex++
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    }
})

// PESCO LA FRECCIA INDIETRO DALL'HTML
const prevArrowElement = document.querySelector('.arrow-prev')
// AGGIUNGO L'EVENT LISTENER
prevArrowElement.addEventListener('click', function () {
	clearInterval(autoslide)
// 	// TOLGO CLASSE ACTIVE DALLA SLIDE ATTIVA
	slideElements[currentIndex].classList.remove('active');
	// LOOP
	if (currentIndex === 0) {
        currentIndex = slideElements.length - 1;
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    } else {
		currentIndex--
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    }
})

let autoslide = setInterval(autoNext, 3000);

// ###### FUNZIONE AUTOSLIDER
function autoNext() {
	slideElements[currentIndex].classList.remove('active');
	if (currentIndex === slideElements.length - 1) {
        currentIndex = 0;
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    } else {
		currentIndex++
		let slideAttiva = slideElements[currentIndex];
        slideAttiva.classList.add('active');
    }

}