// a**b = a mũ b
//%; chia lấy số dư
//++a: a = a + 1
//--a: a = a - 1
//a++: return giá trị copy cũ của a
//x += y" x = x + y
//x %= y: x = x % y
//&&: và
//||: hoặc
// ! : Phủ định
//let result a % 2 == 0 ? "Là số chẵn" : "Là só lẻ";
/**
 * data type
 * number
 * bigint
 * string
 * boolean
 * null
 * undefined
 * symbol
 * object
 */
let a = 9;

let result  = a % 3 == 0 ? "là số chia hết cho 3" 
: a % 2 == 0 ? "Là số chia hết cho 2" 
: "là số không chia hết cho 2 và 3";
console.log(result);