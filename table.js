function loadTable(){

const data = [
{
minSdk:21,
targetSdk:30,
activity:"oid.hardware.wifi.MainActivity",
package:"oid.hardware.wifi",
version:"1.0"
}
];

const body = document.getElementById("tableBody");

data.forEach(row =>{

let tr = document.createElement("tr");

tr.innerHTML = `
<td>${row.minSdk}</td>
<td>${row.targetSdk}</td>
<td>${row.activity}</td>
<td>${row.package}</td>
<td>${row.version}</td>
`;

body.appendChild(tr);

});

}

window.onload = loadTable;
