let text = ['H','Í',' ','A','N','H',' ','E','M','!'];
function typeTextarea() {
    let a = document.getElementById("txt").value;
    let n = "";  
    for (let i = 0; i < a.length; i++) {
        n += text[i % text.length];
    }  
    document.getElementById("txt").value = n;
}