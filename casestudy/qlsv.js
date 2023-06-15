let student = [
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
let result = "";
for (let i = 0; i < student.length; i++) {
    result += '<tr><td>' + (i + 1) + '</td><td>' + student[i].maSV + '</td><td>' + student[i].tenSV + '</td><td>' + student[i].namSinh + '</td><td>' + student[i].gioiTinh + '</td><td>' + student[i].khoa + '</td><td>' + student[i].queQuan + '</td><td>' + student[i].email + '</td><td><button class="edit-button">Sửa</button><button class="delete-button">Xóa</button></td></tr>'
}
tbody.innerHTML = result;

