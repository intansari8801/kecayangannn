function scrollToGallery() {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
}
// HATI BERTERBANG
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "♥";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 18) + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 7000);
}
setInterval(createHeart, 700);
