const modal = document.getElementById("cartModal");
const cartView = document.getElementById("cartView");
const checkoutForm = document.getElementById("checkoutForm");

document.querySelector(".add-to-cart").addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
    cartView.style.display = "block";
    checkoutForm.style.display = "none";
});

function closeModal() {
    modal.style.display = "none";
}

function showCheckout() {
    cartView.style.display = "none";
    checkoutForm.style.display = "block";
}

function backToCart() {
    checkoutForm.style.display = "none";
    cartView.style.display = "block";
}

// Закрытие при клике вне окна
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};
function showAlert() {
    alert("Заказ оформлен!");
}