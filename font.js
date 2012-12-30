var WindowWidth = screen.width;
var WindowHeight = screen.height;
var b =WindowWidth/16, c = WindowWidth/16;
var div = (c+b)/7;
a();
function a(){





        document.getElementsByTagName("body")[0].style.fontSize = div+"px";

}
function AboutAlert(){
var dev = WindowWidth-(WindowWidth/50)-(div*2.2);
    document.getElementById("AboutAlert").style.width=dev+"px";


}