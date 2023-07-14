$(document).ready(function () {
    // ganti warna
    $(".ganti-warna").click(() => {
        $("body").toggleClass("dark");
    })

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