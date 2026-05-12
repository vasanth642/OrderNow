const cartContainer =
document.getElementById("cart-container");

const totalElement =
document.getElementById("cart-total");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function renderCart(){

    cartContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        const div =
        document.createElement("div");

        div.classList.add("cart-item");

        div.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartContainer.appendChild(div);

    });

    totalElement.innerText = total;

}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();

}

renderCart();
