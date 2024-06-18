import{S as m,i as l}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p={PIXABAY:{PATH:"https://pixabay.com/api/",KEY:"44444020-42ceddb875011e5970bd122af"}},u=async(r,o)=>{const t=new URLSearchParams({key:p.PIXABAY.KEY,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(p.PIXABAY.PATH+"?"+t.toString())},f=r=>(console.log(r),`
    <a href="${r.largeImageURL}" class="item">
      <img src="${r.webformatURL}" alt="" alt="${r.tags}"/>
      <div class="data">
        <p><b>Likes</b> <span>${r.likes}</span></p>
        <p><b>Views</b> <span>${r.views}</span></p>
        <p><b>Comments</b> <span>${r.comments}</span></p>
        <p><b>Downloads</b> <span>${r.downloads}</span></p>
      </div>
    </a>
  `),c=document.querySelector("form.form-search"),i=document.querySelector(".gallery"),d=new m(".gallery a",{});c.addEventListener("submit",r=>{r.preventDefault();const o=c.elements.search.value;o?(i.innerHTML="",i.classList.add("is-load"),u(o).catch(t=>{console.log(t)}).then(t=>t.json()).then(t=>{i.classList.remove("is-load");const n=[];t.total===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",class:"error",color:"red"}):(t.hits.forEach(e=>{n.push(f(e))}),i.innerHTML=n.join(""),d.refresh())}),c.reset()):l.error({message:"Please enter a search term",position:"topRight",class:"error",color:"red"})});
//# sourceMappingURL=commonHelpers.js.map
