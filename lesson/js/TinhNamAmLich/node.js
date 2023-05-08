// document.write('debug chương trình: ');

// let a, b, c;

// a = 5;

// b = 10;

// c = a + b;

// document.write("<br/>", 'kết quả c = ', c);

// document.write("<br/>", 'kết quả vòng lập i từ 0 đến 10:');

// for (let i = 0; i < 10; i++) {
//     document.write("<br/>" , "i=", i );
// }

// Nhập giá trị từ js

// let yourName = prompt("Enter your name");

// document.write('Your name:', yourName);

// EX 1
// let a = + prompt("Nhập giá trị a: ");

// let b = + prompt("Nhập giá trị b: ");

// console.log("c = ", a + b);

// document.write("Giá trị c cần tìm: ", a + b)

// nhập ngày tháng năm
// let yyyy = + prompt("Nhập giá trị Năm: ");

// let MM = + prompt("Nhập giá trị Tháng: ");

// if (MM < 10) {
//     MM = '0' + MM;
// }

// let dd = + prompt("Nhập giá trị Ngày: ");
// if (dd < 10)
// {
//     dd = '0' + dd;
// }

// document.write("Kết quả ngày sau khi nhập: ", dd + '-' + MM + '-' + yyyy)

// ==============2023/04/21====================

// let a = 9;
// let b = a--;

// console.log("a= ", a);
// console.log("b= ", b);

// let getid = document.getElementById("id1");
// console.log(getid);

// let getname = document.getElementsByTagName("name1");
// console.log(getname);

// let getclass = document.getElementsByClassName("class1");
// console.log(getclass);

// let getid = document.getElementById("xinchao");
// var str = '';
// for (let i = 0; i < 5; i++) {
//     str += '<p> Hello! </p>';
// }

// getid.innerHTML = str;
// console.log(getid);

// <input type="password" id="pass" />
//     <button type="button" id="btn">Show/ hide pass</button>
// let elementInput = document.getElementById("pass");

// document.getElementById("btn").onclick = function () {
//   if (elementInput.getAttribute("type") == "password")
//     elementInput.setAttribute("type", "text");
//   else if (elementInput.getAttribute("type") == "text")
//     elementInput.setAttribute("type", "password");
// };

// let colors = ["red", "blue", "pink", "green", "black"];

// let i = 0;4
// setInterval(function () {
//   document.body.style.backgroundColor = colors[i];
//   i++;
//   if (i >= colors.length) {
//     i = 0;
//   }
// }, 500);

// setInterval(function () {
//   let currentDate = new Date();
//   document.getElementById("clock").innerText = currentDate.toLocaleString();
// }, 1000);

// function calAdd()
// {
//     let  getNum1 = document.getElementById("num1").value;
//     let  getNum2 = document.getElementById("num2").value;
//     let getResult = document.getElementById("result");

//     if(getNum1 == '' || getNum1 == undefined || getNum2 == '' || getNum2 == undefined)
//     {
//         window.alert("Vui lòng dữ liệu!");
//     }
//     else if(isNaN(getNum1) || isNaN(getNum2))
//     {
//         window.alert("Vui lòng nhập kiểu số!");
//     }
//     else
//     {
//         getResult.innerHTML = parseInt(getNum1) + parseInt(getNum2);
//     }
// }

// function calSub()
// {
//     let  getNum1 = document.getElementById("num1").value;
//     let  getNum2 = document.getElementById("num2").value;
//     let getResult = document.getElementById("result");

//     if(getNum1 == '' || getNum1 == undefined || getNum2 == '' || getNum2 == undefined)
//     {
//         window.alert("Vui lòng dữ liệu!");
//     }
//     else if(isNaN(getNum1) || isNaN(getNum2))
//     {
//         window.alert("Vui lòng nhập kiểu số!");
//     }
//     else
//     {
//         getResult.innerHTML = parseInt(getNum1) - parseInt(getNum2);
//     }
// }

// function calMulti()
// {
//     let  getNum1 = document.getElementById("num1").value;
//     let  getNum2 = document.getElementById("num2").value;
//     let getResult = document.getElementById("result");

//     if(getNum1 == '' || getNum1 == undefined || getNum2 == '' || getNum2 == undefined)
//     {
//         window.alert("Vui lòng dữ liệu!");
//     }
//     else if(isNaN(getNum1) || isNaN(getNum2))
//     {
//         window.alert("Vui lòng nhập kiểu số!");
//     }
//     else
//     {
//         getResult.innerHTML = parseInt(getNum1) * parseInt(getNum2);
//     }
// }

