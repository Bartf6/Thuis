var pineapple = new Audio('./mp3/Pineapples.mp3');
var Owh = new Audio('./mp3/Owh.mp3');
var stegosauris = new Audio('./stegosauris.mp3');


function playAudio()
{
    var x = Math.floor((Math.random() * 5) + 1);

    if (x == 2)
    {
        pineapple.play();
        document.getElementById('pineapple').style.display = 'block';
    }
    console.log(x);
}

$(document).ready(function(){

});