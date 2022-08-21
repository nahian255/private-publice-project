const cardArray = [];

function display(cardPlayer) {
    console.log(cardPlayer);
}

function addToCard(element) {

    // console.log(element.parentNode.parentNode.children[0].innerText);
    const playerName = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        playerName: playerName,
    }
    cardArray.push(playerObj);

    display(cardArray);
}