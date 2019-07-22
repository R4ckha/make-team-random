// Players
const playerList = [
    "youngpadawan",
    "bezounours",
    "gouka",
    "neeble"
];

window.onload = () => {
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
        for (let i = 0; i < this.playerNumbers; i++) {
            new Button(this.playerList[i]);
        }
    }

}

class Button
{
    constructor(player) {
        this.player = player;
        this.body = document.getElementsByTagName("body")[0];
        this.displayButton();
    }

    displayButton() {
        let newButton = document.createElement("button");
        newButton.innerHTML = this.player;
        newButton.setAttribute('class', 'button-red')
        this.body.appendChild(newButton);
    }
}