screen_width=0;
screen_height=0;
apple="";
speak_data="";
to_number="";
draw_apple="";
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

 function preload() {
apple=loadImage("apple.png");
 }
 function start()
 {
     document.getElementById("status").innerHTML="System is listening please speak";
     recognition.start();
 }

recognition.onresult = function(event)
{
 console.log(event); 


var content =event.results[0][0].transcript;
console.log(content);

document.getElementById("status").innerHTML="The speech has been recognized as:"+content;
to_number=Number(content);
console.log(to_number);
if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML="Started drawing apples";
draw_apple="set";
}
else {
    document.getElementById("status").innerHTML="The speech has not recognized a number";
}

}

function setup(){
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width,screen_height-150);
    canvas.position(0,150)
}

function draw(){
    if(draw_apple=="set"){
        for(var i = 1; 1 <= to_number; i++){
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*400);
        image(apple,x,y,50,50);
        }
        document.getElementById("status").innerHTML=to_number+"Apples drawn";
        speak()
    }
}

