window.onload = function () {
    var gu = document.querySelector(".gu-nav-box");
    window.onscroll = function () {
        var st = document.documentElement.scrollTop;
        if (st > 30) {
            animate(gu, {
                top: 0
            }, 300)
        } else {
            animate(gu, {
                top: -100
            }, 300)
        }
    }
}