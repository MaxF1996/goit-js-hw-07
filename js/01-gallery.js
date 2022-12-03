import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryItemsHtml = galleryItems
  .map(
    imageItem =>
      `<div class="gallery__item"><a class="gallery__link" href="${imageItem.original}"><img class="gallery__image" src="${imageItem.preview}" data-source="${imageItem.original}" alt="${imageItem.description}"/></a></div>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', galleryItemsHtml);

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  gallery.addEventListener('keydown', event => {
    event.code === 'Escape' ? instance.close() : {};
  });
});
