'use strict'
// todo 
// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// 2.Реализация делегирования на ul.gallery и получение url большого изображения.

// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox.
//  Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

//  4.Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

//  5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
//  Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.



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
    console.log(e.target.alt);
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
