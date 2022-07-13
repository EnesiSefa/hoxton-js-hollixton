import "./style.css";

type Store = {
  
    id: number,
    type: string,
    name: string,
    image: string,
    price: number,
    discountedPrice: number,
    dateEntered: string,
    stock: number
}

type User = {
  
    firstName: string,
    lastName: string,
    id: string,
    password: string,
    bag: []
  
}

type State = {
  store : Store[],
  users: User[]
 }
 let state: State = {
  store: [],
  users: []
 }

function render() {
  // let body = document.querySelector("body")
  header();
  main()
  
}



function header() {
 
  let app = document.querySelector("#app");
  if (app === null) return;
  

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
  liEl.textContent = "Girls"
  let liEl2 = document.createElement("li");
  liEl2.className = "list-item";
  liEl2.textContent = "Guys"
  let liEl3 = document.createElement("li");
  liEl3.className = "list-item";
  liEl3.textContent = "Sale"

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

function main(){
  let divApp = document.querySelector("#app");
  if (divApp === null) return;


  for (let items of state.store){
  let mainEl = document.createElement("main")


let divInsideMainEl = document.createElement("div")
divInsideMainEl.className = "div-main"

let h3El = document.createElement("Home")
h3El.textContent = "Home"

let navigation = document.createElement("nav")
navigation.className = "navigation"


let navigationUlEL = document.createElement("ul")
navigationUlEL.className = "navigation__list"

let navigationLiEL = document.createElement("li")
navigationLiEL.className = "navigation__list-one-item"

let imgEL = document.createElement("img")
imgEL.src = items.image
imgEL.alt = "t-shirt"

let descriptionEl = document.createElement("h4")
descriptionEl.textContent = items.name

let priceEl = document.createElement("span")
priceEl.textContent =  String(items.price)


navigationLiEL.append(imgEL,descriptionEl,priceEl)
navigationUlEL.append(navigationLiEL)
navigation.append(navigationUlEL)

divInsideMainEl.append(h3El,navigation)
mainEl.append(divInsideMainEl)

divApp.append(mainEl)
}

}

render();

function getData(){
  fetch('http://localhost:3005/store')
    .then(resp => resp.json())
    .then(data => state.store = data
      render()
    )}