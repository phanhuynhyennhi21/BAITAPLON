$(document).ready(function() {
    // Lấy giỏ hàng từ localStorage (nếu có)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Hiển thị các sản phẩm trong giỏ hàng
    function updateCart() {
        $('.cart-container').empty();
        let totalPrice = 0;

        cart.forEach(function(item, index) {
            totalPrice += item.price * item.quantity;

            const cartItem = `
                <div class="cart-item">
                    <img src="product${index + 1}.jpg" alt="${item.product}">
                    <div class="cart-item-info">
                        <h2>${item.product}</h2>
                        <p class="price">${item.price} VND</p>
                    </div>
                    <div class="quantity">
                        <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="update-quantity">
                    </div>
                    <div class="actions">
                        <button class="remove-item" data-index="${index}">Xóa</button>
                    </div>
                </div>
            `;
            $('.cart-container').append(cartItem);
        });

        // Cập nhật tổng giá trị của giỏ hàng
        $('#total-price').text(totalPrice.toLocaleString() + ' VND');
    }

    // Cập nhật số lượng sản phẩm trong giỏ hàng
    $('.cart-container').on('input', '.update-quantity', function() {
        const index = $(this).data('index');
        const newQuantity = parseInt($(this).val());

        if (newQuantity > 0) {
            cart[index].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    // Xóa sản phẩm khỏi giỏ hàng
    $('.cart-container').on('click', '.remove-item', function() {
        const index = $(this).data('index');
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    });

    // Xóa toàn bộ giỏ hàng
    $('.clear-cart').click(function() {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    });

    // Xử lý thanh toán (hiện tại chỉ thông báo)
    $('.checkout').click(function() {
        if (cart.length > 0) {
            alert('Thanh toán thành công!');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        } else {
            alert('Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi thanh toán.');
        }
    });

    // Cập nhật giỏ hàng ngay khi tải trang
    updateCart();
});
