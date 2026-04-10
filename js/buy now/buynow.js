function formatPrice(price) {
    return Number(price).toLocaleString("en-US").replace(/,/g, " ");
}

// Get phone data from localStorage
const phoneName = localStorage.getItem("phoneName");
const phonePrice = localStorage.getItem("phonePrice");
const phoneImg = localStorage.getItem("phoneImg");

// If data exists, show it
if (phoneName && phonePrice && phoneImg) {
    document.getElementById("phoneName").textContent = phoneName;
    document.getElementById("phonePrice").textContent = formatPrice(phonePrice);
    document.getElementById("phoneImg").src = phoneImg;
} else {
    // If no data, redirect back to products page
    alert("No phone selected! Redirecting to product page.");
    window.location.href = "index.html";
}

// Quantity & total price
const quantityInput = document.getElementById("quantity");
const totalPriceEl = document.getElementById("totalPrice");

function updateTotal() {
    const quantity = quantityInput.value;
    const total = phonePrice * quantity;
    totalPriceEl.textContent = formatPrice(total);
}


// Initial total
updateTotal();

// Update total when quantity changes
quantityInput.addEventListener("input", updateTotal);

// Order form submit
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Order confirmed! Thank you for your purchase.");
});
