function omrekenenNaarBinair()
{
    var binair = prompt('Voer decimaal getal in');
    var a = binair.toString(2);
    document.getElementById("demo").innerHTML = a;
}

function omrekenenNaarDecimaal()
{
    var decimaal = prompt('Voer binair getal in: ');
    var b = parseInt(decimaal, 2);
    alert(b);
}