const cardArray = [];
// Player name added part..........
function display(cardPlayer) {
    console.log(cardPlayer);

    const ulBody = document.getElementById('ul-body');
    ulBody.innerHTML = '';


    for (let i = 0; i < cardPlayer.length; i++) {

        const name = cardArray[i].playerName;
        const ul = document.createElement('ul');
        // let ulLength = ul.childElementCount;
        // console.log(ulLength);
        ul.innerHTML = `
        <ul>
          <li>${i + 1}. ${name}</li>
        </ul>`;

        ulBody.appendChild(ul);
    }
    if (document.getElementById('ul-body').childElementCount >= 6) {
        alert('limit finish');
        return true;
    }
}

function addToCard(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;
    element.setAttribute('disabled', true);

    const playerObj = {
        playerName: playerName,
    }
    cardArray.push(playerObj);

    display(cardArray);

}

// callculate part..............

function inputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerPrice = inputFieldValueById('per-player');

    const playerExpenses = perPlayerPrice * cardArray.length;
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






