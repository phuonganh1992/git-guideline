function checkrandom(){
    let checkrd = document.getElementById("check").value;
    if(checkrd == ' ' || checkrd == undefined){
        window.alert("Trống không");
    }
    else if(isNaN(checkrd)){
        window.alert("đây không phải số");
    }
    else if(checkrd % 2 == 0){
        window.alert(checkrd + "là số chẵn");
    }
    if(checkrd % 2 != 0){
        window.alert(checkrd +"là số lẻ");
    }

}