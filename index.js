// const movieList = document.querySelector('ul');

// fetch('https://ghibliapi.herokuapp.com/films')
// .then(response => response.json()) 
// .then(json => displayMovies(json))

// function displayMovies(json) {
//     console.log('Results:', json);
//     let movies = json.forEach(r => {
//         let movie = document.createElement('li');
//         movie.innerHTML = r.title;
//         movieList.appendChild(movie);
//     })
// }

//     let movies = json.forEach(r => {
//         let movie = document.createElement('tr');
//         let movieTitle = document.createElement('td');
//         let movieYear = document.createElement('td');

//         movieTitle.innerText = r.title;
//         movieYear.innerText = r.release_date;

//         movieList.appendChild(movie);
//         movie.appendChild(movieTitle);
//         movie.appendChild(movieYear);
//     })
// }

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
