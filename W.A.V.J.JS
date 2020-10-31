
document.getElementById("main").style.width = screen.width + "px" ;

let phones = navigator.userAgent.toLocaleLowerCase();

if(phones.includes("android")){
    document.getElementById("img12").style.display="none";
document.getElementById("title").style.textAlign="center";
document.getElementById("btn1").style.textAlign="center";

let myimg = document.createElement("img");
myimg.src ="ali2.jfif";
document.getElementById("name").appendChild(myimg);
myimg.style.width="200px";
myimg.style.padding="5px";


}else if(phones.includes("iphone")){
    document.getElementById("img12").style.display="none";
    document.getElementById("title").style.textAlign="center";
    document.getElementById("btn1").style.textAlign="center";

    let myimg = document.createElement("img");
    myimg.src ="ali2.jfif";
    document.getElementById("name").appendChild(myimg);
    myimg.style.width="200px";
   myimg.style.padding="5px";

}





















