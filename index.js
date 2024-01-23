function displayMenu() {
    var menu = document.getElementById("mobileMenu");
    console.log("test");
    if (menu.style.transform) {
        menu.style.transform = null;
        menu.style.height = null;
        menu.style.overflow = "null";
        menu.style.padding = null;

    }

    else {
        menu.style.transform = "translateY(0)"
        menu.style.height = "auto";
        menu.style.overflow = "hidden";
        menu.style.padding = "20px";
    }
}

var acc = document.getElementsByClassName("tabHead");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;


        } else {
            panel.style.maxHeight = "130px";
        }
    });
}

// const cards = document.querySelectorAll("div")

// const observer = new IntersectionObserver (entries =>{
    
//     entries.forEach(entry =>{
//         entry.target.classList.toggle("show"), entry.isIntersecting
//     })
    
// }
// )
// cards.forEach(card =>{
//     observer.observe(card)
// })
