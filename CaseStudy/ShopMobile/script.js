//window.location.href="file.html" chuyển file html
localStorage.clear();
function validateForm()
{
    let name = document.getElementById("name").value;
    let model = document.getElementById("model").value;
    let size = document.getElementById("size").value;
    let price = document.getElementById("price").value;

    if(name == "")
    {
        alert("Name is required.");
        return false;
    }
    if(model == "")
    {
        alert("Model is required.");
        return false;
    }
    if(size == "")
    {
        alert("Size is required.");
        return false;
    }
    if(price == "")
    {
        alert("Size is required.");
        return false;
    }
    else if(price < 0)
    {
        alert("Price must be less than 0.");
        return false;
    }
}
function showData(){
    
    let listMobile;
    if(localStorage.getItem("listMobile") == null)
    {
        listMobile = [];
    }
    else{
        listMobile = JSON.parse(localStorage.getItem("listMobile"))
    }

    let drawTable = "";
    // if(listMobile.length == 0)
    // {
    //     drawTable += "<tr>";
    //     drawTable += "<th>Name</th>";
    //     drawTable += "<th>Model</th>";
    //     drawTable += "<th>Size</th>";
    //     drawTable += "<th>Price</th>";
    //     drawTable += "<th>Action</th>";
    //     drawTable += "</tr>";
    // }

    listMobile.forEach(function (element, index)
    {
        drawTable += "<tr>";
        drawTable += "<td>" + element.name  + "</td>";
        drawTable += "<td>" + element.model  + "</td>";
        drawTable += "<td>" + element.size  + "</td>";
        drawTable += "<td>" + element.price  + "</td>";
        drawTable += '<td><button onclick = "deleteData('+index+')" class="btn btn-danger">Delete</button> <button onclick = "updateData('+index+')" class="btn btn-warning m-2">Edit</button> </td>';
        drawTable += "</tr>";
    });
    if(drawTable != "")
    {
        document.getElementById("crudTable").innerHTML = drawTable;
    }
}

document.onload = showData();

function AddData()
{
    let name = document.getElementById("name").value;
    let model = document.getElementById("model").value;
    let size = document.getElementById("size").value;
    let price = document.getElementById("price").value;
    var listMobile;
    if(localStorage.getItem("listMobile") == null)
    {
        listMobile = [];
    }
    else{
        listMobile = JSON.parse(localStorage.getItem("listMobile"));
    }
    listMobile.push({
        name : name,
        model : model,
        size : size,
        price : price,
    });
    localStorage.setItem("listMobile", JSON.stringify(listMobile));
    showData();
    document.getElementById("name").value = "";
    document.getElementById("model").value = "";
    document.getElementById("size").value = "";
    document.getElementById("price").value = "";
}