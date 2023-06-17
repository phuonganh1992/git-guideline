function checkPrice() {
    var fruitName = document.getElementById('fruit-name').value;
    var price;
  
    switch (fruitName) {
      case 'Ổi':
      case 'Dưa Hấu':
        price = 20000;
        break;
      case 'Táo':
      case 'Xoài':
        price = 30000;
        break;
      case 'Cam':
      case 'Chôm Chôm':
        price = 40000;
        break;
      case 'Măng Cụt':
        price = 50000;
        break;
      default:
        price = 'Không tìm thấy giá.';
    }
  
    document.getElementById('result').innerHTML = 'Giá tiền: ' + price + ' VNĐ/kg';
  }