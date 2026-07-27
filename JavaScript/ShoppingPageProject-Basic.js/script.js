// ==========================
// Product Class
// ==========================

class Product {
    constructor(id, name, description, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

// ==========================
// Order Class
// ==========================

class Order {

    constructor() {
        this.products = [];
        this.cart = [];
    }

    // Add product to product list
    createProduct(product) {
        this.products.push(product);
    }

    // Display all available products
    getProducts() {
        return this.products;
    }

    // Add product to cart
    addToCart(productId) {

        const product = this.products.find(item => item.id === productId);

        if (product) {

            this.cart.push(product);

            this.products = this.products.filter(
                item => item.id !== productId
            );

            console.log(`${product.name} added to cart.`);

        } else {

            console.log("Product not found.");

        }
    }

    // Remove product from cart
    removeFromCart(productId) {

        const product = this.cart.find(item => item.id === productId);

        if (product) {

            this.products.push(product);

            this.cart = this.cart.filter(
                item => item.id !== productId
            );

            console.log(`${product.name} removed from cart.`);

        } else {

            console.log("Product not found in cart.");

        }
    }

    // Create order
    makeOrder() {

        if (this.cart.length === 0) {

            console.log("Cart is empty.");

            return;

        }

        console.log("Order Created Successfully.");

    }

}

// ==========================
// Payment Class
// ==========================

class Payment {

    getTotalAmount(order) {

        let total = 0;

        order.cart.forEach(product => {
            total += product.price;
        });

        return total;
    }

    checkoutForPayment(order) {

        const total = this.getTotalAmount(order);

        console.log("----------------------");
        console.log("Payment Successful");
        console.log("Total Amount: ₹" + total);
        console.log("----------------------");

    }

}

// ==========================
// Notification Class
// ==========================

class Notification {

    notify(type) {

        if (type === "success") {

            console.log("Notification: Order Successful!");

        } else {

            console.log("Notification: Order Cancelled!");

        }

    }

}

// ==========================
// Testing
// ==========================

// Create Products
const p1 = new Product(1, "Laptop", "HP Laptop", 50000);
const p2 = new Product(2, "Mouse", "Wireless Mouse", 1200);
const p3 = new Product(3, "Keyboard", "Mechanical Keyboard", 2500);

// Create Order
const order = new Order();

// Add Products
order.createProduct(p1);
order.createProduct(p2);
order.createProduct(p3);

// Show Products
console.log("Available Products:");
console.log(order.getProducts());

// Add Products to Cart
order.addToCart(1);
order.addToCart(3);

console.log("\nProducts After Adding to Cart:");
console.log(order.products);

console.log("\nCart:");
console.log(order.cart);

// Remove Product from Cart
order.removeFromCart(3);

console.log("\nProducts After Removing:");
console.log(order.products);

console.log("\nCart:");
console.log(order.cart);

// Create Order
order.makeOrder();

// Payment
const payment = new Payment();
payment.checkoutForPayment(order);

// Notification
const notification = new Notification();
notification.notify("success");

function displayProducts() {

    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    order.products.forEach(product => {

        productList.innerHTML += `
            <div style="border:1px solid black; padding:10px; margin:10px;">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>₹${product.price}</strong></p>

                <button onclick="addProduct(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;

    });

}

function addProduct(productId) {

    order.addToCart(productId);

    displayProducts();

    displayCart();

}

displayProducts();