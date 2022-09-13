function handleQuotes() {
    const nameQuotes = {
        '- Dalai Lama':'"Mục đích của cuộc đời chúng ta là hạnh phúc."' ,
        '- Will Smith':'“Tiền và thành công không thay đổi con người; chúng chỉ đơn thuần là khuếch đại những gì đã có ở đó. ”',
        '- Steve Jobs':' “Thời gian của bạn là có hạn, vì vậy đừng lãng phí nó để sống cuộc đời của người khác. Đừng bị mắc kẹt bởi giáo điều - như vậy là đang sống với kết quả của suy nghĩ của người khác.” ',
        '- Eleanor Roosevelt':'“Nếu cuộc sống có thể đoán trước được thì nó sẽ không còn là cuộc sống, và không có hương vị. ”' ,     
        '- Ernest Hemingway':'“Để viết về cuộc sống, trước hết bạn phải sống với nó.” ',
        '- Sưu tầm':' “Hãy hát như thể không ai đang nghe, yêu như thể bạn chưa bao giờ bị tổn thương, nhảy như thể không ai đang xem và sống như thiên đường trên trái đất. ”',

        ' Leo Burnett':'“Tôi nghĩ rằng tò mò về cuộc sống ở tất cả các khía cạnh chính là bí mật của những người sáng tạo tuyệt vời”. ',
        '- Albert Einstein':'“Cuộc sống giống như cưỡi một chiếc xe đạp. Để giữ thăng bằng bạn phải di chuyển liên tục.” ',

        '- Charles Swindoll':' “Cuộc sống là mười phần trăm những gì xảy ra với bạn và chín mươi phần trăm cách bạn phản ứng với nó.” ',
        
        '- Đức Phật':'“Sức khỏe là món quà lớn nhất, bằng lòng là của cải lớn nhất, sự chung thủy là mối quan hệ tốt nhất.”',
        
        '- Tiến sĩ Seuss':'“Trong đầu bạn có não. Chân bạn có giày. Bạn có thể điều khiển bản thân bất cứ hướng nào bạn chọn.”' ,
        
        '- Benjamin Franklin':'“Bi kịch của cuộc đời là chúng ta già đi quá sớm và khôn ngoan quá muộn.” ',
        
        '- Michael Jordan':'“Tôi đã ném hụt hơn 9000 cú ném trong sự nghiệp của mình. Tôi đã thua gần 300 trận. Hai mươi sáu lần, tôi đã được tin tưởng để thực hiện cú ném quyết định để chiến thắng và bỏ lỡ nó. Tôi đã thất bại rất nhiều lần trong đời. Và đó là lý do tại sao tôi thành công .”' 
    }
    const author = Object.keys(nameQuotes)
    const index = Math.floor(Math.random() * author.length)
    const quote = nameQuotes[author[index]]
    console.log(author)
    document.querySelector('.quote').innerHTML = quote
    document.querySelector('.author').innerHTML = author[index]
}