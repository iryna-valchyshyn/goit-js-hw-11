import{a as d,S as m,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="57457980-e166dd9b1d2133c9afd3a23b8";function h(o){return d.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:p,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>

          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span>${t}</span>
            </p>

            <p class="info-item">
              <b>Views</b>
              <span>${i}</span>
            </p>

            <p class="info-item">
              <b>Comments</b>
              <span>${p}</span>
            </p>

            <p class="info-item">
              <b>Downloads</b>
              <span>${f}</span>
            </p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function P(){c.innerHTML=""}function q(){u.hidden=!1}function S(){u.hidden=!0}const l=document.querySelector(".form");l.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}P(),q(),h(r).then(s=>{if(s.hits.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits)}).catch(()=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S(),l.reset()})});
//# sourceMappingURL=index.js.map
