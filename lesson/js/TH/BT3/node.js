let goc = prompt("Nhập tiền gốc: ");
let lai = prompt("Nhập số phần trăm lãi: ");
let nam = prompt("Nhập số năm vay: ");
let soTienLai1Nam = goc*lai/100;
let total = parseFloat(goc) + parseFloat(nam*soTienLai1Nam);
document.write(`Kết quả tổng tiền ${total} <br>`);
