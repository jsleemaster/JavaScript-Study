import { input, select } from './form'

class SignupView {
  constructor($main) {
    this.$main = $main;
  }

  render() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "form_container");
    this.$main.appendChild(containerDiv);

    const form = document.createElement("form");
    form.setAttribute("id", "grepp_form");
    containerDiv.appendChild(form);

    input("text", "name", "이름", true);
    input("email", "email", "이메일", true);
    input("text", "nickname", "닉네임", false);

    const roleValList = [''];
    const roleTxtList = [''];
    const mbtiValList = [''];
    const mbtiTxtList = [''];

    select("role", roleValList, roleTxtList, '직군', true);
    select("mbti", mbtiValList, mbtiTxtList, 'MBTI', false);

    button("submit", "등록");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));

      let nameVal = e.target.name.value;
      let emailVal = e.target.email.value;
      let nicknameVal = e.target.nickname.value;
      let role = e.target.role.value;
      let mbti = e.target.mbti.value;
      let idx = personalInfo.length;

      const submitInfo = {
        "idx": idx,
        "name": nameVal,
        "email": emailVal,
        "nickname": nicknameVal,
        "role": role,
        "mbti": mbti
      }

      localStorage.setItem("personalInfo", submitInfo);

      if (localStorage.getItem("personalInfo")) {
        alert("성공적으로 등록되었습니다.");
      }

    });
  }
}
export default SignupView;