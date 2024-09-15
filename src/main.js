import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formNew = document.querySelector(".formImg");
const photoList = document.querySelector(".list-img");
const loading = document.querySelector(".loader");

const inputSearch = document.getElementById("search-img");
import { renderUsers } from './js/render-functions.js';
import { fetchPhotos } from './js/pixabay-api.js';

formNew.addEventListener("submit", (event) => {
    event.preventDefault(); 
    loading.classList.remove("visually-hidden");
    const query = inputSearch.value.trim();
    if (query !== "") { 
        
        fetchPhotos(query)
            .then((photos) => {
                loading.classList.add("visually-hidden");
                renderUsers(photos, photoList)
            }) 
            .catch((error) => console.log(error));
    } else {
         loading.classList.add("visually-hidden");
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!', 
            position: 'topRight'
        });
    }
});