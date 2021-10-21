import { galleryItems } from "./gallery-items.js";

// Change code below this line
console.log(galleryItems);

const galleryDivEl = document.getElementById("gallery");

// 1 добавить (используя map) картинки из galleryItems в галерею galleryDivEl
const elements = galleryItems.map((item) => {
  return element; // TODO
});
galleryDivEl.append(...elements);

// 2 на каждую картинку в галерее добавить слушатель нажатия

// 3 при нажатии открывать модальное окно

openModal(galleryItems[0].original);

function openModal(url) {
  const instance = basicLightbox.create(`
    <div class="gallery__link">
        <img src=${url} alt=${galleryItems[0].description}/>
    </div>
`);

  instance.show();
}
