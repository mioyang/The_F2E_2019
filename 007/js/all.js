$(document).ready(function () {

    //預設隱藏聊天大廳
    $('#chat').hide();

    //首頁按鈕事件
    $('#btn1').on('click', function () {
        if ($('#username').val() !== '') {
            var user = $('#username').val();
            $('.msg').append('<div class="new my-3 mx-auto text-center d-flex justify-content-center align-items-center"><p>' + user + ' 加入了聊天室</p></div>');
            $('.msg').append(
                '<div class="message-new my-3 mx-auto text-center d-flex flex-row justify-content-start"><div class="avatar mr-2"> <img src="images/ic_you.png" alt=""></div><div class="message-cont d-flex flex-column justify-content-start"><span class="user text-sm-left">mio</span><span class="cont">安安，你好Ｒ</span></div></div>');
            $('#username').val("");
        } else {
            swal("Oops!", "請輸入暱稱開始聊天吧！", "info");
            return false;
        };

        $('#main').hide();
        $('#chat').show();
    });
    $('#btn2').on('click', function () {
        if ($('#username').val() !== '') {
            var user = $('#username').val();
            $('.msg').append('<div class="new my-3 mx-auto text-center d-flex justify-content-center align-items-center"><p>' + user + ' 加入了聊天室</p></div>');
            $('.msg').append(
                '<div class="message-new my-3 mx-auto text-center d-flex flex-row justify-content-start"><div class="avatar mr-2"> <img src="images/ic_you.png" alt=""></div><div class="message-cont d-flex flex-column justify-content-start"><span class="user text-sm-left">mio</span><span class="cont">安安，你好Ｒ</span></div></div>');
            $('#username').val("");
        } else {
            swal("Oops!", "請輸入暱稱開始聊天吧！", "info");
            return false;
        };

        $('#main').hide();
        $('#chat').show();
    })


    //聊天大廳返回按鈕
    $('#btn-back').on('click', function () {
        $('#main').show();
        $('#chat').hide();
        $(".msg").empty();
    });


    //輸入聊天訊息
    $('.btn-send').on('click', function (e) {
        var user = $('#username').val();
        var text = $('#message-txt').val();
        // console.log(text);
        if ($('#message-txt').val() !== '') {
            $('.msg').append(
                '<div class="message-new user my-3 mx-auto text-center d-flex flex-row-reverse justify-content-start"><div class="avatar ml-2"> <img src="images/ic_me.png" alt=""></div><div class="message-cont d-flex flex-column justify-content-start"><span class="cont">' + text + '</span></div></div>');
            $('.msg').append(
                '<div class="message-new my-3 mx-auto text-center d-flex flex-row justify-content-start"><div class="avatar mr-2"> <img src="images/ic_you.png" alt=""></div><div class="message-cont d-flex flex-column justify-content-start"><span class="user text-sm-left">mio</span><span class="cont">嗨！其他功能陸續增加中(๑˘ ₃˘๑) </span></div></div>');
        } else {
            swal("Oops!", "請輸入聊天內容唷！", "warning");
            return false;
        };
        $('#message-txt').val("");

    });


});