// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const images = lightboxGallery(galleryItems);
function lightboxGallery(element) {
  return element
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
    })
    .join(" ");
}
galleryContainer.insertAdjacentHTML("beforeend", images);
var lightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionDelay: 250,
    captionType: "attr",
    captionsData: "alt",
  });
