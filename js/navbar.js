/**
 * Created by hlibe on 14.04.2017.
 */
$(document).ready(function () {
    activeElement();
});

function activeElement() {
    $('nav').find('a').on('click', function () {
        $('nav').find('a').each(function () {
           $(this).removeClass('active');
        });
        $(this).addClass('active');
    })
}