let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');
let btn7 = document.querySelector('#btn7');
let btn8 = document.querySelector('#btn8');
let btn9 = document.querySelector('#btn9');
let btn10 = document.querySelector('#btn10');
let btn11 = document.querySelector('#btn11');
let btn12 = document.querySelector('#btn12');
let btn13 = document.querySelector('#btn13');
let btn14 = document.querySelector('#btn14');
let btn15 = document.querySelector('#btn15');
let btn16 = document.querySelector('#btn16');
let btn17 = document.querySelector('#btn17');
let btn18 = document.querySelector('#btn18');
let btn19 = document.querySelector('#btn19');
let btn20 = document.querySelector('#btn20');

btn1.addEventListener('click', () => {
    img.src = "assets/castleInTheSky.jpg";
})

btn2.addEventListener('click', () => {
    img.src = "assets/graveOfTheFireflies.jpg";
})

btn3.addEventListener('click', () => {
    img.src = "assets/myNeighborTotoro.jpg";
})

btn4.addEventListener('click', () => {
    img.src = "assets/kikisDeliveryService.jpg";
})

btn5.addEventListener('click', () => {
    img.src = "assets/onlyYesterday.jpg";
})

btn6.addEventListener('click', () => {
    img.src = "assets/porcoRosso.jpg";
})

btn7.addEventListener('click', () => {
    img.src = "assets/pomPoko.jpg";
})

btn8.addEventListener('click', () => {
    img.src = "assets/whisperOfTheHeart.jpg";
})

btn9.addEventListener('click', () => {
    img.src = "assets/princessMononoke.jpg";
})

btn10.addEventListener('click', () => {
    img.src = "assets/myNeighborsTheYamadas.jpg";
})

btn11.addEventListener('click', () => {
    img.src = "assets/spiritedAway.jpg";
})

btn12.addEventListener('click', () => {
    img.src = "assets/theCatReturns.jpg";
})

btn13.addEventListener('click', () => {
    img.src = "assets/howlsMovingCastle.jpg";
})

btn14.addEventListener('click', () => {
    img.src = "assets/talesFromEarthsea.jpg";
})

btn15.addEventListener('click', () => {
    img.src = "assets/ponyo.jpg";
})

btn16.addEventListener('click', () => {
    img.src = "assets/SecretWorldOfArrietty.jpg";
})

btn17.addEventListener('click', () => {
    img.src = "assets/fromUpOnPoppyHill.jpg";
})

btn18.addEventListener('click', () => {
    img.src = "assets/theWindRises.jpg";
})

btn19.addEventListener('click', () => {
    img.src = "assets/theTaleOfPrincessKaguya.jpg";
})

btn20.addEventListener('click', () => {
    img.src = "assets/whenMarnieWasThere.jpg";
})

const movieList = document.querySelector('ul');

fetch('https://ghibliapi.herokuapp.com/films')
.then(response => response.json()) 
.then(json => displayMovies(json))

function displayMovies(json) {
    console.log('Results:', json);
    let movies = json.forEach(r => {
        let movie = document.createElement('ul');
        let movieTitle = document.createElement('li');
        let movieYear = document.createElement('ul');
        let movieDescription = document.createElement('ul')

        movieTitle.innerText = r.title;
        movieYear.innerText = r.release_date;
        movieDescription.innerText = r.description;

        movieList.appendChild(movie);
        movie.appendChild(movieTitle);
        movie.appendChild(movieYear);
        movie.appendChild(movieDescription)
    })
}