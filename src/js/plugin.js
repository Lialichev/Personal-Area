;(function ($) {
// dropdown
    var dropdownWrap = $('.dropdown-wrap');

    dropdownWrap.on('click', function (e) {
        var target = $(this).find('.drop-down-menu');
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

        if (width < mobileBreackPoint) {
            body.toggleClass(openInMobile)
        }

    });

    $(window).on('resize load', function (e) {
        var width = $(this).width();
        if (width < mobileBreackPoint && !body.hasClass(openInMobile)) {
            body.addClass(mobileClass);
        } else if (width >= mobileBreackPoint) {
            body.removeClass(mobileClass);
            body.removeClass(openInMobile);
        }
    });

//loader hide
    var loader = $('#loading');

    $(window).on('load', function (e) {
        loader.addClass('hide');
    });


    $('.user-quit').click(function () {
        swal({
            title: 'Вы хотите выйти?',
            type: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#f58220',
            confirmButtonText: 'Отмена',
            cancelButtonText: 'Выход'
        })
    });


})(jQuery);