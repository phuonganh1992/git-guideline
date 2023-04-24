//confirm("ola ola");
//document.write("Debug trên trình duyệt");

//let a , b , c;

//a = 5;
//b = 10;
//c = a + b

//for (let i = 0 ; i < 4 ; i++) {
 //   document.write("i = ", i, "</br>")
//}

//let name = prompt("Enter your name"); // nhập string
//console.log("My name is ", name);

//let ngay = +prompt("Hãy nhập ngày");  //nhập số
//let thang = +prompt("Hãy nhập tháng");
//let nam = +prompt("Hãy nhập năm")
//let c = a + b;
//console.log("c = ", c); // lưu ở console
///document.write( ngay , "-" , thang , "-" , nam);  //xuất giá trị ra màn hình
//console.log( ngay , "-" , thang , "-" , nam);

// a**b = a mũ b
//%; chia lấy số dư
//++a: a = a + 1
//--a: a = a - 1
//a++: 


//let a = document.getElementById("123")
//console.log(a)

element.innerHTML = "<strong> xin chào mọi người</strong>";

let elementInput = document.getElementById("pass");

document.getElementById("btn").onclick = function () {
  if (elementInput.getAttribute("type") == "password")
    elementInput.setAttribute("type", "text");
  else if (elementInput.getAttribute("type") == "text")
    elementInput.setAttribute("type", "password");
};