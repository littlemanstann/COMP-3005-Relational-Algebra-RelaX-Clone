interface Tuple {
    id: number;
    name: string;
    age: number;
}

const relation: Tuple[] = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
];

const container = document.getElementById("table-container");

if (container) {
    const table = document.createElement("table");
    const header = document.createElement("tr");

    // Create header
    ["ID", "Name", "Age"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        header.appendChild(th);
    });
    table.appendChild(header);

    // Create rows in the table
    relation.forEach(tuple => {
        const tr = document.createElement("tr");
        Object.values(tuple).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value.toString();
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    container.appendChild(table);
}