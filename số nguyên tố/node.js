let numbers = parseInt(prompt("Số lượng số nguyên tố:"));
let result="";
if (numbers < 2) {
  alert("Số lượng số nguyên tố phải lớn hơn hoặc bằng 2.");
} else {
  let count = 0;
  let N = 2;
  while (count < numbers) {
    let SNT = true;
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) {
        SNT = false;
        break;
      }
    }
    if (SNT) {
        result += N + ", ";
        count++;
    }
    N++;
  }
result = result.substring(0, result.length - 2);
document.getElementById("result").innerHTML = result;
}


