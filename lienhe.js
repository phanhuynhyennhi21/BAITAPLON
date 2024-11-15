$(document).ready(function() {
    // Khi người dùng gửi form
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Ngừng gửi form mặc định

        // Lấy giá trị từ các trường trong form
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

        // Kiểm tra nếu tất cả các trường đều đã được điền
        if (name && email && message) {
            // Gửi dữ liệu form (ví dụ: thông báo đã gửi thành công)
            // Thực tế sẽ có AJAX hoặc gửi dữ liệu qua server ở đây

            // Hiển thị thông báo thành công
            $('#response-message').text('Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi sớm nhất có thể.');

            // Xóa dữ liệu trong form
            $('#contact-form')[0].reset();
        } else {
            // Hiển thị thông báo lỗi nếu có trường chưa được điền
            $('#response-message').text('Vui lòng điền đầy đủ các trường yêu cầu.');
        }
    });
});
