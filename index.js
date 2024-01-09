function displayMenu(){
    var menu = document.getElementById("mobileMenu");
    console.log("test");
    if(menu.style.transform === "50%"){
            menu.style.transform = "translateY(0)"
        }
        
    else{
        menu.style.transform = "translateY(50%)"
    }
}