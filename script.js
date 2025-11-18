

function Randomize(y)
{
x = Math.floor(Math.random() * y + 1)
document.getElementById("Cont-left").src = "/Deck/" + Math.floor(x) + ".png"

}
