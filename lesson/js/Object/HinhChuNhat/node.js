// const arr1 = ['a', 'b','c']

// arr1[1] = 'yyyy';

// arr1[3] = 'thu4';

// arr1[arr1.length] = 'last';

// console.log(arr1);

// console.log('=============================');
// for (let i = 0; i < arr1.length; i++) {

//   console.log("Phần tử thứ " , i , arr1[i]);
// }
// console.log('=============================');
// for (let j = arr1.length - 1; j >= 0; j--) {
//   console.log("Phần tử đảo ngược thứ " , j , arr1[j]);
// }

// let arr1 = [['A', 'B','C','D'], ['X', 'Z','G','A']];
// let kq = '';
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//      kq = kq + "," + arr1[i][j];
//     }
// }
// console.log(kq);

// let value = 10;
// let numbers = [-3, 5, 1, 3, 2, 10];

// let index = numbers.indexOf(value);
// console.log(`In ra index:  ${index}`);

// let numbers = [-3, 5, 1, 3, 2, 10];
// let value = 11;
// var indexFor = -1;
// for (let i = 0; i < numbers.length; i++) {
//   if(value == numbers[i])
//   {
//     indexFor = i;
//   }
// }
// console.log(`In ra indexFor:  ${indexFor}`);

//Sắp xếp mảng tăng dần
// let numbers = [5, -3, 1, 3, 2, 10];
// let valueTemp = 0;
// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i+1; j < numbers.length; j++) {
//     if (numbers[i] > numbers[j]) {
//       valueTemp = numbers[j];
//       numbers[j] = numbers[i];
//       numbers[i] = valueTemp;
//     }
//   }
// }
// numbers.forEach(m=> console.log(`Kết quả được sắp xếp tăng dần ${m}`));

// console.log(`------------------------------------------------`)
// //Sắp xếp mảng giảm dần
// let numbers2 = [5, -3, 1, 3, 2, 10];
// let valueTemp2 = 0;
// for (let i = 0; i < numbers2.length; i++) {
//   for (let j = i+1; j < numbers2.length; j++) {
//     if (numbers2[i] < numbers2[j]) {
//       valueTemp2 = numbers2[j];
//       numbers2[j] = numbers2[i];
//       numbers2[i] = valueTemp2;
//     }
//   }
// }
// numbers2.forEach(m=> console.log(`Kết quả được sắp xếp giảm dần ${m}`));

// let numbers = [-3, 5, 1, 3, 9, 2, 10, 11];
// let valueTemp2 = 0;

// for (let i = 0; i < numbers.length/2; i++) {
//   valueTemp2 = numbers[i];
//   numbers[i] =  numbers[numbers.length - 1 - i];
//   numbers[numbers.length - 1 - i] = valueTemp2;
// }
// numbers.forEach(m=> console.log(`Kết quả được sắp xếp đảo ngược ${m}`));

// let b = document.getElementById("carogame");

// let board = [];
// let data = "";
// for (let i = 0; i < 5; i++) {
//     board[i] = new Array(0, 0, 0, 0, 0);
// }

// for (let i = 0; i < 5; i++) {
//     data += "<br/>";
//     for (let j = 0; j < 5; j++) {
//         data += board[i][j] + "&nbsp;&nbsp;";
//     }
// }

// data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
// b.innerHTML = data;

// function changeValue() {
//   let positionX = prompt("X: ");
//   let positionY = prompt("Y: ");
//   data = "";
//   board[positionX][positionY] = "x";
//   for (let i = 0; i < 5; i++) {
//       data += "<br/>";
//       for (let j = 0; j < 5; j++) {
//           data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
//       }
//   }
//   data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
//   b.innerHTML = "<hr/>" + data;
// }

// function calConvert()
// {
//     let inputValue = document.getElementById("Input").value;
//     let convertValue = document.getElementById("Convert").value;
//     if(convertValue == 1)
//     {
//         getResult.innerHTML =  eval(3.279  * inputValue);
//     }
//     else
//     {
//         getResult.innerHTML =    eval(3.279  * inputValue);
//     }
// }

// function calCheck()
// {
//     let inputValue = document.getElementById("Input").value;
//     if(isPalindrome(inputValue))
//     {
//         getResult.innerHTML =  `${inputValue} Là chuỗi Palindrome`;
//     }
//     else
//     {
//         getResult.innerHTML =  `${inputValue}  Không là chuỗi Palindrome`;
//     }
// }
// function isPalindrome(s)
// {
//     if(s == "" || s.length == 1)
//     {
//         return true;
//     }

//     let first = s.charAt(0);
//     let last = s.charAt(s.length - 1)

//     if(first != last)
//     {
//         return false;
//     }
//     else
//     {
//         s = s.substring(1, s.length - 1)
//         return isPalindrome(s);
//     }

// }

// let myCar1 = new Object();
// myCar1.name = 'Honda';
// myCar1.money = '2000';
// myCar1.year  = '2023';
// console.log(myCar1);

// let myCar2 = {
//     name : "Honda",
//     money : "3000",
//     year : "2023"
// }
// console.log(myCar2);
// myCar2.year = '2030';

// console.log(myCar2);

// function changeValue(car)
// {
//     car.name = 'Ford';
// }
// changeValue(myCar2);
// console.log(myCar2);

// class Student{
//     constructor(_name,_age)
//     {
//         this.name = _name;
//         this.age  = _age;
//     }
//     goToSchool()
//     {
//         console.log(`${this.name} go to school`);
//     }
// }
// let student1 = new Student('The', '18');
// student1.goToSchool();

class Rectangle {
  constructor(_x, _y, _width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.x = _x;
    this.y = _y;
    this.color = _color;
  }
  tinhChuVi() {
    let chuVi = (this.width + this.height) * 2;
    console.log(`Chu vi hình chữ nhật ${chuVi} m2`);
    getResultCV.innerHTML = chuVi;
  }

  tinhDienTich() {
    let dienTich = this.width * this.height;
    console.log(`Chu vi hình chữ nhật ${dienTich}`);
    getResultDT.innerHTML = dienTich;
  }
  veCanvas() {
    var canvas = document.getElementById("DemoCanvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      // ctx.clearRect()
      ctx.fillStyle = this.color; // color of fill
      ctx.fillRect(this.x, this.y, this.width, this.height); // create rectangle
    }
  }

  moveRight() {
    this.x += 10;
  }
  moveDown() {
    this.x -= 20;
  }
}
// let widthRectangle = + prompt("Nhập chiều dài: ");
// let heightRectangle = + prompt("Nhập chiều rộng: ");
let x = Math.random() * 80;
let y = Math.random() * 40;
let stringColor = "";
function color() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  stringColor = "rgb" + "(" + r + "," + g + "," + b + ")";
}
color();
let calRectangle = new Rectangle(x, y, 100, 200, stringColor);
calRectangle.tinhChuVi();
calRectangle.tinhDienTich();
calRectangle.veCanvas();
// function move(){
//     calRectangle.moveRight();
// }
var canvas = document.getElementById("DemoCanvas");
var ctx = canvas.getContext("2d");
setInterval(function () {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  if(calRectangle.x < canvas.width - calRectangle.width - 10)
  {
    calRectangle.moveRight();
  }
  else if(calRectangle.x >= canvas.width - calRectangle.width - 10)
  {
    calRectangle.moveDown();
    console.log(`y ${calRectangle.y}`);
  }
  
  calRectangle.veCanvas();
  console.log(`x ${calRectangle.x}`);
}, 100);
