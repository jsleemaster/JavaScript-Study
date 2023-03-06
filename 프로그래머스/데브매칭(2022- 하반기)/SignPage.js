import ContentTitle from './components/contentTitle';

class SignUpPage {
  constructor(main) {
    this.$main = main;
  }
  render() {
    const title = new ContentTitle(this.$main, "Sign Up, GreatPeoPle!");
    title.render();

    const signupView = new SignupView(this.$main);
    signupView.render();
  }
}

export default SignUpPage;