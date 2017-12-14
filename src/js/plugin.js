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

    // Button
    $('.ripple-jquery').on('click', function(e) {
        var rippleDiv = $('<span>'),
            rippleOffset = $(this).offset(),
            rippleY = e.pageY - rippleOffset.top,
            rippleX = e.pageX - rippleOffset.left,
            ripple = $('span');

        rippleDiv.css({
            top: rippleY - (ripple.height() / 2),
            left: rippleX - (ripple.width() / 2),
            background: $(this).data("ripple-color")
        }).appendTo($(this));

        window.setTimeout(function() {
            rippleDiv.remove();
        }, 500);
    });

//fileInput
    $(function(){

        $("[type=file]").on("change", function(){
            var file = this.files[0];
            var formdata = new FormData();
            formdata.append("file", file);

            $('#type span').empty().append (file.type);
            if(file.name.length >= 30){
                $('label').text("Фото : " + file.name.substr(0,30) + '..');
            }else {
                $('label').text("Фото : " + file.name);
            }

            var ext = $('#file').val().split('.').pop().toLowerCase();
            if($.inArray(ext, ['php', 'html']) !== -1) {
                $('#info').hide();
                $('label').text('Фото');
                $('#file').val('');
                alert('This file extension is not allowed!');
            }

        });

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