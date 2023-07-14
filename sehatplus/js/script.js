$(document).ready(function () {
    // ganti warna
    $(".ganti-warna").click(() => {
        $("body").toggleClass("dark");
    })

    // Rumah sakit terdekat
    $(".trst").click(function (e) {
        getLocation();

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        };

        function showPosition(position) {
            window.open('https://www.google.com/maps/search/rumah+sakit/@' + position.coords.latitude + ',' + position.coords.longitude + ',18.26z/data=!4m6!2m5!3m4!2s-3.483108,' + position.coords.longitude + '!4m2!1d' + position.coords.longitude + '!2d' + position.coords.latitude + '?entry=ttu', '_blank')
        };

    });

    $(".tat").click(function (e) {
        getLocation();

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        };

        function showPosition(position) {
            window.open('https://www.google.com/maps/search/apotek/@' + position.coords.latitude + ',' + position.coords.longitude + ',18.26z/data=!4m6!2m5!3m4!2s-3.483108,' + position.coords.longitude + '!4m2!1d' + position.coords.longitude + '!2d' + position.coords.latitude + '?entry=ttu', '_blank')
        };

    });

    // pencarian
    var href = $(".href");
    $("#cari").keyup(() => {
        var val = $("#cari").val().toLowerCase();

        for (let i = 0; i < href.length; i++) {
            const ref = href[i];
            var ef = ref.innerText.toLowerCase();

            if (val != "") {
                if (ef.includes(val)) {
                    ref.classList.add("hide");
                } else {
                    ref.classList.remove("hide");
                }
            } else {
                ref.classList.remove("hide");
            }

        }
    })
});
