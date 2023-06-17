let students = [
    { maSV: "SV001", tenSV: "Nguyễn Học Ánh", namSinh: 2000, gioiTinh: "Nữ", khoa: "Công nghệ thông tin", queQuan: "Hà Nội", email: "1@example.com" },
    { maSV: "SV002", tenSV: "Nguyễn Hoài Thuận", namSinh: 2001, gioiTinh: "Nam", khoa: "Tài chính - Kế Toán", queQuan: "Tp - Hồ Chí Minh", email: "2@example.com" },
    { maSV: "SV003", tenSV: "Phạm Hoàng Anh", namSinh: 2002, gioiTinh: "Nữ", khoa: "Công nghệ thông tin", queQuan: "Hà Nội", email: "3@example.com" },
    { maSV: "SV004", tenSV: "Phạm Anh Thư", namSinh: 2003, gioiTinh: "Nữ", khoa: "Tài chính - Kế Toán", queQuan: "Tp - Hồ Chí Minh", email: "4@example.com" },
    { maSV: "SV005", tenSV: "Phạm Hoàng Anh Thư", namSinh: 2004, gioiTinh: "Nữ", khoa: "Công nghệ thông tin", queQuan: "Hà Nội", email: "5@example.com" },
    { maSV: "SV006", tenSV: "Kim Tố Ngân", namSinh: 2005, gioiTinh: "Nữ", khoa: "Tài chính - Kế Toán", queQuan: "Tp - Hồ Chí Minh", email: "6@example.com" },
    { maSV: "SV007", tenSV: "Nguyễn Tuệ Ánh", namSinh: 2006, gioiTinh: "Nữ", khoa: "Công nghệ thông tin", queQuan: "Hà Nội", email: "7@example.com" },
    { maSV: "SV008", tenSV: "Nguyễn Hoàng Tuệ Ánh", namSinh: 2007, gioiTinh: "Nữ", khoa: "Tài chính - Kế Toán", queQuan: "Tp - Hồ Chí Minh", email: "8@example.com" },
]

tbody = document.getElementById("tbody");
function hienthi() {
    let result = "";
    for (let i = 0; i < students.length; i++) {
        result += '<tr><td>' + (i + 1) + '</td><td>' + students[i].maSV + '</td><td>' + students[i].tenSV + '</td><td>' + students[i].namSinh + '</td><td>' + students[i].gioiTinh + '</td><td>' + students[i].khoa + '</td><td>' + students[i].queQuan + '</td><td>' + students[i].email + '</td><td><button class="edit-button" onclick="showFormUpdate(' + i + ')">Sửa</button><button class="delete-button" onclick="xoa(' + i + ')">Xóa</button></td></tr>'
    }
    tbody.innerHTML = result;
}

function xoa(index) {
    students.splice(index, 1);
    hienthi();
}
let doiTuong;
let selectedIndex = null;
function showFormUpdate(index) {
    doiTuong = students[index];
    selectedIndex = students[index];

    document.getElementById("maso").value = doiTuong.maSV;
    document.getElementById("ten").value = doiTuong.tenSV;
    document.getElementById("namsinh").value = doiTuong.namSinh;

    document.getElementById("gioitinh").value = doiTuong.gioiTinh;

    document.getElementById("khoa").value = doiTuong.khoa;
    document.getElementById("quequan").value = doiTuong.queQuan;
    document.getElementById("email").value = doiTuong.email;

    // console.log(doiTuong);
}

function actionSave() {
    students[selectedIndex];

    doiTuong.maSV = document.getElementById("maso").value;
    doiTuong.tenSV = document.getElementById("ten").value;
    doiTuong.namSinh = document.getElementById("namsinh").value;
    doiTuong.gioiTinh = document.getElementById("gioitinh").value
    doiTuong.khoa = document.getElementById("khoa").value;
    doiTuong.queQuan = document.getElementById("quequan").value;
    doiTuong.email = document.getElementById("email").value;

    hienthi()

}

hienthi()
// 