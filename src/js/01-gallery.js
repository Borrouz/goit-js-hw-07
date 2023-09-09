'use strict'
// todo 
// 1. Чтоб не качались картинки
// 2. чтоб esc закрывал картинку



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

function onClick (e) {
    const dataPreview = e.target.dataset.source;
    const imgDesc = e.target.alt;
    const instance = basicLightbox.create(`
    <div>
    <img src="${dataPreview}" alt="${imgDesc}"/>
    </div>
`)
instance.show()
}




console.log(galleryItems);
