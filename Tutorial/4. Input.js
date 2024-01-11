let userName=window.prompt("What is Your name?");
console.log(userName);
document.getElementById("myButton").onclick= function(){
    userName=document.getElementById("myText").value;
    console.log(userName)
    document.getElementById("p3").innerHTML="Hello "+userName;
}