import { powerUps, displayPowerUp } from "./click.js";
const lavaBox = document.querySelector(".lava-box");

spawnHead();

function spawnHead(){
    let spawnLocation = Math.round(Math.random() * 40);
    const head = document.createElement("img");
    let powerUp = Math.floor(Math.random()*5);
    head.classList.add("lava-box-head");
    head.style.left = (40 + spawnLocation) + "%";
    lavaBox.appendChild(head);
    head.addEventListener("click",()=>{
        switch(powerUp){
            case 0:
                powerUps.x2 = true;
                console.log(powerUps.x2);
                displayPowerUp(0,powerUps.x2Duration);
            break;
            case 1:
                powerUps.x4 = true;
                console.log(powerUps.x4);
                displayPowerUp(1,powerUps.x4Duration);
            break;
            case 2:
                powerUps.flashSale = true;
                console.log(powerUps.flashSale);
                displayPowerUp(2,powerUps.flashSaleDuration);
            break;
            case 3:
                powerUps.temporaryTotemUpgrade = true;
                console.log(powerUps.temporaryTotemUpgrade);
                displayPowerUp(3,powerUps.temporaryTotemUpgradeDuration);
            break;
            case 4:
                powerUps.percent10 = true;
                console.log(powerUps.percent10);
                displayPowerUp(4,powerUps.percent10Duration);
            break;
        }
        head.remove();
    });
    descend(head);
}

function descend(head){
    setTimeout(() => {
        head.style.top = "30%";
    }, .01);
    setTimeout(() => {
        head.remove();
    }, 5000);
    setTimeout(() => {
        spawnHead();
    }, 6000);
}