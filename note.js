

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

// function tong() {
//     let a = document.getElementById("numberA").value;
//     let b = document.getElementById("numberB").value;
//     c = parseInt(a) + parseInt(b)
//     document.getElementById("result") .innerHTML = a + "+" + b + " = " + c;
// }

// function hieu() {
//     let a = document.getElementById("numberA").value;
//     let b = document.getElementById("numberB").value;
//     c = parseInt(a) - parseInt(b)
//     document.getElementById("result") .innerHTML = a + "-" + b + " = " + c;
// }

// function tich() {
//     let a = document.getElementById("numberA").value;
//     let b = document.getElementById("numberB").value;
//     c = parseInt(a) * parseInt(b)
//     document.getElementById("result") .innerHTML = a + "*" + b + " = " + c;
// }

// function thuong() {
//     let a = document.getElementById("numberA").value;
//     let b = document.getElementById("numberB").value;
//     c = parseInt(a) / parseInt(b)
//     document.getElementById("result") .innerHTML = a + "/" + b + " = " + c;
// }





// hạ long 5/5

// let i = prompt("nhap i");

// if (i > 0) {
//     console.log(`${i} la so duong`);

// } else if (i == 0) {
//     console.log(`${i} la so zero`);
// }

// else {
//     console.log(`${i} la so am`);
// }



// ----------------
// let i = +prompt("nhap i");

// let kq=i>0?(`${i} la so duong`): (i==0)?(`${i} la so zero`):(`${i} la so am`);
// document.write(kq);

// ------------------------------


// let thuan = +prompt("nhap vao")

// switch(thuan){
//     case 1:
//         document.write("thuan10");
//         break;
//     case 2:
//         document.write("thuan20");
//          break;
//     case 3:
//          document.write("thuan30");
//          break;
//     default:
//         document.write("nhap so sai");
//         break;
// }



// let thuan = prompt("nhap vao")

// switch(thuan){
//     case "thuan1":
//         document.write("thuan10");
//         break;
//     case "thuan2":
//         document.write("thuan20");
//          break;
//     case "thuan3":
//          document.write("thuan30");
//          break;
//     default:
//         document.write("nhap sai");
//         break;
// }
// ----------------------------------------------

// let month = +prompt("nhập tháng")

// switch(month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         document.write("có 31 ngày");
//         break;
//     case 2:
//         document.write("có 28 hoặc 29 ngày");
//         break;
//     case 4:
//     case 6:
//         document.write("có 30 ngày");
//         break;
//     default:
//         document.write("nhap sai");
//         break;
// }

// alert("làm bài tính năm nhuận và bài tập trên learn.")





// hạ long 6/5
// let yourName = prompt("Hãy nhập tên của bạn");
// alert("Xin chào " + yourName);
// ----------------------------------------------




// bài toán tính năm nhuận
// function tinhtoan() {
//         let nhapthang = document.getElementById("nhapthang");
//         let nhapnam = document.getElementById("nhapnam");
//         let ketqua = document.getElementById("ketqua");

//         let thang = Number(nhapthang.value);
//         let nam = Number(nhapnam.value);

//         // Kiểm tra năm nhuận
//         let namnhuan = false;
//         if (nam % 4 === 0) {
//           if (nam % 100 === 0) {
//             if (nam % 400 === 0) {
//                 namnhuan = true;
//             }
//           } else {
//                 namnhuan = true;
//           }
//         }

//         // Tính số ngày trong tháng
//         let tongsongay;
//         switch (thang) {
//           case 2:
//             if (namnhuan) {
//                 tongsongay = 29;
//             } else {
//                 tongsongay = 28;
//             }
//             break;
//           case 4:
//           case 6:
//           case 9:
//           case 11:
//                 tongsongay = 30;
//             break;
//           default:
//                 tongsongay = 31;
//             break;
//         }

//         ketqua.textContent = `Tháng ${thang} năm ${nam} có ${tongsongay} ngày. Năm ${nam} ${namnhuan ? "là" : "không phải"} năm nhuận.`;
//       }


// hạ long 7/5

// tra cứu giá hoa quả


// function xemgia() {
//         let nhapgia = document.getElementById("nhapgia").value;

//         let ketqua = document.getElementById("ketqua");

//         switch (nhapgia) {
//                 case "măng cụt":
//                         giatien = (" 50.000 VNĐ ");
//                         break;
//                 case "ổi":
//                         giatien = (" 20.000 VNĐ ");
//                         break;
//                 case "dưa hấu":
//                         giatien = (" 20.000 VNĐ ");
//                         break;
//                 case "táo":
//                         giatien = (" 30.000 VNĐ ");
//                         break;
//                 case "xoài":
//                         giatien = (" 30.000 VNĐ ");
//                         break;
//                 case "cam":
//                         giatien = (" 40.000 VNĐ ");
//                         break;
//                 case "chôm chôm":
//                         giatien = (" 40.000 VNĐ ");
//                         break;
//         }
//         ketqua.textContent = ` Giá là:${giatien}`;
// }
// <!-- tính tổng điểm thi khối D -->



function tinhDiem() {
        const toan = parseFloat(document.getElementById("toan").value);
        const van = parseFloat(document.getElementById("van").value);
        const anh = parseFloat(document.getElementById("anh").value);
        const khuvuc = parseFloat(document.getElementById("khuvuc").value);
        let tongDiem = toan + van + anh;

        switch (khuvuc) {
                case 0.75:
                        tongDiem += 2.5;
                        break;
                case 0.5:
                        tongDiem += 1.5;
                        break;
                case 0.25:
                        tongDiem += 1;
                        break;
        }

        document.getElementById("result").textContent = `Tổng điểm: ${tongDiem}`;
}





