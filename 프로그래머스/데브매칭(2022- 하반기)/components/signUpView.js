class SignupView {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "form_container");
    this.$main.appendChild(containerDiv);
  }
}
export default SignupView;