let total = 0;
let cartCount = 0;

function addToCart(productName, productPrice){

    // CART ITEMS LIST

    const cartItems = document.getElementById("cart-items");

    // CREATE NEW ITEM

    const li = document.createElement("li");

    li.innerHTML = `
        ${productName} - ₹${productPrice}
    `;

    // ADD ITEM TO CART

    cartItems.appendChild(li);

    // UPDATE TOTAL

    total += productPrice;

    document.getElementById("total").innerText = total;

    // UPDATE CART COUNT

    cartCount++;

    document.getElementById("cart-count").innerText = cartCount;

    // SMALL ANIMATION EFFECT

    li.style.opacity = "0";
    li.style.transform = "translateX(-20px)";

    setTimeout(() => {
        li.style.transition = "0.4s ease";
        li.style.opacity = "1";
        li.style.transform = "translateX(0)";
    }, 50);

    // BUTTON FEEDBACK

    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.innerText = "Added ✓";

            button.style.background =
            "linear-gradient(to right,#22c55e,#16a34a)";

            setTimeout(() => {

                button.innerText = "Add to Cart";

                button.style.background =
                "linear-gradient(to right,#38bdf8,#818cf8)";

            }, 1200);

        });

    });

}

/* CHECKOUT BUTTON */

const checkoutBtn = document.querySelector(".checkout-btn");

checkoutBtn.addEventListener("click", () => {

    if(total === 0){

        alert("Your cart is empty!");

    }
    else{

        alert(
            "Order placed successfully!\n\nTotal Amount: ₹" + total
        );

    }

});

/* HERO BUTTON */

const heroButton = document.querySelector(".hero-text button");

heroButton.addEventListener("click", () => {

    window.scrollTo({
        top:700,
        behavior:"smooth"
    });

});

/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "rgba(15,23,42,0.95)";

    }
    else{

        navbar.style.background = "rgba(255,255,255,0.05)";

    }

});
