import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
  const lightbox = new SimpleLightbox('.list-img a');
export function renderUsers(photos, photoList) {
   

    const markup = photos
        .map((photo) => {
            return `<li class="imgAdded">
                <a href="${photo.largeImageURL}"> 
                    <img src="${photo.webformatURL}" alt="${photo.tags}" width="360" height="152">
                </a>
                <div class="descr">
                    <p><b>Likes</b> ${photo.likes}</p>
                    <p><b>Views</b> ${photo.views}</p>
                    <p><b>Comments</b> ${photo.comments}</p>
                    <p><b>Downloads</b> ${photo.downloads}</p>
                </div>
            </li>`;
        })
        .join("");

    photoList.insertAdjacentHTML("beforeend", markup);

  
    lightbox.refresh();
}