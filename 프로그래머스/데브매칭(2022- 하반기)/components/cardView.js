import { cardDiv, cardPlane } from "./card"
import { setCardStatus } from '../storage';
class CardView {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "cards_container");
    this.$main.appendChild(containerDiv);
    setCardStatus();
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"))

    for (let i = 0; i < personalInfo.length; i++) {
      const card = cardDiv(i);
      card.appendChild(cardPlane("front", personalInfo[i].nickname));
      card.appendChild(cardPlane("back", personalInfo[i].nickname));
      containerDiv.appendChild(card);
    }
  }
}
export default CardView;