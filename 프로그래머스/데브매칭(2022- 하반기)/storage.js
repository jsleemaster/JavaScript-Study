export const setPersonalInfo = async () => {
  const response = await fetch("data/dummy.json");
  const data = await response.json();

  if (!localStorage.getItem("personalInfo")) {
    localStorage.setItme("personalInfo", data);
  }
}
export const setCardStatus = () => {
  if (!localStorage.getItem("cardStatus")) {
    localStorage.setItem("cardStatus", JSON.stringify([]))
  }
}