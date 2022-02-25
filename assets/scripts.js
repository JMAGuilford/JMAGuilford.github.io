var realHeight;
var scrollSwitches = true;

function getHeight() {
    realHeight = window.innerHeight;
    document.documentElement.style.setProperty('--rh', `${realHeight}px`);
}

getHeight();

window.addEventListener('resize', () => {
    getHeight();
});

var mobileMenuShowing = false;

function hamburgerFunction() {
    if (!mobileMenuShowing) {
        document.getElementById("mobileMenu").classList.add("is-displayed");

        if(document.getElementById("mobileMenu").classList.contains("fade-out-time")) {
            document.getElementById("mobileMenu").classList.remove("fade-out-time");
        }

        mobileMenuShowing = true;
    } else {
        document.getElementById("menu").classList.remove("opened");
        document.getElementById("mobileMenu").classList.add("fade-out-time");

        mobileMenuShowing = false;
    }
}

function mobileNavClicked() {
    document.getElementById("menu").classList.remove("is-x");
    document.getElementById("mobileMenu").classList.add("fade-out-time");

    mobileMenuShowing = false;

    return true;
}

document.addEventListener('animationstart', function (e) {
    if (e.animationName === 'fade-in') {
        e.target.classList.add('did-fade-in');
    }
  });
  
document.addEventListener('animationend', function (e) {
if (e.animationName === 'fade-out') {
    e.target.classList.remove('did-fade-in');
    e.target.classList.remove("fade-out-time");
    e.target.classList.remove("is-displayed");
    }
});

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {

        let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        document.documentElement.style.setProperty('--rem', `${rem}px`);

        let scrollable = document.getElementById("scrollMain");
        let element = document.getElementById("stickyHeader");

        if(scrollSwitches) {
            if (scrollable.scrollTop > (realHeight * 0.5)) {
                if (element.classList.contains("hidden")) {
                    element.classList.remove("hidden");
                }
            }
            
            scrollable.onscroll = function() {
                if (scrollable.scrollTop > (realHeight * 0.5)) {
                    if (element.classList.contains("hidden")) {
                        element.classList.remove("hidden");
                    }
                } else {
                    if (!element.classList.contains("hidden")) {
                        element.classList.add("hidden");
                    }
                }
            }
        } 
    }
};