// Players
const playerList = [
    "youngpadawan",
    "bezounours",
    "gouka",
    "neeble"
];

document.onload = () => {
    list = new View(playerList);
    list.drawButtons();
}

class View 
{
    constructor(playerList) {
        this.playerList = playerList;
        this.playerNumbers = this.numberOfPlayers();
    }

    numberOfPlayers() {
        return this.playerList.length;
    }

    drawButtons() {
        for (let player in this.playerNumbers) {
            new Button(player);
        }
    }

}

class Button
{
    constructor(player) {
        this.player = player;
        this.container = document.body;
        this.displayButton();
    }

    displayButton() {
        let newButton = document.createElement("button");
        newButton.innerHTML = this.player;
        newButton.setAttribute('class', 'button-red')
        this.container.appendChild(newButton);
    }
}
