const mark2ProductEl = document.querySelector(".p-recommended__xx99-mark-two button.button-1");
const mark1ProductEl = document.querySelector(".p-recommended__xx99-mark-one button.button-1");
const zx9ProductEl = document.querySelector(".p-recommended__zx9 button.button-1");

mark2ProductEl.addEventListener('click', () => {
    window.location.href = "/product-xx99-mark-two-headphones.html";
})

mark1ProductEl.addEventListener('click', () => {
    window.location.href = "/product-xx99-mark-one-headphones.html";
})

zx9ProductEl.addEventListener('click', () => {
    window.location.href = "/product-zx9-speaker.html";
})