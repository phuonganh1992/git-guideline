

/*let day = +prompt("nhapnamvaoday");
let month = +prompt("tháng");
let year = +prompt("ngày");

console.log ("date", day + "/" + month + "/" + year);
document.write ("date", day + "/" + month + "/" + year);*/



// let money = +prompt("số tiền bạn vay");
// let n = +prompt("số năm bạn vay");
// let rate = +prompt("phần trăm lãi suất / 100")

// pay = money * rate * n ;

// console.log ("số tiền lãi phải thanh toán:", pay);
// document.write ("số tiền lãi phải thanh toán:", pay);


// let namedata = "Joe"
// let addressdata = "Los Angeles"
// let timedata = "ngày 10 tháng 10 năm 1951"

// let result = `${namedata}  thương nhớ, <br>
// <br>
// Em không biết phải nói sao để anh hiểu rằng, em nhớ anh thật nhiều. Em yêu anh đến khi trái tim này tan thành nghìn mảnh. Tất cả những gì em yêu thương, em khát khao và cần đến, chính là anh, mãi mãi về sau. Em chỉ muốn ở bên anh, và anh yêu hỡi, em sẽ trở thành người phụ nữ như anh mong muốn.<br>
// <br>
// Có phải em thật tệ hại, khi cứ nghĩ đến anh thật nhiều, thật lâu và nhất là mỗi khi đêm xuống? Em hứa sẽ sẽ cố gắng triệu triệu lần hơn thế. Nhưng hơn tất cả, em chỉ mong một ngày nào đó, anh sẽ tự hào về em, như tự hào về vợ của anh, và mẹ của các con anh (ít nhất là 2 nhé, em vừa mới quyết định đấy!). Em nhớ thật nhiều cảm giác mỗi đêm anh ôm em và ru em ngủ trong vòng tay. Đêm nay, em chỉ muốn được gần bên anh… và anh biết không, trái tim em đang đau đớn đến nhường nào.<br>
// <br>
// ${addressdata}, ${timedata}`;

// document.write(result);


// let element = document.getElementById("test");

// element.innerHTML = "nguyenhocanh";

// console.log(element);

// let element = document.getElementById("thuan");
// console.log(element);

/*      <input type="number" id="numberInput">
        <button onclick="checkNumber()">Kiểm tra số</button>
        <p id="result"></p> */



// function kiemtra() {
//     let thuan = document.getElementById("numberInput");
//     let anh = document.getElementById("result");
//     let number1 = Number(thuan.value);
  
//     if (isNaN(number1)) {
//       anh.innerText = "Vui lòng nhập một số hợp lệ.";
//     } else if (number1 % 2 === 0) {
//       anh.innerText = number1 + " là số chẵn.";
//     } else {
//       anh.innerText = number1 + " là số lẻ.";
//     }
//   }



        // Hạ long 28/4
              // let thuan = "heellloooo";
              // document.getElementById("test"). innerHTML = thuan;


        //       function myFunction() {
        //         document.getElementById("demo").innerHTML = "Paragraph changed.";
        //      }

        function tong() {
            let a = document.getElementById("numberA").value;
            let b = document.getElementById("numberB").value;
            c = parseInt(a) + parseInt(b)
            document.getElementById("result") .innerHTML = a + "+" + b + " = " + c;
        }

        function hieu() {
            let a = document.getElementById("numberA").value;
            let b = document.getElementById("numberB").value;
            c = parseInt(a) - parseInt(b)
            document.getElementById("result") .innerHTML = a + "-" + b + " = " + c;
        }

        function tich() {
            let a = document.getElementById("numberA").value;
            let b = document.getElementById("numberB").value;
            c = parseInt(a) * parseInt(b)
            document.getElementById("result") .innerHTML = a + "*" + b + " = " + c;
        }

        function thuong() {
            let a = document.getElementById("numberA").value;
            let b = document.getElementById("numberB").value;
            c = parseInt(a) / parseInt(b)
            document.getElementById("result") .innerHTML = a + "/" + b + " = " + c;
        }