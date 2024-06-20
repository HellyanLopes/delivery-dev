let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;
    cart.forEach(({ item, price }) => {
        const li = document.createElement('li');
        li.textContent = `${item} - R$ ${price}`;
        cartItems.appendChild(li);
        totalPrice += price;
    });
    document.getElementById('total-price').textContent = `Total: R$ ${totalPrice}`;
}

function checkout() {
    const address = document.getElementById('address').value;
    if (!address) {
        alert('Por favor, digite um endereço de entrega.');
        return;
    }
    alert(`Pedido finalizado! Total: R$ ${totalPrice}. Entregar em: ${address}`);
    
    cart = [];
    document.getElementById('address').value = '';
    updateCart();
}


function checkStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const statusElement = document.getElementById('status');
    if (currentHour >= 10 && currentHour <= 22) {
        statusElement.textContent = 'Estamos Abertos';
        statusElement.style.color = 'green';
    } else {
        statusElement.textContent = 'Estamos Fechados';
        statusElement.style.color = 'red';
    }
}


window.onload = checkStatus;
