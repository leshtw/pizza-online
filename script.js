const form = document.querySelector('.form__content');
const size = document.getElementById("size");
const pizza = document.getElementById("pizza");
const soys = document.getElementById("soys");
const pay = ['', '22руб.', '27руб.', '32руб.', '38руб.'];


$(".chosen").chosen();

$(".chosen").change(function () {
    form.dispatchEvent(new Event("change"));
});


$(form).change(function (e) {
    if (pizza.value !== "0") {
        size.removeAttribute("disabled");
        $(size).trigger("chosen:updated");
    }
    if (pizza.value !== "0" && size.value !== "0") {
        document.getElementById("soys").removeAttribute("disabled");
        $(document.getElementById("soys")).trigger("chosen:updated");
    } else if (pizza.value == 0) {
        size.setAttribute("disabled", "disabled");
        soys.setAttribute("disabled", "disabled");
        $(size).trigger("chosen:updated");
        $(document.getElementById("soys")).trigger("chosen:updated");
    } else if (size.value == "0") {
        soys.setAttribute("disabled", "disabled");
        $(document.getElementById("soys")).trigger("chosen:updated");
    }


    let pizzaText = pizza.options[pizza.selectedIndex];
    $(".pizza__name").text(pizzaText.text);
    let sizeText = size.options[size.selectedIndex];
    $(".size__name").text(sizeText.text);
    let soysText = soys.options[soys.selectedIndex];
    $(".soys__name").text(soysText.text);



    $(".price__name").text(pay[size.value]);
    $(".price__name-main").text(pay[size.value]);
    if (pizza.value !== "0" && size.value !== "0" && soys.value !== "0") {
        order.classList.add('registrActive');
    } else {
        order.classList.remove("registrActive");
    }
});



const order = document.querySelector(".order");
$(order).click(function (e) {
    e.preventDefault();
    if (pizza.value !== "0" && size.value !== "0" && soys.value !== "0") {
        $('#dialog-confirm').addClass('active');
        $("#dialog-confirm").dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                Отправить: function () {
                    $(this).dialog("close");
                    alert("отправлено");
                }
            }
        });
    }

});