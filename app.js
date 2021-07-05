const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector("ul.gallery");
galleryItems.forEach(function () {
  gallery.insertAdjacentHTML('afterbegin', "<li><img></li>");
    }
);
  const galleryElements = gallery.querySelectorAll('li');
for (let i = 0; i < galleryElements.length; i++) {
  const img = galleryElements[i].querySelector('img');
  img.setAttribute("src", galleryItems[i].preview)
  img.setAttribute("alt", galleryItems[i].description)
  img.classList.add("gallery__image")
}

gallery.addEventListener("click", handleGalleryClick)

function handleGalleryClick(event) {
  event.preventDefault();
  
  const target = event.target;

 if (target.nodeName !== "IMG") return;

  modalOpen(target);
}

const modal = document.querySelector("div.lightbox");
const fullImg = document.querySelector('img.lightbox__image');

function modalOpen(target) {
  modal.classList.add("is-open");
  
  fullImg.setAttribute("alt", target.getAttribute('alt'))
  let fullImgSource = galleryItems.find(photo => photo.description === fullImg.getAttribute('alt'));
  console.log(fullImgSource)
  fullImg.setAttribute("src", fullImgSource.original)
}

const closeBtn = document.querySelector("button.lightbox__button");
closeBtn.addEventListener("click", closeModal)
function closeModal() {
  modal.classList.remove("is-open")
  fullImg.setAttribute("src", "")
}

function nextImg() {
  let currentPhotoDescription = document.querySelector("img.lightbox__image").getAttribute("alt");
  let currentElement = galleryItems.find(photo => photo.description === currentPhotoDescription);



  let imgIndex = galleryItems.indexOf(currentElement);
  let nextIndex = imgIndex + 1;
  //console.log(galleryItems.length)
  if (nextIndex + 1 > galleryItems.length) {
    nextIndex = 0;
  }
  
  fullImg.setAttribute("src", galleryItems[nextIndex].original)
  fullImg.setAttribute("alt", galleryItems[nextIndex].description)
  
}

function prevImg() {
  let currentPhotoDescription = document.querySelector("img.lightbox__image").getAttribute("alt");
  let currentElement = galleryItems.find(photo => photo.description === currentPhotoDescription);



  let imgIndex = galleryItems.indexOf(currentElement);
  let prevIndex = imgIndex - 1;

  if (prevIndex < 0) {
    prevIndex = 8;
  }
  
  fullImg.setAttribute("src", galleryItems[prevIndex].original)
  fullImg.setAttribute("alt", galleryItems[prevIndex].description)
}

const overlay = document.querySelector("div.lightbox__overlay");
overlay.addEventListener("click", closeModal)

document.onkeydown = function (e) {
  var keyCode = e.code;

  if (keyCode === "Escape") {
    closeModal()
  }
  if (keyCode === "ArrowRight") {
    nextImg();
  }
  if (keyCode === "ArrowLeft") {
    prevImg();
  }
};
