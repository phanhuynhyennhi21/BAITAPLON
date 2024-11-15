$(document).ready(function() {
    // Lấy giỏ hàng từ localStorage (nếu có)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Xử lý sự kiện "Thêm vào giỏ hàng"
    $('.add-to-cart').click(function() {
        let product = $(this).data('product');
        let price = $(this).data('price');

        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        let existingProduct = cart.find(item => item.product === product);

        if (existingProduct) {
            // Nếu sản phẩm đã có, tăng số lượng lên
            existingProduct.quantity++;
        } else {
            // Nếu chưa có, thêm mới sản phẩm vào giỏ hàng
            cart.push({ product: product, price: price, quantity: 1 });
        }

        // Lưu lại giỏ hàng vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Hiển thị thông báo thành công
        alert(product + ' đã được thêm vào giỏ hàng.');
    });
});
