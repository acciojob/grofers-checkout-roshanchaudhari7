const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let tableNode = document.querySelector('table');

const getSum = () => {
    //Add your code here
    const totalPrices = document.getElementsByClassName('price');
    let sumOfPrices = 0;
    for (let t of totalPrices) {
        sumOfPrices += parseInt(t.innerText);
    }

    let newRow = document.createElement("tr");
    newRow.setAttribute('id', "ans");
    let cell1 = document.createElement("td");
    cell1.innerText = "Total Price: ";
    let cell2 = document.createElement("td");
    cell2.innerText = sumOfPrices;
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    tableNode.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

