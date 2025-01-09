// Function to add a new record

function addRecord() {
    const name = prompt("Enter student's name:");
    const rollNo = prompt("Enter student's roll number:");
    const marks = prompt("Enter student's marks:");

    if (name && rollNo && marks) {
        const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.innerHTML = `<td>${name}</td><td>${rollNo}</td><td>${marks}</td>`;
    } else {
        alert("All fields are required!");
    }
}

// Function to sort records by marks

let isAscending = true;

function sortRecords() {
    const table = document.getElementById('studentTable');
    const rows = Array.from(table.rows).slice(1);
    const tbody = table.getElementsByTagName('tbody')[0];
    rows.sort((a, b) => {
        const marksA = parseInt(a.cells[2].innerText);
        const marksB = parseInt(b.cells[2].innerText);

        return isAscending ? marksA - marksB : marksB - marksA;
    });

    rows.forEach(row => tbody.appendChild(row));
    isAscending = !isAscending;
}
