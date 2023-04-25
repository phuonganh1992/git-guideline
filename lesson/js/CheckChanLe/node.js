
function checkEvenNumber()
{
    var  getEvenNumber = document.getElementById("evenId").value;
    if(getEvenNumber == '' || getEvenNumber == undefined)
    {
        window.alert("Vui lòng dữ liệu!");
    }
    else if(isNaN(getEvenNumber))
    {
        window.alert("Vui lòng nhập kiểu số!");
    }
    else if(getEvenNumber % 2 == 0)
    {
        window.alert(getEvenNumber + " là số chẵn");
    }
    else
    {
        window.alert(getEvenNumber + " là số lẻ");
    }
}