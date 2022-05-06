var images =['images/img_mountains_wide.jpg','images/img_nature_wide.jpg','images/img_snow_wide.jpg','images/Faculty-1.jpeg','images/Faculty-2.jpeg'];
var i=0;
function slideShow()
{
    document.getElementById("image") .src=images[i]; 
    if(i<images.length-1){
        i++;  
    }
    else{
        i=0;
    }
    setTimeout("slideShow()",2000);
}
window.onload=slideShow;