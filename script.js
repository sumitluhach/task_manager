function validateForm() {

    let Assigned = document.getElementById("Assigned").value;
    let Discription = document.getElementById("Discription").value;
    let Date = document.getElementById("Date").value;
    let Status = document.getElementById("Status").value;

    if (Assigned == "") {
        alert("Field is Empty");
        return false;
    }
    if (Discription == "") {
        alert("Field is Empty");
        return false;
    }
    if (Status == "") {
        alert("Field is Empty");
        return false;
    }

    return true;
}

function showData() {
    var list;
    if (localStorage.getItem("list") == null) {
        list = [];
    }
    else {
        list = JSON.parse(localStorage.getItem("list"));
    }
    var html = ""

    list.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.Assigned + "</td>";
        html += "<td>" + element.Discription + "</td>";
        html += "<td>" + element.Date + "</td>";
        html += "<td>" + element.Status + "</td>";
        html +=
        //    <tr><td>data</td><td>data</td>
        
        '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>'
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData() {
    if (validateForm() == true) {

        var Assigned = document.getElementById("Assigned").value;
        var Discription = document.getElementById("Discription").value;
        var Date = document.getElementById("Date").value;
        var Status = document.getElementById("Status").value;

        var list;
        if (localStorage.getItem("list") == null) {
            list = [];
        }
        else {
            list = JSON.parse(localStorage.getItem("list"));
        }
        list.push({


            Assigned: Assigned,
            Discription: Discription,
            Date: Date,
            Status: Status
        });

        localStorage.setItem("list", JSON.stringify(list));
        showData();
        document.getElementById("Assigned").value = "";
        document.getElementById("Discription").value = "";
        document.getElementById("Date").value = "";
        document.getElementById("Status").value = "";
    }
}

function deleteData(index) {
    var list;
    if (localStorage.getItem("list") == null) {
        list = [];
    }
    else {
        list = JSON.parse(localStorage.getItem("list"));
    }
    list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(list));
    showData();
}

function updateData(index) {
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var list;
    if (localStorage.getItem("list") == null) {
        list = [];
    }
    else {
        list = JSON.parse(localStorage.getItem("list"));
    }
    document.getElementById("Assigned").value = list[index].Assigned;
    document.getElementById("Discription").value = list[index].Discription;
    document.getElementById("Date").value = "";
    document.getElementById("Status").value = list[index].Status;

    document.querySelector("#Update").onclick = function () {
        if (validateForm() == true) {
            list[index].Assigned = document.getElementById("Assigned").value
            list[index].Discription = document.getElementById("Discription").value
            list[index].Date = document.getElementById("Date").value;
            list[index].Status = document.getElementById("Status").value

            localStorage.setItem("list", JSON.stringify(list));
            showData();

            document.getElementById("Assigned").value = "";
            document.getElementById("Discription").value = "";
            document.getElementById("Date").value = "";
            document.getElementById("Status").value = "";

            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }
}
