const zx9ProductEl = document.querySelector(".p-recommended__zx9 button.button-1");
const mark1ProductEl = document.querySelector(".p-recommended__xx99-mark-one button.button-1");
const xx59ProductEl = document.querySelector(".p-recommended__xx59 button.button-1");


xx59ProductEl.addEventListener('click', () => {
    window.location.href = "/product-xx59-headphones.html";
})

mark1ProductEl.addEventListener('click', () => {
    window.location.href = "/product-xx99-mark-one-headphones.html";
})

zx9ProductEl.addEventListener('click', () => {
    window.location.href = "/product-zx9-speaker.html";
})