const cardArray = [];

function display(cardPlayer) {
    console.log(cardPlayer);

    const ulBody = document.getElementById('ul-body');
    ulBody.innerHTML = '';


    for (let i = 0; i < cardPlayer.length; i++) {
        // console.log(cardArray[i].playerName);
        const name = cardArray[i].playerName;
        console.log(name)

        const ul = document.createElement('ul');

        ul.innerHTML = `
        <ul>
          <li>${i + 1}.  ${name}</li>
          
        </ul>`;

        if (i === 6) {
            alert
        }
        ulBody.appendChild(ul);

    }
    if (document.getElementById('ul-body').childElementCount >= 6) {
        alert('limit finish');
        return false;
    }
}

function addToCard(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName,
    }
    cardArray.push(playerObj);

    display(cardArray);

    // const oneBtn = document.getElementById('myBtn');
    // oneBtn.disabled = true;
    // // document.getElementById('myBtn2').disabled = true;
    // // document.getElementById('myBtn3').disabled = true;
    // // document.getElementById('myBtn4').disabled = true;
    // // document.getElementById('myBtn5').disabled = true;
    // const sixBtn = document.getElementById('btn-rs');
    // sixBtn.disabled = true;
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






