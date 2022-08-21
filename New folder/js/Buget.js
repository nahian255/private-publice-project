

document.getElementById('calculate').addEventListener('click', function () {
    const parPlayerPriceField = document.getElementById('per-player');
    const parPlayerPriceString = parPlayerPriceField.value;
    const parPlayerPrice = parseFloat(parPlayerPriceString);


    const playerExpenses = parPlayerPrice * 5;
    const playerExpensesfield = document.getElementById('player-expenses');
    playerExpensesfield.innerText = playerExpenses;
})