    $(function () {
        'use strict';

        $('.headC').click(function () {
            $('.globalNav').fadeToggle();
        });

        $('.top-wrap').fadeIn(1000);

    });

    function input_check() {
        var result = true;

        // エラー用装飾のためのクラスリセット
        $('#name').removeClass("inp_error");
        $('#furigana').removeClass("inp_error");
        $('#username').removeClass("inp_error");
        $('#email').removeClass("inp_error");
        $('#tel').removeClass("inp_error");
        $('#remarks').removeClass("inp_error");

        // 入力エラー文をリセット
        $("#name_error").empty();
        $("#furigana_error").empty();
        $("#username_error").empty();
        $("#email_error").empty();
        $("#tel_error").empty();
        $("#remarks_error").empty();

        // 入力内容セット
        var name = $("#name").val();
        var furigana = $("#furigana").val();
        var username = $("#username").val();
        var email = $("#email").val();
        var tel = $("#tel").val().replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi, '');
        var remarks = $("#remarks").val();

        // 入力内容チェック

        // お名前
        if (name == "") {
            $("#name_error").html("<i class='fa fa-exclamation-circle'></i> お名前は必須です。");
            $("#name").addClass("inp_error");
            result = false;
        } else if (name.length > 25) {
            $("#name_error").html("<i class='fa fa-exclamation-circle'></i> お名前は25文字以内で入力してください。");
            $("#name").addClass("inp_error");
            result = false;
        }
        // フリガナ
        if (furigana == "") {
            $("#furigana_error").html("<i class='fa fa-exclamation-circle'></i> フリガナは必須です。");
            $("#furigana").addClass("inp_error");
            result = false;
        } else if (!furigana.match(/^[ァ-ロワヲンー 　\r\n\t]*$/)) {
            $("#furigana_error").html("<i class='fa fa-exclamation-circle'></i> フリガナは全角カタカナで入力してください。");
            $("#furigana").addClass("inp_error");
            result = false;
        } else if (furigana.length > 25) {
            $("#furigana_error").html("<i class='fa fa-exclamation-circle'></i> フリガナは25文字以内入力してください。");
            $("#furigana").addClass("inp_error");
            result = false;
        }
        // ユーザー名
        if (username.length > 25) {
            $("#username_error").html("<i class='fa fa-exclamation-circle'></i> ユーザー名は25文字以内入力してください。");
            $("#username").addClass("inp_error");
            result = false;
        }
        // メールアドレス
        if (email == "") {
            $("#email_error").html("<i class='fa fa-exclamation-circle'></i> メールアドレスは必須です。");
            $("#email").addClass("inp_error");
            result = false;
        } else if (!email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
            $('#email_error').html("<i class='fa fa-exclamation-circle'></i> 正しいメールアドレスを入力してください。");
            $("#email").addClass("inp_error");
            result = false;
        } else if (email.length > 255) {
            $('#email_error').html("<i class='fa fa-exclamation-circle'></i> 正しいメールアドレスを入力してください。");
            $("#email").addClass("inp_error");
            result = false;
        }
        // 電話番号
        if (tel == "") {
            $("#tel_error").html("<i class='fa fa-exclamation-circle'></i> 電話番号は必須です。");
            $("#tel").addClass("inp_error");
            result = false;
        } else if ((!tel.match(/^[0-9]+$/)) || (tel.length < 10)) {
            $('#tel_error').html("<i class='fa fa-exclamation-circle'></i> 正しい電話番号を入力してください。");
            $("#tel").addClass("inp_error");
            result = false;
        }
        // お問い合わせ内容
        if (remarks == "") {
            $("#remarks_error").html("<i class='fa fa-exclamation-circle'></i> お問い合わせ内容は必須です。");
            $("#remarks").addClass("inp_error");
            result = false;
        } else if (remarks.match(/[<(.*)>.*<\/\1>]/)) {
            $('#remarks_error').html("<i class='fa fa-exclamation-circle'></i> HTML、URLの貼りつけは禁止しています。");
            $("#remarks").addClass("inp_error");
            result = false;
        } else if (remarks.match(/^[ 　\r\n\t]*$/)) {
            $('#remarks_error').html("<i class='fa fa-exclamation-circle'></i> お問い合わせ内容は必須です。");
            $("#remarks").addClass("inp_error");
            result = false;
        }

        if (result === false) {
            return false;
        } else {
            alert("送ってやったよ");
            return true;
        }
    }
