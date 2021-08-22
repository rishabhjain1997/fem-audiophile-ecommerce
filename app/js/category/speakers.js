const zx9ProductEl = document.querySelector(".zx9-snapshot .container .product-snapshot--text button");
const zx7ProductEl = document.querySelector(".zx7-snapshot .container .product-snapshot--text button");
zx7ProductEl.addEventListener('click', () => {

    window.location.href = "product-zx7-speaker.html";
})

zx9ProductEl.addEventListener('click', () => {

    window.location.href = "product-zx9-speaker.html";
})