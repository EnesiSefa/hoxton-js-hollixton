import "./style.css";

// type State = {
//   store : [],
//   users: []
// }
// let state: State = {
//   store: [],
//   users: []
// }

function render() {
  header();
}
render();

function header() {
  let app = document.querySelector("#app");
  if (app === null) return;
  app.textContent = "";

  let headerEl = document.createElement("header");
  headerEl.className = "header";

  let headerLeftDiv = document.createElement("div");
  headerLeftDiv.className = "header-left";

  let h1El = document.createElement("h1");
  h1El.textContent = "Hollixton";
  let navEL = document.createElement("nav");

  let ulEL = document.createElement("ul");
  ulEL.className = "left-list";

  let liEl = document.createElement("li");
  liEl.className = "list-item";
  let liEl2 = document.createElement("li");
  liEl2.className = "list-item";
  let liEl3 = document.createElement("li");
  liEl3.className = "list-item";

  let headerRightDiv = document.createElement("div");
  headerRightDiv.className = "header-right";

  let navEL2 = document.createElement("nav");
  let ulEl2 = document.createElement("ul");
  ulEl2.className = "right-list";

  let iconSearchEl = document.createElement("li");
  iconSearchEl.className = "list-item";
  let spanSearchEl = document.createElement("span");
  spanSearchEl.className = "material-symbols-outlined";
  spanSearchEl.textContent = "search";

  let iconPersonEl = document.createElement("li");
  iconPersonEl.className = "list-item";
  let spanPersonEl = document.createElement("span");
  spanPersonEl.className = "material-symbols-outlined";
  spanPersonEl.textContent = "person";

  let iconBagEl = document.createElement("li");
  iconBagEl.className = "list-item";
  let spanBagEL = document.createElement("span");
  spanBagEL.className = "material-symbols-outlined";
  spanBagEL.textContent = "shopping_bag";
  
  iconSearchEl.append(spanSearchEl);
  iconPersonEl.append(spanPersonEl);
  iconBagEl.append(spanBagEL);
  ulEl2.append(iconSearchEl, iconPersonEl, iconBagEl);
  navEL2.append(ulEl2);
  headerRightDiv.append(navEL2);
  
  ulEL.append(liEl,liEl2,liEl3)
  navEL.append(ulEL)
 headerLeftDiv.append(h1El,navEL);
  headerEl.append(headerLeftDiv, headerRightDiv);
  app.append(headerEl);
}
