/**
 * Created by user on 26.10.16.
 */
jQuery(window).scroll(function(){

    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){

            $('a.active').removeClass('active');
            $('a[href*="#'+id+'"]').addClass('active');

        }
        var $second = $('section:eq(0)');
        var elTop = $second.offset().top - 10;


        if( scroll > elTop) {
            $('.navbar').css({"background-color": "#777777", "opacity": "0.8"});
            $('.topnav').css({"background-color": "#777777", "opacity": "1"})
        }

        else if( scroll < $(document).height()) {
            $('.navbar').css({"background-color": ""});
            $('.topnav').css({"background-color": ""});
        }
    });
    $('.topnav').addClass('active');


});
jQuery(document).ready(function() {
    $('.toggle-nav').click(function (e) {
        $(this).toggleClass('active');
        $('.topnav').toggleClass('active');
        e.preventDefault();
    });
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
});

$("#menu").on("click",'a[href^="#"]', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);

});
