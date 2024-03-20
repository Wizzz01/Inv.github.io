const checkbox = document.getElementById('checkbox');


const tablesSection = document.querySelector('.tablesSection');


const inventoryItems = [];


inputForm.addEventListener('submit', function (e) {
    e.preventDefault();


    const item = document.getElementById('item').value.trim();


    const quantity = document.getElementById('quantity').value.trim();


    if (item.length === 0 || quantity.length === 0) {
        alert("Fill out the form first");
        return;
    }


    const updated = updateQuantity(item, quantity);

    if (!updated) {

        const trElement = document.createElement('tr');


        const tdElementForItemName = document.createElement('td');


        const tdElementForQty = document.createElement('td');


        const tdElementForEditButton = document.createElement('td');


        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.onclick = function() {

            const newQuantity = prompt("Enter new quantity:");

            if (newQuantity !== null && !isNaN(newQuantity) && newQuantity.trim() !== "") {
                tdElementForQty.textContent = newQuantity.trim();
            }
        };


        tdElementForItemName.textContent = item;
        tdElementForQty.textContent = quantity;


        trElement.appendChild(tdElementForItemName);
        trElement.appendChild(tdElementForQty);
        tdElementForEditButton.appendChild(editButton);
        trElement.appendChild(tdElementForEditButton);


        document.querySelector('#inventoryTable').appendChild(trElement);
    }
});

checkbox.addEventListener('change', function(e) {
    if (checkbox.checked) {
        tablesSection.style.display = "block";
    } else {
        tablesSection.style.display = "none";
    }
});


function updateQuantity(item, quantity) {
    const tableRows = document.querySelectorAll('#inventoryTable tr');

    for (let i = 1; i < tableRows.length; i++) {
        const itemName = tableRows[i].querySelector('td:first-child').textContent;
        if (itemName === item) {

            tableRows[i].querySelector('td:nth-child(2)').textContent = quantity;
            return true; 
        }
    }
    return false;
}