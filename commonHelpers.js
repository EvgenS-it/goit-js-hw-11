import{S as p,i as l}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m={PIXABAY:{PATH:"https://pixabay.com/api/",KEY:"44444020-42ceddb875011e5970bd122af"}},u=async(r,o)=>{const t=new URLSearchParams({key:m.PIXABAY.KEY,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(m.PIXABAY.PATH+"?"+t.toString())},f=r=>`
    <a href="${r.largeImageURL}" class="item">
      <img src="${r.webformatURL}" alt="" alt="${r.tags}"/>
      <div class="data">
        <p><b>Likes</b> <span>${r.likes}</span></p>
        <p><b>Views</b> <span>${r.views}</span></p>
        <p><b>Comments</b> <span>${r.comments}</span></p>
        <p><b>Downloads</b> <span>${r.downloads}</span></p>
      </div>
    </a>
  `,a=document.querySelector("form.form-search"),n=document.querySelector(".gallery"),d=new p(".gallery a",{});a&&a.addEventListener("submit",r=>{r.preventDefault();const o=a.elements.search.value;o?(n.innerHTML="",n.classList.add("is-load"),u(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{n.classList.remove("is-load");const i=[];t.total===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",class:"error",color:"red"}):(t.hits.forEach(e=>{i.push(f(e))}),n.innerHTML=i.join(""),d.refresh())}).catch(t=>{n.classList.remove("is-load"),l.error({message:`Sorry, something went wrong! ${t.message}`,position:"topRight",class:"error",color:"red"})}),a.reset()):l.error({message:"Please enter a search term",position:"topRight",class:"error",color:"red"})});
//# sourceMappingURL=commonHelpers.js.map
