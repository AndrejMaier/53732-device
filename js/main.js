var link = document.querySelector(".btn-contacts");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=sender-name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=sender-email]");
var feedbackMessage = popup.querySelector("[name=sender-message]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
  });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !feedbackMessage.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

// Табы
var tabs = document.querySelectorAll(".btn-service");
var tabsContent = document.querySelectorAll(".service-item");
var tabsIndex = document.querySelectorAll("dt");




for (let i = 0; i < tabs.length; i++) {
  let tab = tabs[i];
  let tabIndex = tabsIndex[i];
  let tabContent = tabsContent[i];
  tab.addEventListener("click", function (evt) {
    evt.preventDefault();
    let tabsActive = document.querySelector(".btn-active");
    let tabsContentActive = document.querySelector(".service-item-active");
    let tabsIndexActive = document.querySelector(".service-list__active");
    tabsIndexActive.classList.remove("service-list__active");
    tabIndex.classList.add("service-list__active");
    tabsContentActive.classList.remove("service-item-active");
    tabContent.classList.add("service-item-active");
    tabsActive.classList.remove("btn-active");
    tabsActive.classList.add("btn");
    tab.classList.remove("btn");
    tab.classList.add("btn-active");

    console.log(tab);
  })
}

