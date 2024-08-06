

/*

1-onclick can only take one function  

if you write a second one only the last one will work
    
to use two function on one button use => addEventListener(type,function) 

don't add () in the addEventListener(type,function) function

but how to add a parameter to the event listener function 

ther are two ways 1- use nameless function 

write the code directly in the function 
    

2- use nameless function 

write the function with parameter  in the nameless function 

*/
let menu = document.querySelector('.menu');

let meueBtn = document.querySelector('.btn');

let body = document.body;

let menuOpen = false;

menu.style.marginLeft = '-300px';

function chb() {
    body.style.backgroundColor = 'blue';
    
};

function menuTogle(e) {

    e.preventDefault()
    


    if (menuOpen == false) {
        menu.style.marginLeft = '0px';
        
        
        menuOpen = true;
    }
    else if (menuOpen == true) {
        menu.style.marginLeft = '-300px';

        body.style.backgroundColor = 'white';

        

        menuOpen = false;
    }
    
};

function hi(name) {
    alert('hi', name);
}



//using nameless fun 
meueBtn.addEventListener('click', function  () {
    swal('like this')
});

//add the orignal fun inside the nameless one 
meueBtn.addEventListener('click', function () {
    hi('ahmed');
});

meueBtn.addEventListener('click', chb);

meueBtn.addEventListener('click', function (e) {
    menuTogle(e);
});

;
