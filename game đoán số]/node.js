function game(){
    let max=parseInt(prompt("Nhập số lớn nhất!"));
    let min=parseInt(prompt("Nhập số bé nhất!"));
    let i=0;
    let random=Math.floor(Math.random()*(max-min+1))+min;
    while (i<3)
    {
        let num=parseInt(prompt("Nhập số cần so sánh:"));
        if (random==num)
        {
            alert("Chúc mừng bạn");
            return;
        } else {alert("Chia bùn nhé!");}
        i++;
    }
    alert("Bạn đã hết số lần đoán");

}