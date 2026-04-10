function buyNow(name, price, img) {
    // Save phone data to localStorage
    localStorage.setItem("phoneName", name);
    localStorage.setItem("phonePrice", price);
    localStorage.setItem("phoneImg", img);

    // Redirect to Buy Now page
    window.location.href = "buynow.html";
}
