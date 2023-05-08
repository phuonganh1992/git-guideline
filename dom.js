
function calculate(operation){
    let aa = document.getElementById("number_1").value;
    let bb = document.getElementById("number_2").value;
    let cc = document.getElementById("result");
    cc.innerText= eval(aa + operation + bb);


 }
