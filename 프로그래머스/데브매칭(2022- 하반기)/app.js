import Header from './header';
import HomePage from './homePage';
import SignUpPage from './SignPage';

class App {
  constructor($body) {
    this.$body = $body

    this.render()
  }
  render() {
    const header = new Header(this.$body);
    header.render();

    //메인페이지
    const main = document.createElement("main");
    main.setAttribute("id", "page_content");
    this.$body.appendChild(main);

    document.addEventListener("urlchange", (e) => {
      let pathname = e.detail.href;

      const homePage = new HomePage(main);
      const signupPage = new SignUpPage(main);

      switch (pathname) {
        case "/web/":
          homePage.render();
          break;
        case "/web/signUp":
          signupPage.render();
          break;
      }
    });

  }
}

export default App