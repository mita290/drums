var n=document.querySelectorAll(".drum").length;


for(var i=0;i<n;i++){

    var btn=document.querySelectorAll(".drum")[i];
    btn.addEventListener("click",sound);

    function sound(){
        var button1=this.innerHTML;

        makeSound(button1);
        buttonAni(button1);
    }

}

document.addEventListener("keydown",function(e){
    makeSound(e.key);
    buttonAni(e.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2=new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3=new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4=new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "k":
            var crash=new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "j":
            var snare=new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "l":
            var kb=new Audio('./sounds/kick-bass.mp3');
            kb.play();
            break;
        default:
            console.log(button1);
            
    }
}



function buttonAni(currentKey){
    var active=document.querySelector("."+currentKey);

    active.classList.add("pressed");  

    setTimeout(()=>{
        active.classList.remove("pressed");
    },100);
}





/*document.querySelector("button").addEventListener("click",sound);

function sound(){
    var audio=new Audio("./sounds/tom-1.mp3");
    audio.play();
}*/