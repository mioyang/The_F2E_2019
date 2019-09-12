$(document).ready(function () {

    //sidebar nav 切換
    $('.nav-link').on('click', function () {
        if ($(this).hasClass('active') != "ture") {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        };
        return false;
    });

    //mode 切換
    $('.mode>li').on('click', function () {
        if ($(this).hasClass('active') != "ture") {
            $('.mode>li').removeClass('active');
            $(this).addClass('active');
            $('body').toggleClass('night-mode');
            $('#sidebar').toggleClass('night-mode');
            $('#main').toggleClass('night-mode');
        };
        return false;
    });

    //view 切換
    $('.btn-view').on('click', function () {
        if ($(this).hasClass('active') != "ture") {
            $('.btn-view').removeClass('active');
            $(this).addClass('active');
        };
        return false;
    });


    //加入收藏切換
    $('.card-title i').on('click', function () {
        $(this).toggleClass('active');
        return false;
    });



});