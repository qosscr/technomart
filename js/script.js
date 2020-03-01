let basket = [];
let bookmarks = [];

const bookmarkField = document.getElementById('bookmark');
const bookmarkInfo = document.querySelector('.top-line__button--bookmark');

const basketField = document.getElementById('basket');
const basketInfo = document.querySelector('.top-line__button--basket');

const bookmarkButtons = document.querySelectorAll('.products__button--bookmark');

[...bookmarkButtons].forEach(button => {
  button.addEventListener('click', ({ target }) => {
    const productId = target.dataset.productId;
    if (bookmarks.length > 50 || bookmarks.includes(productId)) return;

    bookmarks.push(productId);
    bookmarkField.textContent = bookmarks.length;
    bookmarks.length && bookmarkInfo.classList.add('top-line__button--filled');
  });
});

// popups
const buyButtons = document.querySelectorAll('.products__button--buy');
const mapLink = document.querySelector('.about-us__link');

const basketPopup = document.querySelector('.modal--basket');
const mapPopup = document.querySelector('.modal--map');

const closePopupButtons = document.querySelectorAll('.modal__close');
const continueButton = document.querySelector('.button--continue');

[...buyButtons].forEach((button) => {
  button.addEventListener('click', ({ target }) => {
    basketPopup.classList.add('modal--show');

    const productId = target.dataset.productId;
    if (basket.length > 50 || basket.includes(productId)) return;

    basket.push(productId);
    basketField.textContent = basket.length;
    basket.length && basketInfo.classList.add('top-line__button--filled');
    });
});
mapLink && mapLink.addEventListener('click', (e) => {
  e.preventDefault();
  mapPopup.classList.add('modal--show');
});

continueButton.addEventListener('click', (e) => {
  e.preventDefault();
  basketPopup.classList.remove('modal--show');
});

[...closePopupButtons].forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    document.querySelector('.modal--show').classList.remove('modal--show');
  });
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 27 && document.querySelector('.modal--show')) {
    e.preventDefault();
    document.querySelector('.modal--show').classList.remove('modal--show');
  }
});

// feedback form
const isStorageSupport = true;
const feedbackButton = document.querySelector('.button--feedback');
const feedbackPopup = document.querySelector('.modal--feedback');
const form = document.querySelector('.modal__form');
const name = document.querySelector('[name=name]');
const email = document.querySelector('[name=email]');
const message = document.querySelector('[name=message]');

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

if (form) {
  form.addEventListener('change',
    ({ target }) => isStorageSupport && localStorage.setItem(target.name, target.value)
  );
  form.addEventListener('submit', () => isStorageSupport && localStorage.clear());
}

feedbackButton && feedbackButton.addEventListener('click', () => {
  feedbackPopup.classList.add('modal--show');
  if (isStorageSupport) {
    name.value = localStorage.getItem('name') || '';
    email.value = localStorage.getItem('email') || '';
    message.value = localStorage.getItem('message') || '';
  }
  name.focus();
});
// catalog slider
const catalogSlides = document.querySelectorAll('.catalog-slider__slide');
const prevSlideButton = document.querySelector('.catalog-slider__control');
const nextSlideButton = document.querySelector('.catalog-slider__control--next');
const catalogTabs = document.querySelectorAll('.catalog-slider__tab');

if (catalogSlides.length) {
  let currentCatalogSlideId = 0;

  const switchToNextSlide = (id) => {
    [...catalogSlides].forEach(slide => slide.classList.remove('catalog-slider__slide--active'));
    [...catalogTabs].forEach(slide => slide.classList.remove('catalog-slider__tab--active'));

    currentCatalogSlideId = id >= 0 ? id % catalogSlides.length : catalogSlides.length - 1;

    catalogSlides[currentCatalogSlideId].classList.add('catalog-slider__slide--active');
    catalogTabs[currentCatalogSlideId].classList.add('catalog-slider__tab--active');
  }

  [...catalogTabs].forEach(tab => tab.addEventListener('click', e => switchToNextSlide(e.target.dataset.slide)));
  nextSlideButton.addEventListener('click', () => switchToNextSlide(currentCatalogSlideId + 1));
  prevSlideButton.addEventListener('click', () => switchToNextSlide(currentCatalogSlideId - 1));
}

// services slider
const serviceSlides = document.querySelectorAll('.services-slider__slide');
const serviceTabs = document.querySelectorAll('.services-slider__slide-button');

if (serviceSlides.length) {
  [...serviceTabs].forEach((tab) => {
    tab.addEventListener('click', (e) => {
      [...serviceSlides].forEach(slide => slide.classList.remove('services-slider__slide--active'));
      [...serviceTabs].forEach(slide => slide.classList.remove('services-slider__slide-button--active'));

      serviceSlides[e.target.dataset.slide].classList.add('services-slider__slide--active');
      serviceTabs[e.target.dataset.slide].classList.add('services-slider__slide-button--active');
    })
  });
}
