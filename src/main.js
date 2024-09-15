import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formNew = document.querySelector(".formImg");
const photoList = document.querySelector(".list-img");
const fetchBtn = document.querySelector(".buttonSearch");
const inputSearch = document.getElementById("search-img");
import { renderUsers } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

formNew.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const query = inputSearch.value.trim();
    if (query !== "") { 
        fetchPhotos(query)
            .then((photos) => renderUsers(photos, photoList)) // Pass photoList here
            .catch((error) => console.log(error));
    } else {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!', 
            position: 'topRight'
        });
    }
});