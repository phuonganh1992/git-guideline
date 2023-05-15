function tinhtoan() {
    let toan = parseFloat(document.getElementById("toan").value);
    let van = parseFloat(document.getElementById("van").value);
    let anh = parseFloat(document.getElementById("anh").value);
    let kv = document.getElementById("kv").value;
    let diemcong = 0;
  
    switch (kv) {
      case "kv1":
        diemcong = 0.75;
        break;
      case "kv2-nt":
        diemcong = 0.5;
        break;
      case "kv2":
        diemcong = 0.25;
        break;
      case "kv3":
        diemcong = 0;
        break;
    }
  
    let tong = toan + van + anh + diemcong;
    document.getElementById("tong").innerText=("Tổng điểm ĐH khối D của bạn là: " + tong);
  }

  
