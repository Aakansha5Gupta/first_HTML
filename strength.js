function checkStrength(){

let pass =
document.getElementById("passwordInput").value;

let result =
document.getElementById("strengthResult");

if(pass.length < 6){
result.innerHTML = "Weak Password";
}
else if(pass.length < 10){
result.innerHTML = "Medium Password";
}
else{
result.innerHTML = "Strong Password";
}

}