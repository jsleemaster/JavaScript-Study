export const cardDiv = (index) => {
  const card_div = document.createElement("div");
  card_div.setAttribute("idx", index);
  card_div.setAttribute("class", "card");
  card_div.addEventListener("click", (e) => {
    card_div.classList.toggle("is-flipped");
  });

  return card_div;
}

export const cardPlane = (side, data) => {
  const cardPlane_div = document.createElement("div");
  cardPlane_div.setAttribute("class", "card_plane card_plane--" + side);
  cardPlane_div.appendChild(document.createTextNode(data));

  return cardPlane_div;
}