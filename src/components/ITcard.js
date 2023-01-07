import $ from 'jquery';

$(document).on("mousemove", ".card", function (event) {
    var halfWidth = (this.clientWidth / 2);
    var halfHeight = (this.clientHeight / 2);
    var mouseX = (halfWidth - (event.pageX - this.offsetLeft));
    var mouseY = (halfHeight - (event.pageY - this.offsetTop));
    var degX = ((mouseY / halfHeight) * 15) + 'deg'; //max degree = 15
    var degY = ((mouseX / halfWidth) * -15) + 'deg'; //max degree = 15
    $(this).css('transform', function () {
        return 'perspective(512px) translate3d(-2px, -2px, 0) rotateX(' + degX + ') rotateY(' + degY + ')';
    })
        .children('.card__info').css('transform', function () {
            return 'perspective(512px) translate3d(4px, 4px, 0) rotateX(' + degX + ') rotateY(' + degY + ')';
        });
})
    .on("mouseout", ".card", function () {
        $(this).removeAttr('style')
            .children('.card__info').removeAttr('style');
    });