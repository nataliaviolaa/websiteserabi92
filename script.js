function showName(element) {
    let nameTag = element.querySelector(".nama");
    
    // Efek muncul nama dengan smooth
    nameTag.style.opacity = "1";
    nameTag.style.transform = "translateY(-5px)";
    
    // Efek getar kecil saat diklik
    element.style.animation = "shake 0.3s";
    
    // Reset animasi setelah selesai
    setTimeout(() => {
        element.style.animation = "";
    }, 300);
}

// Tambahkan animasi getar di CSS
let style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    50% { transform: translateX(3px); }
    75% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
}`;
document.head.appendChild(style);

const profiles = {
    katya: { img: "katya.png", nama: "Katya", deskripsi: "Katya adalah.... (isi deskripsi di sini)" },
    devinna: { img: "devinna.png", nama: "Devinna", deskripsi: "Devinna adalah...." },
    viola: { img: "viola.png", nama: "Viola", deskripsi: "Viola adalah...." },
    caroline: { img: "caroline.png", nama: "Caroline", deskripsi: "Caroline adalah...." },
    felice: { img: "felice.png", nama: "Felice", deskripsi: "Felice adalah...." },
    arra: { img: "arra.png", nama: "Arra", deskripsi: "Arra adalah...." }
};

function showProfile(name) {
    let profilDetail = document.getElementById("profil-detail");
    let img = document.getElementById("profil-img");
    let nama = document.getElementById("profil-nama");
    let deskripsi = document.getElementById("profil-deskripsi");

    // Ganti data berdasarkan yang diklik
    img.src = profiles[name].img;
    nama.textContent = profiles[name].nama;
    deskripsi.textContent = profiles[name].deskripsi;

    // Tampilkan profil detail
    profilDetail.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    const perkenalan = document.querySelector(".perkenalan");

    function showOnScroll() {
        const rect = perkenalan.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            perkenalan.classList.add("show");
        }
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});

let slideIndex = 0;
const slides = document.querySelector(".slides");

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) slideIndex = 6;
    if (slideIndex > 6) slideIndex = 0;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(() => moveSlide(1), 3000); // Auto-slide tiap 3 detik

