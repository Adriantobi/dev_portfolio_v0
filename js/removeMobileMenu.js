window.onload = mobileMenuGone();

function mobileMenuGone() {
    if (window.innerWidth < 720) {
        document.getElementById('mobileMenuOptions').style.display = "none";
    }
}