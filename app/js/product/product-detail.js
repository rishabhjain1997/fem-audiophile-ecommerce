const backButtonEl = document.querySelector(".button--back");

backButtonEl.addEventListener('click', () => {
    window.history.back();
})