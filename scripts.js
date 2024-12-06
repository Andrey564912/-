// Массив для хранения товаров в корзине
let cart = [];

// Элементы DOM
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const closeCartButton = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Функция для обновления корзины
function updateCart() {
    // Обновляем количество товаров в корзине
    cartButton.innerText = `Cart (${cart.length})`;

    // Очистка списка товаров в корзине
    cartItemsList.innerHTML = '';
    
    // Добавляем товары в список
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - ₽${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    // Показываем общий итог
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    cartTotal.innerText = `Total: ₽${totalPrice}`;
}

// Функция для добавления товара в корзину
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Обработчик кнопок "Add to Cart"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product'); // Находим ближайший родительский элемент с классом 'product'
        const name = product.getAttribute('data-name'); // Получаем название продукта
        const price = parseInt(product.getAttribute('data-price')); // Получаем цену товара
        
        addToCart(name, price); // Добавляем товар в корзину
    });
});

// Открытие корзины
cartButton.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

// Закрытие корзины
closeCartButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});
