var reviews = [];

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var comment = document.getElementById('comment').value;

    var review = {
        name: name,
        date: date,
        comment: comment
    };

    reviews.push(review);

    // Hiển thị đánh giá trong phần tử reviewDisplay
    displayReviews();

    document.getElementById('reviewForm').reset();
});

function displayReviews() {
    var reviewDisplay = document.getElementById('reviewDisplay');
    reviewDisplay.innerHTML = ''; // Xóa nội dung cũ trước khi thêm mới

    for (var i = 0; i < reviews.length; i++) {
        var review = reviews[i];
        var reviewElement = document.createElement('div');
        reviewElement.innerHTML = '<strong> Họ và tên: </strong> ' + review.name + '<br>' +
                                  '<strong> Ngày đánh giá: </strong> ' + review.date + '<br>' +
                                  '<strong> Phản hồi: </strong> ' + review.comment + '<br><br>';
        reviewDisplay.appendChild(reviewElement);
    }
}
