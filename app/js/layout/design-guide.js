// FORM NUMBER INPUT
const input = document.querySelector('.form--number-input input');

document.querySelector(".form--number-input #form--number-inc").addEventListener("click", () => {
    input.stepUp();
});

document.querySelector(".form--number-input  #form--number-dec").addEventListener("click", () => {
    input.stepDown();
});