$(document).ready(function () {
    tsParticles.load("tsparticles", {
        fullScreen: { enable: false },
        background: { color: "#0c0c1e" },
        particles: {
            number: { value: 60 },
            size: { value: 3 },
            color: { value: ["#6a0dad", "#ffffff", "#0099ff"] },
            shape: { type: "circle" },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.5 },
            links: {
                enable: true,
                color: "#ffffff",
                distance: 150,
                opacity: 0.4,
                width: 1
            }
        }
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });

    $(".scroll-button").on("click", function () {
        $("html, body").animate({ scrollTop: $("footer").offset().top }, 800);
    });
});

document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("show");
});

// Solo en móviles: abrir/cerrar submenús sin bloquear el <a>
document.querySelectorAll(".menu > li").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
            e.stopPropagation();

            // Cerrar otros
            document.querySelectorAll(".menu > li").forEach(function (other) {
                if (other !== item) {
                    other.classList.remove("open");
                }
            });

            // Alternar el actual
            item.classList.toggle("open");
        }
    });
});
