import{a as c,b as a}from"./assets/vendor-c00b304a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const u=async t=>{const{data:e}=await c(`http://www.omdbapi.com/?apikey=80f72509&s=${t}`);return e},l=async t=>{const{data:e}=await c(`http://www.omdbapi.com/?apikey=80f72509&i=${t}`);return e},f=t=>`<li id="${t.imdbID}">
      <a href="#"> 
       <h2>${t.Title}</h2>
        <img src="${t.Poster}" alt="${t.Title}" id="${t.imdbID}" />
        <p><span>${t.Year}</span><span>${t.Type}</span></p>
      </a>
    </li>`;a.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);async function p(t){if(t.preventDefault(),t.target.nodeName==="IMG")try{const e=await l(t.target.id);a.create(`
  <div class="modal-windows">
  <h3 class="">${e.Title}</h3>
  <img src="${e.Poster}" alt="${e.Title}">
  <ul>
    <li>Actors: ${e.Actors}</li>
    <li>Awards: ${e.Awards}</li>
    <li>BoxOffice: ${e.BoxOffice}</li>
    <li>Country: ${e.Country}</li>
    <li>Genre: ${e.Genre}</li>
    <li>Language: ${e.Language}</li>
    <li>Plot: ${e.Plot}</li>
  </ul>
</div>
    `).show()}catch{}}const m=document.querySelector(".search-form"),d=document.querySelector(".list");m.addEventListener("submit",h);d.addEventListener("click",p);async function h(t){t.preventDefault();const{search:e}=t.currentTarget.elements;console.log("gghhk");try{const{Search:s}=await u(e.value);console.log(s),d.innerHTML=s.map(f).join("")}catch{}}l("tt0312528").then(console.log);
//# sourceMappingURL=commonHelpers.js.map
