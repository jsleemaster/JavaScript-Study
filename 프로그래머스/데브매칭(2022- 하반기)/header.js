class Header {
  constructor(body) {
    this.$body = body
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

    this.$body.appendChild = header;
  }
}

export default Header