import{S as l,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(o,i){i.innerHTML="";const s=o.map(e=>`<li class="imgAdded">
                <a href="${e.largeImageURL}"> 
                    <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="152">
                </a>
                <div class="descr">
                    <p><b>Likes:</b> ${e.likes}</p>
                    <p><b>Views:</b> ${e.views}</p>
                    <p><b>Comments:</b> ${e.comments}</p>
                    <p><b>Downloads:</b> ${e.downloads}</p>
                </div>
            </li>`).join("");i.insertAdjacentHTML("beforeend",s),new l(".list-img a").refresh()}function d(o){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"45999766-9f9a6b82db6e56573d0cf5f49",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString()}`;return fetch(s).then(r=>{if(!r.ok)throw new Error(`HTTP error! Status: ${r.status}`);return r.json()}).then(r=>r.hits.length<=0?(c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),[]):r.hits).catch(r=>{c.error({title:"Error",message:"An error occurred while fetching the images. Please try again later.",position:"topRight"}),console.error(r)})}const m=document.querySelector(".formImg"),f=document.querySelector(".list-img"),a=document.querySelector(".loader"),h=document.getElementById("search-img");m.addEventListener("submit",o=>{o.preventDefault(),a.classList.remove("visually-hidden");const i=h.value.trim();i!==""?d(i).then(s=>{a.classList.add("visually-hidden"),u(s,f)}).catch(s=>console.log(s)):(a.classList.add("visually-hidden"),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))});
//# sourceMappingURL=index.js.map