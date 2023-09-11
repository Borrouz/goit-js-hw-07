'use strict'

import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryLi = galleryItems.map(({preview, original, description}) =>
`<li data-preview = ${preview} class = "gallery__link">
<a class"gallery__link" href = ${original}>
<img
class = "gallery__image"
src = ${preview}
data-source = ${original}
alt = ${description}
/>
</a>
</li>`).join('')  
gallery.insertAdjacentHTML('beforeend', galleryLi);

gallery.addEventListener("click", onClick);

function onClick (event) {
    event.preventDefault()
    const dataPreview = event.target.dataset.source;
    const imgDesc = event.target.alt;

    if (event.target === gallery) {
        return
    }
    document.addEventListener("keydown", esc);
    function esc (event) {
        if (event.key === 'Escape'  ) {
            instance.close()
        }
    }

    const instance = basicLightbox.create(`
    <div class = 'modal'>
    <img src="${dataPreview}" alt="${imgDesc}"/>
    </div>
`)
console.log(instance.show.name);
instance.show()
}



