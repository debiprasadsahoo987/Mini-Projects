const menu = document.querySelector(".menu");
const menuItems = document.querySelector(".nav-links");
const body = document.querySelector("body");
const menuCall = () => {
    menu.addEventListener("click", () => {
        menuItems.classList.toggle("nav-active");
    });
};
menuCall();

// window.onscroll = function() {
//     myfunction();
// };
// var sticky = menuItems.offsetTop;

// function myfunction() {
//     if (window.pageYOffset >= sticky) {
//         menuItems.classList.add("sticky");
//     } else {
//         menuItems.classList.remove("sticky");
//     }
// }