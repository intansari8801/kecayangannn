/* =========================
   TOMBOL LIHAT CERITA
========================= */
function lihatCerita() {
    const gallery = document.getElementById("gallery");
    gallery.scrollIntoView({
        behavior: "smooth"
    });
}
/* =========================
   HATI BERTERBANG
========================= */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";
    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";
    document
        .getElementById("hearts")
        .appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 8000);
}
setInterval(createHeart, 600);
