$(document).ready(function() {
    $('.step2 input[type=checkbox]').click(function() {
        if (this.checked == true) {
            $(this).parent().addClass('selected');
        } else {
            $(this).parent().removeClass('selected');
        }
    });
    $('.video-catsec input[type=checkbox]').click(function() {
        if (this.checked == true) {
            $(this).parent().addClass('selected');
        } else {
            $(this).parent().removeClass('selected');
        }
    });
    $('.color-pick input[type=checkbox]').click(function() {
        if (this.checked == true) {
            $(this).parent().addClass('selected');
        } else {
            $(this).parent().removeClass('selected');
        }
    });
});