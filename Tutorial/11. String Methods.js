let userName = "Rohan Debnath";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
userName = userName.trim();
console.log(userName);
userName = userName.toUpperCase();
console.log(userName);
userName = userName.toLowerCase();
console.log(userName);
phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);
