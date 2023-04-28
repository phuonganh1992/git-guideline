function checkrandom(){
    let checkrd = document.getElementById("check").value;
    if(checkrd == ' ' || checkrd == undefined){
        window.alert("Trống không");
    }
    else if(isNaN(checkrd)){
        alert("đây không phải số");
    }
    else if(checkrd % 2 == 0){
        alert(checkrd + "là số chẵn");
    }
    if(checkrd % 2 != 0){
        alert(checkrd +"là số lẻ");
    }

}
