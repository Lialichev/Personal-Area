;(function ($) {
// dropdown
    var dropdownWrap = $('.dropdown-wrap');

    dropdownWrap.on('click', function (e) {
        e.preventDefault();
        var target = $(this).find('.dropdown-menu');
        target.slideToggle();
        $(this).toggleClass('open');
    });

// toggle sidebar menu
    var menuBtn = $('.menu-btn');
    var body = $('body');
    var mobileClass = '_mobileSidebar';
    var openInMobile = "_openInMobile";
    var mobileBreackPoint = 1280;

    menuBtn.on('click', function (e) {

        var width = $(window).width(); //получаем ширину онка
        body.toggleClass(mobileClass);//вешаем класс для открытия меню

        if(width < mobileBreackPoint){
            body.toggleClass(openInMobile)
        }

    });

    $(window).on('resize load', function (e) {
        var width = $(this).width();
        if(width < mobileBreackPoint && !body.hasClass(openInMobile)){
            body.addClass(mobileClass);
        } else if(width >= mobileBreackPoint){
            body.removeClass(mobileClass);
            body.removeClass(openInMobile);
        }
    });

//loader hide
    var loader = $('#loading');

    $(window).on('load', function (e) {
        loader.addClass('hide');
    });

})(jQuery);