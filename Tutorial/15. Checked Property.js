document.getElementById("myButton").onclick = function (){

    const subscribe = document.getElementById("myCheckBox");
    const visa = document.getElementById("visaBtn");
    const mastercard = document.getElementById("masterCard");
    const paypal = document.getElementById("paypal");

    if (subscribe.checked) {
        console.log("Thank you for subscribing");
        if (visa.checked) {
            console.log("You are paying with visa");
        } else if (mastercard.checked) {
            console.log("You are paying with mastercard");
        } else if (paypal.checked) {
            console.log("You are paying with paypal");
        }
    } else {
        console.log("Subscribe first");
    }

}