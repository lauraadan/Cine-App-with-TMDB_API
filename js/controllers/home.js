import { getNowPlayingMovies, getPopularMovies } from "../api.js"
import { printMovieCard } from "../movieCard.js";


const printPopularMovies = async ()=>{
    const response = await getPopularMovies();
    const populars = response.results.splice(0, 12);
    let html = '';
    populars.map(movie => {
        html += printMovieCard(movie.id, movie.poster_path, movie.title);
    })
    document.querySelector('#populars .columns').innerHTML = html;
}

const printNowPlatingMovies = async ()=>{
    const response = await getNowPlayingMovies();
    const nowPlaying = response.results.splice(0, 12);
    let html = '';
    nowPlaying.map(movie => {
        html += printMovieCard(movie.id, movie.poster_path, movie.title);
    })
    document.querySelector('#nowPlaying .columns').innerHTML = html;
}

export const loadHome = async () => {
    printPopularMovies()
    printNowPlatingMovies()
}