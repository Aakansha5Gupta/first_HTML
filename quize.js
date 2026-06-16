function checkQuiz() {

let answer =
document.querySelector('input[name="q1"]:checked');

if(answer == null){
document.getElementById("result").innerHTML =
"Please select an answer";
return;
}

if(answer.value === "a"){
document.getElementById("result").innerHTML =
"Correct Answer!";
}
else{
document.getElementById("result").innerHTML =
"Wrong Answer!";
}
}