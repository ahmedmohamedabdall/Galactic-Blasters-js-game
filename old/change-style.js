let navBttonStatus = false;

let navBtton = function () {
    let getSideBar = document.querySelector('.nav-aside');

    let getSideBarUl = document.querySelector('.nav-aside ul');

    let getSideBarTitle = document.querySelector('#top-item');


    //use => querySelectorAll() when you want to target many element

    
    let getSideBarLinks = document.querySelectorAll('.nav-aside a');

    if (navBttonStatus === false) {

        getSideBarUl.style.visibility = "visible";
        getSideBar.style.width = "275px";
        getSideBarTitle.style.opacity = "0.5";
        let arrayLinks = getSideBarLinks.length;

        for (let i = 0 ; i < arrayLinks; i++){
            getSideBarLinks[i].style.opacity = 1;
        }

        navBttonStatus = true;
    }
    
    else if (navBttonStatus === true) {
        getSideBar.style.width = "60px";
        getSideBarTitle.style.opacity = "0";
        let arrayLinks = getSideBarLinks.length;
        for (let i = 0; i < arrayLinks; i++) {
            getSideBarLinks[i].style.opacity = 0;
        }
        getSideBarUl.style.visibility = "hidden";
        navBttonStatus = false;
    }    
}
