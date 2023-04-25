
function calAdd()
{
    let  getNum1 = document.getElementById("num1").value;
    let  getNum2 = document.getElementById("num2").value;
    let getResult = document.getElementById("result");

    if(getNum1 == '' || getNum1 == undefined || getNum2 == '' || getNum2 == undefined)
    {
        window.alert("Vui lòng dữ liệu!");
    }
    else if(isNaN(getNum1) || isNaN(getNum2))
    {
        window.alert("Vui lòng nhập kiểu số!");
    }
    else
    {
        getResult.innerHTML = parseInt(getNum1) + parseInt(getNum2);
    }
}

function calSub()
{
    let  getNum1 = document.getElementById("num1").value;
    let  getNum2 = document.getElementById("num2").value;
    let getResult = document.getElementById("result");

    if(getNum1 == '' || getNum1 == undefined || getNum2 == '' || getNum2 == undefined)
    {
        window.alert("Vui lòng dữ liệu!");
    }
    else if(isNaN(getNum1) || isNaN(getNum2))
    {
        window.alert("Vui lòng nhập kiểu số!");
    }
    else
    {
        getResult.innerHTML = parseInt(getNum1) - parseInt(getNum2);
    }
}

function calMulti()
{
    let  getNum1 = document.getElementById("num1").value;
    let  getNum2 = document.getElementById("num2").value;
    let getResult = document.getElementById("result");

    if(getNum1 == '' || getNum1 == undefined || getNum2 == '' || getNum2 == undefined)
    {
        window.alert("Vui lòng dữ liệu!");
    }
    else if(isNaN(getNum1) || isNaN(getNum2))
    {
        window.alert("Vui lòng nhập kiểu số!");
    }
    else
    {
        getResult.innerHTML = parseInt(getNum1) * parseInt(getNum2);
    }
}

function calDiv()
{
    let  getNum1 = document.getElementById("num1").value;
    let  getNum2 = document.getElementById("num2").value;
    let getResult = document.getElementById("result");

    if(getNum1 == '' || getNum1 == undefined || getNum2 == '' || getNum2 == undefined)
    {
        window.alert("Vui lòng dữ liệu!");
    }
    else if(isNaN(getNum1) || isNaN(getNum2))
    {
        window.alert("Vui lòng nhập kiểu số!");
    }
    else if(parseInt(getNum2) == 0)
    {
        window.alert("Số chia không thể = 0");
    }
    else
    {
        getResult.innerHTML = parseInt(getNum1) / parseInt(getNum2);
    }
}