$(document).ready(function () {
    $('.button').pressure({
        change: function (force, event) {
            if (force > 0.5) return;
            let indent = (force * 2) * 2 - 2;
            $(this).css('transform', `translate(${force}px, ${force}px) translateZ(1px)`);

        },
        end: function (event) {
            $(this).css('transform', `translate(-2px, -2px) translateZ(1px)`);
        },
        startDeepPress: function (event) {
            $(this).addClass('activated');
            $(this).css('transform', `translate(2px, 2px) translateZ(1px)`);
        },
        endDeepPress: function () {
            $(this).removeClass('activated');
            $(this).css('transform', `translate(0px, 0px) translateZ(1px)`);
        }
    })
});