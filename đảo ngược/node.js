function dao(){
    let num=document.getElementById("number").value;
    let mun=0;
    while (num>0){
        let i=num%10;
        mun=mun*10+i;
        num=Math.floor(num/10);
    }
    document.getElementById("result").innerText= "Số đảo ngược là:" + mun;

}