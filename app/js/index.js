const zx9ProductEl = document.querySelector(".zx9-speaker--info button");
const zx7ProductEl = document.querySelector(".zx7-speaker .container button");
const yx1ProductEl = document.querySelector(".yx1-earphones--info");
zx9ProductEl.addEventListener('click', () => {

    window.location.href = "product-zx9-speaker.html";
})

zx7ProductEl.addEventListener('click', () => {

    window.location.href = "product-zx7-speaker.html";
})

yx1ProductEl.addEventListener('click', () => {

    window.location.href = "product-earphones.html";
})