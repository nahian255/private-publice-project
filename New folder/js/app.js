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









// for (let i = 0; i > cardPlayer.length; i++) {
    //     const name = cardArray[i].playerName;

    //     const tr = document.createElement('tr');
    //     tr.innerHTML = `
    // <!-- row 1 -->
    // <tr>
    //   <th>1</th>
    //   <td>Cy Ganderton</td>
    //   <td>Quality Control Specialist</td>
    //   <td>Blue</td>
    // </tr>`;

    //     tableBody.appendChild(tr);
    // }