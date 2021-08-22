const headphonesShopEl = document.querySelector(".shop .container .shop--headphones");
const speakersShopEl = document.querySelector(".shop .container .shop--speakers");
const earphonesShopEl = document.querySelector(".shop .container .shop--earphones");

headphonesShopEl.addEventListener('click', () => {
    window.location.href = "/headphones.html";
})

speakersShopEl.addEventListener('click', () => {
    window.location.href = "/speakers.html";
})

earphonesShopEl.addEventListener('click', () => {
    window.location.href = "/earphones.html";
})