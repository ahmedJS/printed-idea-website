class ui {
    constructor(identifyingElement, elementsToApplyStylesOn, styles) {
        this.identifyingElement = identifyingElement
        this.elementsToApplyStylesOn = elementsToApplyStylesOn
        this.styles = styles
        this.stopProcess = false;
    }
    applyStyles(element, styles) {
        for (const property in styles)
            element.style[property] = styles[property];
    }
    applyDefault(element, styles) {
        for (const property in styles) {

            // this is a dicition maked it can be removed
            if (property == "opacity") {
                element.style[property] = "0";
                return;
            }


            element.style[property] = "initial";
        }

    }
    performStylesDependOnScroll() {
        if (this.identifyingElement.offsetTop - 50 < window.scrollY &&
            this.identifyingElement.offsetTop + this.identifyingElement.offsetHeight / 2.6 >
            window.scrollY
        ) {
            if (this.elementsToApplyStylesOn.length == this.styles.length) {
                for (let i = 0; i <= this.elementsToApplyStylesOn.length; i++) {
                    this.applyStyles(
                        this.elementsToApplyStylesOn[i],
                        this.styles[i]
                    );
                }
            }
        } else if (this.identifyingElement.offsetHeight < window.scrollY) {
            if (this.elementsToApplyStylesOn.length == this.styles.length) {
                for (let i = 0; i <= this.elementsToApplyStylesOn.length; i++) {
                    this.applyDefault(this.elementsToApplyStylesOn[i], this.styles[i]);
                }
            }
        } else {
            if (this.elementsToApplyStylesOn.length == this.styles.length) {
                for (let i = 0; i <= this.elementsToApplyStylesOn.length; i++) {
                    this.applyDefault(this.elementsToApplyStylesOn[i], this.styles[i]);
                }
            }

        }
    }

    static performStyles(elements, styles) {
        if (elements.length == styles.length) {
            for (let i = 0; i <= elements.length; i++) {
                ui.applyStyles(
                    elements[i],
                    styles[i]
                );
            }
        }
    }
}

// animation styles of first page

var styles = [{
        transform: "translateY(-100px)",
        opacity: "1"
    },
    {
        transform: "translateY(-100px)",
        opacity: "1"
    },
    {
        opacity: "1"
    },
    {
        opacity: "1",
        transform: "translateY(-100px)"
    }
]

var elementsToApplyStylesOnFirst = document.querySelectorAll(".development .images > div,.development .headline h1");
var elementPageOne = document.querySelector(".development");
var firstPageAnimate = new ui(elementPageOne, elementsToApplyStylesOnFirst, styles);

// animation styles of first page



// animation the second page
var secPageStyles = [
    { transform: "scale(1.1)", opacity: "1" },
    { transform: "translateX(-7vw)", opacity: "1" },
    { transform: "translateX(5vw)", opacity: "1" }
]
var elementsToApplyStylesOn =
    document.querySelectorAll(".design .images > div,.design .headline h1");
var elementPage = document.querySelector(".design");
var secPageAnimate = new ui(elementPage, elementsToApplyStylesOn, secPageStyles);


// animation the third page
var thrdPageStyles = [
    { transform: " translateX(13vw)", opacity: "1" },
    { transform: "translateX(-5vw)", opacity: "1" },
    { transform: "translateX(8vw)", opacity: "1" },
    { transform: "scale(1.1)", opacity: "1" },
]
var elementsToApplyStylesOnthrd =
    document.querySelectorAll(".print .headline h1,.print .images > div");
var elementPagethree = document.querySelector(".print");
console.log(elementsToApplyStylesOnthrd);
var thrdPageAnimate = new ui(elementPagethree, elementsToApplyStylesOnthrd, thrdPageStyles);


firstPageAnimate.performStylesDependOnScroll();


document.addEventListener("scroll", event => {
    firstPageAnimate.performStylesDependOnScroll();
    secPageAnimate.performStylesDependOnScroll();
    thrdPageAnimate.performStylesDependOnScroll();
});

var pointer = document.querySelector(".pointer");
document.addEventListener("mousemove", event => {
    pointer.style.left = `${event.clientX}px`;
    pointer.style.top = `${event.clientY}px`;
    console.log(event);
})