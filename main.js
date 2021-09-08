let flex_showDiv = document.querySelector('.flex_show'),
imagesLength = flex_showDiv.querySelectorAll('.avg_img').length;
let imageIndex = 1;
let translate = 0;

let btn_left = document.querySelector("#btnLeft");
let btn_right = document.querySelector("#btnRight");

btn_left.onclick = () =>{
    if(imageIndex !== 1){
        imageIndex--;
        translate += 300;
    }
    flex_showDiv.style.transform = `translateX(${translate}px)`;
}

btn_right.onclick = () =>{
    if(imageIndex !== imagesLength){
        imageIndex++;
        translate -= 300;
    }
    flex_showDiv.style.transform = `translateX(${translate}px)`;
}
