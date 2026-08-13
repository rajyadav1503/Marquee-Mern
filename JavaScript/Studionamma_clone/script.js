let floatingVideo = document.getElementById("floating-video");
let hero = document.querySelector(".hero");
let menu = document.querySelector(".menu");
let letstalk = document.querySelector(".letstalk");
let mode = document.querySelector(".darkmode");

let overlay = document.querySelector(".overlay-menu");

hero.addEventListener("mousemove", (e) => {

    floatingVideo.style.left = `${e.clientX}px`;
    floatingVideo.style.top = `${e.clientY}px`;

    floatingVideo.style.opacity = '1';

});
// hero.addEventListener("mouseleave", () => {

//     floatingVideo.style.opacity = "0";

// });

menu.addEventListener("mouseenter" , () => {
    menu.textContent = "OPEN";
});
menu.addEventListener("mouseleave" , () => {
    menu.textContent = "MENU";
});

letstalk.addEventListener("mouseenter" , () => {
    letstalk.textContent = "CONTACT US";
});
letstalk.addEventListener("mouseleave" , () => {
    letstalk.textContent = "LET'S TALK";
});

mode.addEventListener("click" , (e) => {
    const isDark = document.body.classList.toggle("dark");
    e.target.textContent === "DARK MODE" ? (e.target.textContent = "LIGHT MODE") : (e.target.textContent = "DARK MODE");
    
});

let isOpen = false;

menu.addEventListener("click" , () => {

    isOpen = !isOpen;

    if(isOpen){
        menu.textContent = "CLOSE";
        overlay.style.top = "0";
    }else{
        menu.textContent = "MENU";
        overlay.style.top = "-100%";
    }
});

console.log(floatingVideo);