// function checkNamNhuan()
// {

//     let  year = document.getElementById("namNhuan").value;
//     let isLeapYear = false;

//     let isDivisibleBy4 = year % 4 == 0;
//     if (isDivisibleBy4) {
//     let isDivisibleBy100 = year % 100 == 0;
//     if (isDivisibleBy100) {
//         let isDivisibleBy400 = year % 400 == 0;
//         if (isDivisibleBy400) {
//         isLeapYear = true;
//         }
//     } else {
//         isLeapYear = true;
//     }
//     }

//     if (isLeapYear) {
//      alert(year + " is a leap year");
//     } else {
//     alert(year + " is NOT a leap year");
//     }

// let  getNum1 = document.getElementById("num1").value;
// let  getNum2 = document.getElementById("num2").value;
// let getResult = document.getElementById("result");

// if(getNum1 == '' || getNum1 == undefined || getNum2 == '' || getNum2 == undefined)
// {
//     window.alert("Vui lòng dữ liệu!");
// }
// else if(isNaN(getNum1) || isNaN(getNum2))
// {
//     window.alert("Vui lòng nhập kiểu số!");
// }
// else if(parseInt(getNum2) == 0)
// {
//     window.alert("Số chia không thể = 0");
// }
// else
// {
//     getResult.innerHTML = parseInt(getNum1) / parseInt(getNum2);
// }
// }

// let getId = document.getElementById("getId");
// getId.style.color = "red";

// let i = +prompt("Nhap i: ");
// if (i > 0) {
//     alert(i + " la so duong");
//     console.log(i + " la so duong");
// }
// else if(i == 0)
// {
//     alert(` ${i}  la so 0`);
//     console.log(` ${i}  la so 0`);
// }
// else {
//     alert(i + " la so am");
//     console.log(i + " la so am");
// }

// let result =
//   i > 0 ? `${i}  la so duong` : i < 0 ? `${i}  la so am` : `${i}  la so 0`;
// alert(result);

// let n = +prompt("Nhap so ngay trong tuan: ");
// switch (n) {
//   case 2:
//     document.write("Ngay thu 2");
//     break;
//   case 3:
//     document.write("Ngay thu 3");
//     break;
//   case 4:
//     document.write("Ngay thu 4");
//     break;
//   case 5:
//     document.write("Ngay thu 5");
//     break;
//   case 6:
//     document.write("Ngay thu 6");
//     break;
//   case 7:
//     document.write("Ngay thu 7");
//     break;
//   case 8:
//     document.write("Ngay chu nhat");
//     break;
//   default:
//     document.write("Nhập sai ngày");
//     break;
// }

let year = +prompt("Nhập năm: ");
let can = year % 10;
let resultCan = "";
switch (can) {
  case 0:
    resultCan = "Canh";
    break;
  case 1:
    resultCan = "Tân";
    break;
  case 2:
    resultCan = "Nhâm";
    break;
  case 3:
    resultCan = "Quý";
    break;
  case 4:
    resultCan = "Giáp";
    break;
  case 5:
    resultCan = "Ất";
    break;
  case 6:
    resultCan = "Bính";
    break;
  case 7:
    resultCan = "Đinh";
    break;
  case 8:
    resultCan = "Mậu";
    break;
  default:
    resultCan = "Kỷ";
    break;
}

let chi = year % 12;
let resultChi = "";
switch (can) {
  case 0:
    resultChi = "Thân";
    break;
  case 1:
    resultChi = "Dậu";
    break;
  case 2:
    resultChi = "Tuất";
    break;
  case 3:
    resultChi = "Hợi";
    break;
  case 4:
    resultChi = "Tý";
    break;
  case 5:
    resultChi = "Sửu";
    break;
  case 6:
    resultChi = "Dần";
    break;
  case 7:
    resultChi = "Mẹo";
    break;
  case 8:
    resultChi = "Thìn";
    break;
  case 9:
    resultChi = "Tỵ";
    break;
  case 10:
    resultChi = "Ngọ";
    break;
  default:
    resultChi = "Mùi";
    break;
}

alert(`Năm ${year} là ${resultCan} ${resultChi}`)