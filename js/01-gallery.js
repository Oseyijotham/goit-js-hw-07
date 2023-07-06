import { galleryItems } from './gallery-items.js';
// Change code below this line

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
    pic.setAttribute("data-source", item.original);
    pic.setAttribute("alt", item.description);

    gallryLink.append(pic);
    listItem.append(gallryLink);
    imageContainer.append(listItem);
})

imageContainer.addEventListener("click", event => {
    if (event.target.nodeName != "IMG") {
        return;
    }
    event.preventDefault()
    instance = basicLightbox.create(`
        <img src="${event.target.src}"/>`
       
    )
    instance.show()
    console.log(instance.element())
})

document.addEventListener("keydown", event => {
    
    if (event.key === "Escape") {
        instance.close();
    }
    
    
})