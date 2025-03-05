const kartochki = document.getElementById('kartochki');
const productcontainer = document.getElementById('productContainer')
fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .then(data => {
        displayProducts(data)
    })


function displayProducts(products) {
    productcontainer.innerHTML = ''
    products.forEach(element => {
        const card = document.createElement('div')
        card.classList.add("card")
        card.innerHTML = `
                <img id="t" src="${element.image}" alt="">
                <h3 id="t">${element.title}</h3>
                <p id="t">${element.description.slice(0,50)}...</p>
                <p class="price" id="t">$${element.price}</p>
                <button id="t" onclick="addToCart(${element.id}, '${element.title}', ${element.price})">Sotib olish</button>
            `
        productcontainer.appendChild(card)
    });
}


let cartItems = document.getElementById('cartItems')
let totlaprice = document.getElementById('totalPrice')
let cart = [];
let total = 0;

function addToCart(id, title, price) {
    for (let item of cart) {
        if (item.id === id) {
            return;
        }
    }

    cart.push({ id, title, price });
    total = total + price;

    cartItems.innerHTML += `<p>${title} - $${price}</p>`;
    totlaprice.innerHTML = `<p>To'tal: $${total}</p>`;
}