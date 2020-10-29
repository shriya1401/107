Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:'90'
    });

    camera=document.getElementById("camera");

    Webcam.attach("#camera");

function capture (){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML=`<img id="snap" src=${pic}>`
}
)}


console.log("ml5 version=", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json", modelloaded);

function modelloaded(){
    console.log("modelloaded");
    
}
