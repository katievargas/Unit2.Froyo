function countFlavors() {
    const flavorInput = document.getElementById("flavorInput").value;
    const flavors = flavorInput.split(",").map(flavor => flavor.trim());

    const flavorCounts = {};
    flavors.forEach(flavor => {
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    });

    displayFlavorCounts(flavorCounts);
}

function displayFlavorCounts(flavorCounts) {
    const tableBody = document.getElementById("flavorTableBody");
    tableBody.innerHTML = "";

    for (const flavor in flavorCounts) {
        const count = flavorCounts[flavor];

        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.textContent = flavor;
        cell2.textContent = count;
    }
}
