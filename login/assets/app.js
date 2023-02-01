var successMessage = document.getElementById("success");
var errorMessage = document.getElementById("error");
var submitButton = document.getElementById("submit")
var input = document.getElementById("password");
var eyeIcon = document.getElementById("show");

var password = document.getElementById("password");
var passwordValue = password.value


function _0x4f1d(_0x27acc2,_0x27c2d9){var _0x220cd8=_0x220c();
    return _0x4f1d=function(_0x4f1dc1,_0x56ff8e){_0x4f1dc1=_0x4f1dc1-0x181;
    var _0x46e147=_0x220cd8[_0x4f1dc1];return _0x46e147;},_0x4f1d(_0x27acc2,_0x27c2d9);
}function _0x220c(){var _0x1e2109=['33603EvqmTW','350asXMqk','345741EEMlIX','4161472dNXHuw','8537292ucuUVp','2081896Xkrfft','password','1016PLYVpx','6aQPaET','98433DxRAmV','10365cBmlPu','PortfolioKroel','10jELHOh','130AaOafd','value'];_0x220c=function(){return _0x1e2109;};return _0x220c();
}(function(_0x42adb3,_0x37c50e){var _0x1362d2=_0x4f1d,_0x52451c=_0x42adb3();while(!![]){try{var _0x16faed=-parseInt(_0x1362d2(0x18f))/0x1+-parseInt(_0x1362d2(0x181))/0x2*(parseInt(_0x1362d2(0x18a))/0x3)+-parseInt(_0x1362d2(0x185))/0x4*(-parseInt(_0x1362d2(0x18c))/0x5)+parseInt(_0x1362d2(0x188))/0x6*(parseInt(_0x1362d2(0x183))/0x7)+parseInt(_0x1362d2(0x187))/0x8*(-parseInt(_0x1362d2(0x189))/0x9)+parseInt(_0x1362d2(0x18d))/0xa*(parseInt(_0x1362d2(0x182))/0xb)+parseInt(_0x1362d2(0x184))/0xc;
if(_0x16faed===_0x37c50e)break;else _0x52451c['push'](_0x52451c['shift']());
}catch(_0x4524bf){_0x52451c['push'](_0x52451c['shift']());}}}(_0x220c,0xb1cc5));
function login(){var _0x3f8e5c=_0x4f1d,_0x5ece45=document['getElementById'](_0x3f8e5c(0x186)),_0x1feaf6=_0x5ece45[_0x3f8e5c(0x18e)];const _0x3f7e20=_0x3f8e5c(0x18b);_0x1feaf6==_0x3f7e20?success():error();};

password.onkeydown = function() {
    if (window.event.keyCode == "13") {
        login()
    }
}

function showHidePassword() {
    eyeIcon.classList.toggle("active")
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}


function success() {
    var successMessage = document.getElementById("success");
    successMessage.classList.remove("hide");
    submitButton.classList.add("success")
    /* lock animation */
    var video = document.getElementById("lockVideo");
    video.play()

    setTimeout(redirect, 5000);
}

function redirect() {
    window.location.href = "portfolio/portfolio/portfolio.html"
}

function error() {
    var errorMessage = document.getElementById("error");
    errorMessage.classList.remove("hide");
}

function hideMessages() {
    if (passwordValue == "") {
        successMessage.classList.add("hide")
        errorMessage.classList.add("hide")
    }
}

function hint() {
    var hint = document.getElementById("hint");
    hint.classList.remove("hide");
};

window.onload = setTimeout(hint, 5000)
