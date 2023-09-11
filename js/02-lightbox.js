import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryLi = galleryItems.map(({preview, original, description}) =>
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('')  
gallery.insertAdjacentHTML('beforeend', galleryLi);

gallery.addEventListener("click", onClick);
