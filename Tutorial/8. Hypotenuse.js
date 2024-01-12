let height;
let base;
let hypotenuse;

document.getElementById("myButton").onclick = function () {
    height = document.getElementById("perpen").value;
    height = Number(height);
    base = document.getElementById("base").value;
    base = Number(base);
    hypotenuse = Math.sqrt(Math.pow(height, 2) + Math.pow(base, 2));
    hypotenuse = Number(hypotenuse);
    document.getElementById("p3").innerHTML = "Your Hypotenuse is " + hypotenuse;
}