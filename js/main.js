function add() {
    document.querySelector("#search").style.opacity = "1";
    document.querySelector("#search").style.visibility = "visible";
}

function remove() {
    document.querySelector("#search").style.opacity = "0";
    document.querySelector("#search").style.visibility = "hidden";
}

document.onkeyup = function (esc) {
    esc = esc || window.event;
    if (esc.keyCode == 27) {
        remove();
    }
};


var slideIndex = 0;
carousel();


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var b = document.querySelectorAll(".slider-button");
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = 0;
        x[i].style.visibility = "hidden";
        b[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.opacity = 1;
    x[slideIndex - 1].style.visibility = "visible";
    b[slideIndex - 1].classList.add("active");

    setTimeout(carousel, 4000); // Change image every 4 seconds
}

$(document).scroll(function () {
    var scrollPosition = $(document).scrollTop();
    var scrollReference = 1500;
    if (scrollPosition >= scrollReference) {
        $("#right").addClass('sticky');
    } else {
        $("#right").removeClass('sticky');
    };
});

document.querySelector("#side-btn").addEventListener("click", function () {
    document.querySelector("#page").style.transform = "translateX(300px)";
    document.querySelector("#side-btn-off").style.display = "block";
    document.querySelector(".side-menu").style.opacity = "1";
});


document.querySelector("#side-btn-off").addEventListener("click", function () {
    document.querySelector("#page").style.transform = "none";
    document.querySelector("#side-btn-off").style.display = "none";
    document.querySelector(".side-menu").style.opacity = "0";
});