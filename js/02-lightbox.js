import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const imageContainer = document.querySelector(".gallery");

//console.log(galleryItems);
let instance;
galleryItems.forEach(item => {
    const listItem = document.createElement('li');
    const gallryLink = document.createElement('a');
    const pic = document.createElement('img');

    listItem.setAttribute("class", "gallery__item");
    gallryLink.setAttribute("class", "gallery__link");
    gallryLink.setAttribute("href", item.original);
    pic.setAttribute("class", "gallery__image");
    pic.setAttribute("src", item.preview);
    pic.setAttribute("alt", item.description);

    gallryLink.append(pic);
    listItem.append(gallryLink);
    imageContainer.append(listItem);
})

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    closeText: 'X',
    animationSlide: false,
});



