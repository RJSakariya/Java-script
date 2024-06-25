function todo() {
    event.preventDefault
    var a = document.getElementById("task").value
    var b = document.getElementById("priority").value
    var table = document.getElementById("tableBody");
    var row = document.createElement("tr")
    var c1 = document.createElement("td")
    var c2 = document.createElement("td")
    var c3 = document.createElement("td")
    var check = document.createElement("input")
    c1.innerText = a
    c2.innerText = b
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    c3.appendChild(check)
    table.appendChild(row)
    check.type="checkbox"
}