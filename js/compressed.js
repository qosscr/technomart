for(var basket=[],bookmarks=[],bookmarkField=document.getElementById("bookmark"),bookmarkInfo=document.querySelector(".top-line__button--bookmark"),basketField=document.getElementById("basket"),basketInfo=document.querySelector(".top-line__button--basket"),bookmarkButtons=document.querySelectorAll(".products__button--bookmark"),i=0;i<bookmarkButtons.length;i++)bookmarkButtons[i].addEventListener("click",function(e){e.preventDefault();var t=e.target.dataset.productId;50<bookmarks.length||-1<bookmarks.indexOf(t)||(bookmarks.push(t),bookmarkField.textContent=bookmarks.length,bookmarks.length&&bookmarkInfo.classList.add("top-line__button--filled"))});var buyButtons=document.querySelectorAll(".products__button--buy"),mapLink=document.querySelector(".about-us__link"),basketPopup=document.querySelector(".modal--basket"),mapPopup=document.querySelector(".modal--map"),closePopupButtons=document.querySelectorAll(".modal__close"),continueButton=document.querySelector(".button--continue");for(i=0;i<buyButtons.length;i++)buyButtons[i].addEventListener("click",function(e){e.preventDefault(),basketPopup.classList.add("modal--show");var t=e.target.dataset.productId;50<basket.length||-1<basket.indexOf(t)||(basket.push(t),basketField.textContent=basket.length,basket.length&&basketInfo.classList.add("top-line__button--filled"))});mapLink&&mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal--show")}),continueButton.addEventListener("click",function(e){e.preventDefault(),basketPopup.classList.remove("modal--show")});for(i=0;i<closePopupButtons.length;i++)closePopupButtons[i].addEventListener("click",function(){document.querySelector(".modal--show").classList.remove("modal--show")});window.addEventListener("keydown",function(e){27===e.keyCode&&document.querySelector(".modal--show")&&(e.preventDefault(),document.querySelector(".modal--show").classList.remove("modal--show"))});var isStorageSupport=!0,feedbackButton=document.querySelector(".button--feedback"),feedbackPopup=document.querySelector(".modal--feedback"),form=document.querySelector(".modal__form"),email=document.querySelector("[name=email]"),message=document.querySelector("[name=message]");try{storage=localStorage.getItem("name")}catch(e){isStorageSupport=!1}form&&(form.addEventListener("change",function(e){return isStorageSupport&&localStorage.setItem(e.target.name,e.target.value)}),form.addEventListener("submit",function(){return isStorageSupport&&localStorage.clear()})),feedbackButton&&feedbackButton.addEventListener("click",function(e){e.preventDefault(),feedbackPopup.classList.add("modal--show");var t=document.querySelector("[name=name]");isStorageSupport&&(t.value=localStorage.getItem("name")||"",email.value=localStorage.getItem("email")||"",message.value=localStorage.getItem("message")||""),t.focus()});var catalogSlides=document.querySelectorAll(".catalog-slider__slide"),prevSlideButton=document.querySelector(".catalog-slider__control"),nextSlideButton=document.querySelector(".catalog-slider__control--next"),catalogTabs=document.querySelectorAll(".catalog-slider__tab");if(catalogSlides.length){var currentCatalogSlideId=0,switchToNextSlide=function(e){document.querySelector(".catalog-slider__slide--active").classList.remove("catalog-slider__slide--active"),document.querySelector(".catalog-slider__tab--active").classList.remove("catalog-slider__tab--active"),currentCatalogSlideId=0<=e?e%catalogSlides.length:catalogSlides.length-1,catalogSlides[currentCatalogSlideId].classList.add("catalog-slider__slide--active"),catalogTabs[currentCatalogSlideId].classList.add("catalog-slider__tab--active")};for(i=0;i<catalogTabs.length;i++)catalogTabs[i].addEventListener("click",function(e){switchToNextSlide(e.target.dataset.slide)});nextSlideButton.addEventListener("click",function(){switchToNextSlide(currentCatalogSlideId+1)}),prevSlideButton.addEventListener("click",function(){switchToNextSlide(currentCatalogSlideId-1)})}var serviceSlides=document.querySelectorAll(".services-slider__slide"),serviceTabs=document.querySelectorAll(".services-slider__slide-button");if(serviceSlides.length)for(i=0;i<serviceTabs.length;i++)serviceTabs[i].addEventListener("click",function(e){document.querySelector(".services-slider__slide--active").classList.remove("services-slider__slide--active"),document.querySelector(".services-slider__slide-button--active").classList.remove("services-slider__slide-button--active"),serviceSlides[e.target.dataset.slide].classList.add("services-slider__slide--active"),serviceTabs[e.target.dataset.slide].classList.add("services-slider__slide-button--active")});