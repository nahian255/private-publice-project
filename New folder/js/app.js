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


document.getElementById('calculate').addEventListener('click', function () {
    const parPlayerPriceField = document.getElementById('per-player');
    const parPlayerPriceString = parPlayerPriceField.value;
    const parPlayerPrice = parseFloat(parPlayerPriceString);


    const playerExpenses = parPlayerPrice * 5;
    const playerExpensesfield = document.getElementById('player-expenses');
    const ppx = parseFloat(playerExpensesfield.innerText);
    playerExpensesfield.innerText = playerExpenses;


    document.getElementById('calculate-total').addEventListener('click', function () {


        const managerInputField = document.getElementById('manager-cost');
        const managerInputFieldString = managerInputField.value;
        const managerExpenses = parseFloat(managerInputFieldString);

        const coachInputField = document.getElementById('coach-cost');
        const coachInputFieldString = coachInputField.value;
        const coachExpenses = parseFloat(coachInputFieldString);


        const total = ppx + managerExpenses + coachExpenses;

        const totalExpensesField = document.getElementById('total-expenses');
        const toatalString = (totalExpensesField.innerText = total);
        const totalNumber = parseFloat(toatalString);
        totalNumber = total;

    })

})






