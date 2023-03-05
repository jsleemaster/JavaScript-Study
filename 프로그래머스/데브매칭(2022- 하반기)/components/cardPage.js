import CardView from './cardView';

class CardPage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const cardView = new CardView(this.$main);
    cardView.render();
  }
}

export default CardPage