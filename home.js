/**
 * Created by rawashi on 16/04/11.
 */


document.getElementById("home-content").style.display="block";

//メニューの切り替え
function menu_change() {
    document.getElementById("home-content").style.display="none";
    document.getElementById("statistics-content").style.display="none";
    document.getElementById("reminder-content").style.display="none";
    document.getElementById("twitter-content").style.display="none";
    document.getElementById("about-content").style.display="none";
    var controls = document.getElementsByName("control");
    var content = 1;
    for(var i=0; i<controls.length; i++){
        if(controls[i].checked){
            content = i+1;
            break;
        }
    }
    var content_str = "";
    switch (content){
        case 1:content_str = "home-content";break;
        case 2:content_str = "statistics-content";break;
        case 3:content_str = "reminder-content";break;
        case 4:content_str = "twitter-content";break;
        case 5:content_str = "about-content";break;
    }
    document.getElementById(content_str).style.display="block";
}

