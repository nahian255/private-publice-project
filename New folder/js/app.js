const cardArray = [];

function display(cardPlayer) {
    console.log(cardPlayer);

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';


    for (let i = 0; i < cardPlayer.length; i++) {
        // console.log(cardArray[i].playerName);
        const name = cardArray[i].playerName;
        console.log(name)

        const tr = document.createElement('tr');

        tr.innerHTML = `
        <!-- row 1 -->
        <tr >
          <th>${i + 1}</th>
          <td>${name}</td>
          
        </tr>`;

        tableBody.appendChild(tr);

    }

}

function addToCard(element) {

    // console.log(element.parentNode.parentNode.children[0].innerText);
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName,
    }
    cardArray.push(playerObj);
    // console.log(cardArray)

    display(cardArray);
}

function inputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;

}

document.getElementById('calculate').addEventListener('click', function () {

    const perPlayerPrice = inputFieldValueById('per-player');

    const playerExpenses = perPlayerPrice * 5;
    const playerExpensesfield = document.getElementById('player-expenses');
    playerExpensesfield.innerText = playerExpenses;

    document.getElementById('calculate-total').addEventListener('click', function () {

        const managerExpenses = inputFieldValueById('manager-cost');
        const coachExpenses = inputFieldValueById('coach-cost');


        const total = playerExpenses + managerExpenses + coachExpenses;

        const totalExpensesField = document.getElementById('total-expenses');
        totalExpensesField.innerText = total;


    })

})






