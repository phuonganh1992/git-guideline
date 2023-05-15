function fib(){
let n=parseInt(document.getElementById("number").value);
let num1=1;
let num2=1;
let sum;
let result="";
while (n>0){
    result+=num1+",";
    sum=num1+num2;
    num1=num2;
    num2=sum;
    n--;
}
document.getElementById("result").innerHTML = "Dãy Fibonacci: " + result;
}