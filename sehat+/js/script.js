$(document).ready(function () {
    $(document).bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $(".nav").removeClass("close");
        } else {
            $(".nav").addClass("close");
        }
    });

    let kaImg = $(".img-artikel img").attr("src");
    let kaTeks = $(".judul-artikel");
    let kaDataK = $(".kategori-artikel");
    let kaDataT = $(".tanggal-artikel");
    let kaIsi = $(".isi-artikel");

    $(".img-open img").attr("src", kaImg)
    $(".teks-open .judul").text(kaTeks[0].innerText)
    $(".teks-open .isi").text(kaIsi[0].innerText)
    $(".data-artikel .kategori").text(kaDataK[0].innerText)
    $(".data-artikel .tanggal").text(kaDataT[0].innerText)

    let klikArti = $(".kertas-artikel")

    if ((klikArti.length - 1) > 2) {
        klikArti[klikArti.length - 1].remove();
    }

    for (let i = 0; i < klikArti.length; i++) {
        const kA = klikArti[i];

        $(kA).on("click", () => {
            console.log("ok")
        })
    }

    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});