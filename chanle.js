function checkresult()
{   
    let  getNumber = document.getElementById("value_text").value;
    if(getNumber == '')
    {
        alert("Nhập dữ liệu");
    }
    else if(isNaN(getNumber))
    {
        alert("Hãy nhập số");
    }
    else if(getNumber % 2 == 0)
    {
        alert(getNumber + " là số chẵn");
    }
    else
    {
        alert(getNumber + " là số lẻ");
    }
}