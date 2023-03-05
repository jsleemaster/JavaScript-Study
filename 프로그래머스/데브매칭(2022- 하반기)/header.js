class Header {
  constructor($body) {
    this.$body = $body
  }
  createMenuItem(divClass, spanClass, spanId, text) {
    const div = document.createElement('div');

    div.className = divClass;

    const span = document.createElement('span');

    span.setAttribute("class", spanClass);
    span.setAttribute("id", spanId);
    span.appendChild(document.createTextNode(text));

    div.appendChild(span)

    return div
  }

  render() {
    const header = document.createElement('header');
    const home = this.createMenuItem("header header_left", "menu_name", "menu_home", "HOME");
    const signUp = this.createMenuItem("header header_rgiht", "menu_name", "menu_signup", "SIGNUP");

    header.appendChild(home);
    header.appendChild(signUp);

    // HOME 메뉴 클릭 이벤트
    home_menu.addEventListener("click", () => {
      window.history.pushState("", "", "/web/");
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/web/" }
      });
      document.dispatchEvent(urlChange);
    });

    // SIGNUP 메뉴 클릭 이벤트
    signup_menu.addEventListener("click", () => {
      window.history.pushState("", "", "/web/signup");
      const urlChange = new CustomEvent("urlchange", {
        detail: { href: "/web/signup" }
      });
      document.dispatchEvent(urlChange);
    });

    this.$body.appendChild = header;
  }
}

export default Header