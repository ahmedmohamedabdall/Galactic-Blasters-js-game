let gallery_img = document.querySelectorAll('.gallery-images');//querySelector return opjects not strings
let get_Latest_Opened;
let windows_width = window.innerWidth;

if (gallery_img) {
    gallery_img.forEach(function (images,index) {
        images.onclick = function () {
            let img_src = images.getAttribute('src').toString();
            let get_img_pos = img_src.split('img\\');
            let get_img_name = get_img_pos[1];
            get_Latest_Opened = index + 1;

            let container = document.body;
            let newImageWindos = document.createElement('div');

            container.append(newImageWindos);

            newImageWindos.setAttribute('class', 'img-window');

            newImageWindos.setAttribute('onclick', 'close_image()');

            let new_img = document.createElement('img');

            newImageWindos.append(new_img);

            new_img.setAttribute('src', 'img\\' + get_img_name);
            new_img.setAttribute('id', 'cureent_img');
            
            //next an pre ptn
            //these is very important
            //if you didn't use onload= the code 
            //will run before the img and set the width 
            //of the img to 0
            new_img.onload = function () {
                //each img have a diffrent width
                // to place the next and prev ptn right
                //we need to get the width of the img
                let img_width = this.width;
                let calc_img_edge = ((windows_width - img_width) / 2) - 80;

                let prev_img = document.createElement('a');

                let prev_text = document.createTextNode('prev');
                
                prev_img.append(prev_text);
                
                container.append(prev_img);
                
                prev_img.setAttribute('class', 'btn_prev_img');
                
                prev_img.setAttribute('onclick', 'change_img(0)');

                prev_img.style.cssText="right:"+calc_img_edge+"px;"
                


                
            let next_img = document.createElement('a');

            let next_text = document.createTextNode('next');

            next_img.append(next_text);

            container.append(next_img);

            next_img.setAttribute('class', 'btn_next_img');

                next_img.setAttribute('onclick', 'change_img(1)');
                

                next_img.style.cssText="left:"+calc_img_edge+"px;"

                
            }
            
        }
    })
}


//close img function 
function close_image() {
    document.querySelector('.img-window').remove();
    document.querySelector('.btn_next_img').remove();
    document.querySelector('.btn_prev_img').remove();
}


function change_img(num) {

    document.querySelector('#cureent_img').remove();

    let get_img_windo = document.querySelector('.img-window');

    let create_new_img = document.createElement('img');

    get_img_windo.append(create_new_img);

    let calc_new_img;

    if (num == 1) {
        calc_new_img = get_Latest_Opened + 1;

        if (calc_new_img > gallery_img.length) {

            calc_new_img=1
        }
        }
        else if (num == 0) {
            calc_new_img = get_Latest_Opened - 1;
            if (calc_new_img < 1) {
                calc_new_img = gallery_img.length;
            }
            
        }
        
    create_new_img.setAttribute('src', 'img/img' + calc_new_img + '.jpg');
    create_new_img.setAttribute('id', 'cureent_img');

    get_Latest_Opened = calc_new_img;

    create_new_img.onload = function () {

        let img_width = this.width;

        let calc_img_edge = ((windows_width - img_width) / 2) - 80;

        let next_btn = document.querySelector('.btn_next_img');

        next_btn.style.cssText = 'right:' + calc_img_edge + 'px;';

        let prev_btn = document.querySelector('.btn_prev_img');
        prev_btn.style.cssText = 'left:' + calc_img_edge + 'px;';
    }


}
