import { greetings } from "./greetings.js";
import "./styles.css";
import ubeng from "./img/ubeng.png"

console.log(greetings);

const rob = document.createElement("img");
rob.src = ubeng;

document.body.appendChild(rob);
