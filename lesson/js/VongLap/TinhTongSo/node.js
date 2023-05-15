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

// let month = +prompt("Nhập số tháng trong năm: ");
// let year = +prompt("Nhập năm: ");
// var checkNamNhuan = false;
// checkNamNhuan = (year%4 == 0 && year%100 == 0 && year%4 == 0) ? true : false;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     document.write(`Tháng ${month} có 31 ngày`);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     document.write(`Tháng ${month} có 31 ngày`);
//     break;
//   case 2:
//     if(checkNamNhuan)
//     {
//         document.write(`Tháng ${month} có 29 ngày`);
//     }
//     else
//     {
//         document.write(`Tháng ${month} có 28 ngày`);
//     }
//     break;
//   default:
//     document.write("Nhập sai tháng");
//     break;
// }
// for (let j = 1; j <= 10; j++) {
//     for (let i = 1; i <= 10; i++) {
//       let result = j * i;
//       console.log(`${j} X ${i} = ${result}`);
//     }
//     console.log(`====================`);
// }

// let i = 1;
// while (i <= 10) {
//   let result = 5 * i;
//   console.log(`5 x ${i} = ${result}`);
//   i++;
// }

// let sum = 0;
// let number;
// let i = 1;
// do {
//  number = +prompt("Nhap so tu ban phim: ");
//   sum = sum  + number;
//   console.log(`number nhap lan thu ${i} :  ${number}`)
//   i++;
// } while (number != 0);

// console.log(`sum la : ${sum}`)

// function play()
// {
//   document.getElementById("play").innerHTML = "Chơi lại";
//   let numberMax = +prompt("Nhập số lớn nhất: ");
//   let numberRandom = Math.floor(Math.random() * numberMax);

//   for (let i = 0; i < 3; i++) {

//     let numberGuess = +prompt("Người dùng đoán: ");
//     if(numberRandom == numberGuess)
//     {
//       alert(`Chúc mừng số ${numberGuess} đã đúng, bạn là người may mắn!!!`);
//       break;
//     }
//     else
//     {
//       alert("Chúc bạn may mắn lần sau");
//     }
//   }

// }
// function ok() {
//   let result = "";
//   let input = document.getElementById("sodaonguoc").value;
//   let i = 0;
//   let kq = 0;
//   let length = input.length;

//   while (i < length) {
//     kq = input % 10;
//     result = result + kq;
//     input = parseInt(input / 10);
//     i++;
//   }
//   alert(`Kết quả đảo ngược là ${result}`);
// }
// function cancel() {
//   document.getElementById("sodaonguoc").value = "";
// }

// var str = '';
// for (let j = 1; j <= 9; j++) {
//   str += '<tr >';
//     for (let i = 2; i <= 9; i++) {
//       let result = i * j;
//       str += `<td style="border: 1px solid;"> ${i} X ${j} = ${result} </td>`
//     }
//   str += '</tr>';
// }
// document.getElementById("tableJS").innerHTML = str;

let a = +prompt("Nhap so a: ");
let b = +prompt("Nhap so b: ");
let sum = 0;
do {
  sum = sum + a;
  a++;
} while (a <= b);
document.getElementById("result").innerHTML = sum;
