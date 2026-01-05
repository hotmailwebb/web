// Get the cart items container
const cartItemsContainer = document.getElementById('cart-items');

// Function to add a product to the cart
function addToCart(product) {
    // Create a new row for the cart item
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><a href="#" class="remove-item" onclick="removeFromCart(this)"><i class="fa-solid fa-circle-xmark"></i></a></td>
        <td><img src="${product.image}" alt=""></td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><input type="number" name="" value="1"></td>
        <td>${product.price}</td>
    `;
    cartItemsContainer.appendChild(row);
}

// Function to remove a product from the cart
function removeFromCart(removeButton) {
    const row = removeButton.closest('tr');
    cartItemsContainer.removeChild(row);
}


document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".product-slider");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3000);
  });
});

// Example usage: Adding a product to the cart
const product = {
    name: 'Cartoon Astronaut T-Shirts',
    price: '$118.19',
    image: 'img/products/f1.jpg'
};
addToCart(product);
