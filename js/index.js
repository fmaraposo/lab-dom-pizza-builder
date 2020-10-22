// Write your Pizza Builder JavaScript in this file.
// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};
// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}
function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}
function renderMushrooms() {
    document.querySelectorAll('.mushroom').forEach(oneMushroom => {
      if (state.mushrooms) {
        oneMushroom.style.visibility = 'visible';
      } else {
        oneMushroom.style.visibility = 'hidden';
      }
    });
}
function renderGreenPeppers() {
    document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
      if (state.greenPeppers) {
        oneGreenPepper.style.visibility = 'visible';
      } else {
        oneGreenPepper.style.visibility = 'hidden';
      }
    });
}
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach(withWhiteSauce => {
    if (state.whiteSauce) {
      withWhiteSauce.style.visibility = 'visible';
    } else {
      withWhiteSauce.style.visibility = 'hidden';
    }
  });
}
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust-gluten-free').forEach(withGlutenFreeCrust => {
    if (state.glutenFreeCrust) {
      withGlutenFreeCrust.style.visibility = 'visible';
    } else {
      withGlutenFreeCrust.style.visibility = 'hidden';
    }
  });
}
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let btnPepperoni = document.querySelector('.btn.btn-pepperoni');
  let btnMushroom = document.querySelector('.btn.btn-mushrooms');
  let btnGreenPeper = document.querySelector('.btn.btn-green-peppers');
  let btnWhiteSauce = document.querySelector('.btn.btn-sauce');
  let btnCrust = document.querySelector('.btn.btn-crust');
  if (state.pepperoni) {
    btnPepperoni.setAttribute('class', 'btn btn-pepperoni active');
  } else if (!state.pepperoni) {
    btnPepperoni.setAttribute('class', 'btn btn-pepperoni');
  } else if (state.mushroom) { 
    btnMushroom.setAttribute('class', 'btn btn-mushrooms active');
  } else  if (!state.mushroom) {
    btnMushroom.setAttribute('class', 'btn btn-mushrooms' );
  } else if (state.greenPepper) {
    btnGreenPeper.setAttribute('class', 'btn btn-green-peppers active');
  } else if (state.greenPeppers) {
    btnGreenPeper.setAttribute('class', 'btn btn-green-peppers' );
  } else if (state.whiteSauce) {
    btnWhiteSauce.setAttribute('class','btn btn-sauce active');
  } else if (state.whiteSauce) {
    btnWhiteSauce.setAttribute('class', 'btn btn-sauce');
  } else if (status.crust) {
    btnCrust.setAttribute('class', 'btn btn-crust active');
  } else if (status.crust) {
    btnCrust.setAttribute('class', 'btn btn-crust');
  } 
}
function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let pricelist = document.querySelector('.price ul');
  priceList.innerHTML = ''; // $pricelist é a ul let $priceList = document.querySelector('.price ul');
  let totalPrice = basePrice;
  for (const key in ingredients) {
    // Se o ingrediente 
    if (state[key]) { // = state.peperonni 
      let name = ingredients[key].name;
      let price = ingredients[key].price;
      priceList.innerHTML += `<li>$${price} ${name}</li>`;
      totalPrice += price;
    }
  }
}
totalPrice.innerHTML = '$' + totalPrice; // $totalPrice é onde está o dinheiro let $totalPrice = document.querySelector('.price strong');
renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});