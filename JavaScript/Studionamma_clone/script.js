let floatingVideo = document.getElementById("floating-video");
let hero = document.querySelector(".hero");
let backgroundText = document.getElementsByClassName("backgroundText");

hero.addEventListener("mousemove", (e) => {

    floatingVideo.style.left = `${e.clientX}px`;
    floatingVideo.style.top = `${e.clientY}px`;

});
backgroundText.addEventListener("mouseover" , (e) => {

    floatingVideo.style.display = 'none';
});
