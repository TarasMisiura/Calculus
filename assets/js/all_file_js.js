<!--вкл.выкл блок-->
$(document).ready(function () {
    $('.message-bloc>.message-title-inner').on('click', function () {
        var element = $(this).parent('.message-bloc');

        if (element.hasClass('active')) {
            element.removeClass('active');
        } else {
            element.addClass('active');
        }
    });
});

<!--on/of password-->

$('body').on('click', '.password-control', function(){
    if ($('.password-control-setting').attr('type') == 'password'){
        $(this).addClass('view');
        $('.password-control-setting').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('.password-control-setting').attr('type', 'password');
    }
    return false;
});


$('body').on('click', '.password-control1', function(){
    if ($('.password-control-setting1').attr('type') == 'password'){
        $(this).addClass('view');
        $('.password-control-setting1').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('.password-control-setting1').attr('type', 'password');
    }
    return false;
});

<!--появление кнопки после ввода инфо в инпут-->

$(".input-new-password").on('change', function () {
    if ($(this).val()) {
        $(".btn-input-new-password").show();
    }
    else {
        $(".btn-input-new-password").hide();
    }
});
$(".btn-input-new-password").click(function () {
    $(".input-new-password").val('');
    $(this).hide();
});

$(".input-new-email").on('change', function () {
    if ($(this).val()) {
        $(".btn-input-new-email").show();
    }
    else {
        $(".btn-input-new-email").hide();
    }
});
$(".btn-input-new-email").click(function () {
    $(".input-new-email").val('');
    $(this).hide();
});

$(".input-new-email").on('change', function () {
    if ($(this).val()) {
        $(".btn-input-new-email").show();
    }
    else {
        $(".btn-input-new-email").hide();
    }
});
$(".btn-input-new-email").click(function () {
    $(".input-new-email").val('');
    $(this).hide();
});

$(".input-new-data").on('change', function () {
    if ($(this).val()) {
        $(".btn-input-new-data").show();
    }
    else {
        $(".btn-input-new-data").hide();
    }
});
$(".btn-input-new-data").click(function () {
    $(".input-new-data").val('');
    $(this).hide();
});

/*Бургер меню*/
function myFunction(x) {
    x.classList.toggle("change");
}



// for select
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}



function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            y[i].classList.add('selected');
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


<!--before start click-->
// type="text/javascript">
//     let content = document.getElementById("content")
// let show = document.getElementById("showContent")
//
// show.addEventListener("click", () => {
//     content.style.display = "block"
// })
//
//
// type="text/javascript">
//     let content = document.getElementById("content1")
// let show = document.getElementById("showContent1")
//
// show.addEventListener("click", () => {
//     content.style.display = "block"
// })