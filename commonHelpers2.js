import"./assets/styles-f3635d75.js";import{S as l}from"./assets/vendor-10cb7c31.js";const r=[{preview:"path/to/small-image1.jpg",original:"path/to/large-image1.jpg",description:"Image 1 description"},{preview:"path/to/small-image2.jpg",original:"path/to/large-image2.jpg",description:"Image 2 description"}],o=document.getElementById("gallery");function g(a){return a.map(({preview:e,original:i,description:t})=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${i}">
                    <img class="gallery-image" src="${e}" alt="${t}" />
                </a>
            </li>
        `).join("")}o.innerHTML=g(r);new l(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers2.js.map
