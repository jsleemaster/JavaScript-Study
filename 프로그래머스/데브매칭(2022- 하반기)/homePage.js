import ContentTitle from './components/contentTitle';
import CardView from './components/cardView';
class HomePage {
  constructor($main) {
    this.$main = $main;
  }
  render() {
    const title = new ContentTitle(this.$main, "홈페이지");
    title.render();

    const cardView = new CardView(this.$main);
    cardView.render();
  }
}

export default HomePage;