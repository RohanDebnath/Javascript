function randomGen(length, includelowerCse, includeUpperCase, includeNumber,includeSpecialChar){

    let lowerCase="abcdefghijklmnopqrstuvwxyz";
    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number="1234567890";
    let specialChar="!@#$%^&*()_+{}[]:?><.,/";

    let allowedChar="";
    let result="";
    allowedChar+=includelowerCse?lowerCase:"";
    allowedChar+=includeUpperCase?upperCase:"";
    allowedChar+=includeNumber?number:"";
    allowedChar+=includeSpecialChar?specialChar:"";

    if(length<1){
        console.log("You need to have atleast one character");
    }else{
        for(let i=0;i<length;i++){
            let randomIndex=Math.floor(Math.random(allowedChar)*allowedChar.length +1);
            result+=allowedChar[randomIndex];
        }
   
    }
    return result;
}

let length=12;
let includelowerCse=true;
let includeSpecialChar=true;
let includeNumber=false;
let includeUpperCase=false;

let answer=randomGen(length,includelowerCse,includeUpperCase,includeNumber,includeSpecialChar)
console.log(answer);
