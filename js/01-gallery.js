import { galleryItems } from "./gallery-items.js";

// Change code below this line
console.log(galleryItems);

const galleryDivEl = document.querySelector(".gallery");
const cardsMarkup = createCardsMarkup(galleryItems);
console.log(galleryDivEl);

galleryDivEl.insertAdjacentHTML("beforeend", cardsMarkup);

function createCardsMarkup(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>    
    `;
    })
    .join("");
}

// galleryDivEl.append(...elements);

// 1 добавить (используя map) картинки из galleryItems в галерею galleryDivEl

// 2 на каждую картинку в галерее добавить слушатель нажатия

// 3 при нажатии открывать модальное окно

// openModal(galleryItems[0].original);

// function openModal(url) {
//   const instance = basicLightbox.create(`
//     <div class="gallery__link">
//         <img src=${url} alt=${galleryItems[0].description}/>
//     </div>
// `);

//   instance.show();
// }
