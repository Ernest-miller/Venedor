/* ============================ ////////// Code out the venedor design and implement a shopping cart \\\\\\\\\\ ============================= */
let cart = document.getElementById('items_cart');
let addToCart = document.getElementById('add_to_cart');
let checkout = document.getElementById('checkout');
let secondPage = document.getElementById('second_page');
let section = document.getElementsByClassName('.section');
let builder = 7 * 1;
////////////////////////////////////////////////////////
function itemCounter() {
    cart = 0;
    addToCart.addEventListener('click', function () {
        addToCart = true;
        if (addToCart == true) {
            cart++,
            console.log(cart, "item(s)");
        }
    });
}    console.log(itemCounter());
/////////////////////////////////
function secondPageConstuctor() {
    let secondPage = document.getElementById('second_page');
    checkout.addEventListener('click', function () {
        checkout = true;
        if (checkout == true) {
                for (let i = 0; i < builder; i++) {
                    let section = document.createElement('div');
                    section.classList.add('section', `section${i}`);
                    section.addEventListener('click', secondPageConstuctor);
                    secondPage.appendChild(section);
                };
            /////////////////////////////////////////////////////////////////
            function calculator(number1, number2, operator = '*') {
                if (operator == '+') { return number1 + number2; }
                else if (operator == '-') { return number1 - number2; }
                else if (operator == '*') { return number1 * number2; }
                else if (operator == '/') { return number1 / number2; }
            }
            console.log('Your Total is', calculator(5, 5), 'Dollar(s)');
        }
    });
}    console.log(secondPageConstuctor());
