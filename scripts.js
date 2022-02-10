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

function arrowFunction() {
    let deviceWidth = window.innerWidth;

    if (deviceWidth > 888 || !document.getElementById("downArrow").classList.contains("is-shrunken-nav")) { 
        document.querySelector("#boger").scrollIntoView({ behavior: 'smooth' });
     } else {
        if (!mobileMenuShowing) {
            document.getElementById("downArrow").classList.add("is-x");
            document.getElementById("arrowNav").classList.add("is-x");
            document.getElementById("mobileMenu").classList.add("is-displayed");

            if(document.getElementById("mobileMenu").classList.contains("fade-out-time")) {
                document.getElementById("mobileMenu").classList.remove("fade-out-time");
            }

            mobileMenuShowing = true;
        } else {
            document.getElementById("downArrow").classList.remove("is-x");
            document.getElementById("arrowNav").classList.remove("is-x");
            document.getElementById("mobileMenu").classList.add("fade-out-time");

            mobileMenuShowing = false;
        }
    } 
}


function mobileNavClicked() {
    document.getElementById("downArrow").classList.remove("is-x");
    document.getElementById("arrowNav").classList.remove("is-x");
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
        console.log("DOCUMENT READY");
        console.log(realHeight);

        let rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        console.log(rem);
        document.documentElement.style.setProperty('--rem', `${rem}px`);

        let scrollable = document.getElementById("scrollMain");

        function shrinkNav() {
            document.getElementById("stickyWrapper").classList.add("is-shrunken-nav");
            document.getElementById("topSpacer").classList.add("is-shrunken-nav");
            document.getElementById("centerHero").classList.add("is-shrunken-nav");
            document.getElementById("nameNav").classList.add("is-shrunken-nav");
            document.getElementById("arrowNav").classList.add("is-shrunken-nav");
            document.getElementById("downArrow").classList.add("is-shrunken-nav");
            document.getElementById("mainNav").classList.add("is-shrunken-nav");
            document.getElementById("breaker").classList.add("is-shrunken-nav");
        }

        if(scrollSwitches) {
            if (scrollable.scrollTop > (realHeight * 0.1)) {
                shrinkNav();
            }
            
            scrollable.onscroll = function() {
                let element = document.getElementById("stickyWrapper");
                if (scrollable.scrollTop > (realHeight * 0.01)) {
                    if (!element.classList.contains("is-shrunken-nav")) {
                        console.log("FIRE!");
                        shrinkNav();
                    }
                } else {
                    if (element.classList.contains("is-shrunken-nav")) {
                        document.getElementById("stickyWrapper").classList.remove("is-shrunken-nav");
                        document.getElementById("topSpacer").classList.remove("is-shrunken-nav");
                        document.getElementById("centerHero").classList.remove("is-shrunken-nav");
                        document.getElementById("nameNav").classList.remove("is-shrunken-nav");
                        document.getElementById("arrowNav").classList.remove("is-shrunken-nav");
                        document.getElementById("downArrow").classList.remove("is-shrunken-nav");
                        document.getElementById("mainNav").classList.remove("is-shrunken-nav");
                        document.getElementById("breaker").classList.remove("is-shrunken-nav");
                    }
                }
            }
        }
    }
};