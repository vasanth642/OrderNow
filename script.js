let total = 0;
let cartCount = 0;

/* ADD TO CART FUNCTION */
function addToCart(productName, productPrice){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: productName,
        price: productPrice
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    cartCount++;

    document.getElementById("cart-count")
    .innerText = cartCount;

    showNotification(productName + " added to cart");

}


/* NOTIFICATION FUNCTION */

function showNotification(message){

    const notification = document.createElement("div");

    notification.innerText = message;

    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.background = "#2563eb";
    notification.style.color = "white";
    notification.style.padding = "15px 25px";
    notification.style.borderRadius = "10px";
    notification.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    notification.style.zIndex = "9999";
    notification.style.fontWeight = "500";
    notification.style.opacity = "0";
    notification.style.transform = "translateY(-20px)";
    notification.style.transition = "0.4s ease";

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.style.opacity = "1";
        notification.style.transform = "translateY(0px)";

    },100);

    setTimeout(() => {

        notification.style.opacity = "0";
        notification.style.transform = "translateY(-20px)";

    },2000);

    setTimeout(() => {

        notification.remove();

    },2500);

}

/* HERO BUTTON SCROLL */

const heroBtn = document.querySelector(".hero-text button");

heroBtn.addEventListener("click", () => {

    window.scrollTo({

        top:900,
        behavior:"smooth"

    });

});

/* SEARCH BUTTON */

const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

    const searchInput =
    document.querySelector(".search-box input").value;

    if(searchInput.trim() === ""){

        alert("Please enter a product name");

    }
    else{

        alert(
            "Searching for: " + searchInput
        );

    }

});

/* CATEGORY HOVER EFFECT */

const categories =
document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("mouseenter", () => {

        category.style.background = "#2563eb";

        category.style.color = "white";

        category.querySelector("i").style.color = "white";

    });

    category.addEventListener("mouseleave", () => {

        category.style.background = "white";

        category.style.color = "#111827";

        category.querySelector("i").style.color = "#2563eb";

    });

});

/* CARD BUTTON ANIMATION */

const cardButtons =
document.querySelectorAll(".card button");

cardButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerText = "Added ✓";

        button.style.background = "#16a34a";

        setTimeout(() => {

            button.innerText = "Add to Cart";

            button.style.background = "#2563eb";

        },1200);

    });

});

/* STICKY NAVBAR SHADOW */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 20){

        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.08)";

    }
    else{

        navbar.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.05)";

    }

});
