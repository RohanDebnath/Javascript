let loggedIn=false;
let userName;
let passWord;

while(!loggedIn){
    userName=window.prompt("Enter user ID");
    passWord=window.prompt("Enter your password");

    if(userName=="abc" && passWord=="abc"){
        loggedIn=true;
        console.log("Welcome")
    }else{
        console.log("Invalid Credential");
    }
}