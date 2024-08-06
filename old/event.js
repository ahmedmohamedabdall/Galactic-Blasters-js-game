
//there are defalt events that work automaticly in js

//to stop that  asign a parameter in the method => e

//and use preventDefault()




let menu = document.querySelector('.menu');

let meueBtn = document.querySelector('.btn');


let menuOpen = false;

menu.style.marginLeft = '-300px';

function menuTogle(e) {

    e.preventDefault()

    if (menuOpen == false) {
        menu.style.marginLeft = '0px';
        
        menuOpen = true;
    }
    else if (menuOpen == true) {
        menu.style.marginLeft = '-300px';

        menuOpen = false;
    }
    
};

meueBtn.onclick=menuTogle;