import{S as m,i as l}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p={PIXABAY:{PATH:"https://pixabay.com/api/",KEY:"44444020-42ceddb875011e5970bd122af"}},f=async(s,n)=>{try{const r=new URLSearchParams({key:p.PIXABAY.KEY,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=await fetch(p.PIXABAY.PATH+"?"+r.toString());if(!o.ok)throw new Error("Failed to fetch images");return o}catch(r){throw console.error("Error fetching images:",r),r}},u=s=>`
    <a href="${s.largeImageURL}" class="item">
      <img src="${s.webformatURL}" alt="" alt="${s.tags}"/>
      <div class="data">
        <p><b>Likes</b> <span>${s.likes}</span></p>
        <p><b>Views</b> <span>${s.views}</span></p>
        <p><b>Comments</b> <span>${s.comments}</span></p>
        <p><b>Downloads</b> <span>${s.downloads}</span></p>
      </div>
    </a>
  `,a=document.querySelector("form.form-search"),i=document.querySelector(".gallery"),h=new m(".gallery a",{});a&&a.addEventListener("submit",s=>{s.preventDefault();const n=a.elements.search.value;n?(i.innerHTML="",i.classList.add("is-load"),f(n).then(r=>r.json()).then(r=>{i.classList.remove("is-load");const o=[];r.total===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",class:"error",color:"red"}):(r.hits.forEach(e=>{o.push(u(e))}),i.innerHTML=o.join(""),h.refresh())}).catch(r=>{i.classList.remove("is-load"),l.error({message:`Sorry, something went wrong! ${r.message}`,position:"topRight",class:"error",color:"red"})}),a.reset()):l.error({message:"Please enter a search term",position:"topRight",class:"error",color:"red"})});
//# sourceMappingURL=commonHelpers.js.map
