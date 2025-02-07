let shopList = [];
let quantity = [];



function populateTable() {
    let tableBody = document.getElementById('table-body');

    for (let i = 0; i <shopList.length; i++) {
        let row = document.createElement('tr');

        let itemCell = document.createElement('td');
        itemCell.textContent = shopList[i];
        row.appendChild(itemCell);

        let quantityCell = document.createElement('td');
        quantityCell.textContent = quantity[i];
        row.appendChild(quantityCell);

        tableBody.appendChild(row);
    }
}

function formSubmisison(event) {
    event.preventDefault();

    let itemInput = document.getElementById('item');
    let quantityInput = document.getElementsByClassName('quantity');

    shopList.push(itemInput.value);
    quantity.push(quantityInput.value);

    itemInput.value = '';
    quantityInput.value = '';

    populateTable();
}

document.getElementById('shoppingForm').addEventListener('submit', formSubmisison);

populateTable();

