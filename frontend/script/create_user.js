//ES6から書かなければいけないもの
'use strict';

let $ = require('jquery');

//読み込んだら即実行意味
//バリデーションを作成
//検索例 jquery input バリデーション
//valm関数の値が空だったら、エラー表示
$(function () {
    $("#submit").on('click', function () {
        console.log("submitされました。")
        let id = $("#id").val();
        let name = $("#name").val();
        let age = $("#age").val();
        console.log(`id : ${id}`);
        console.log(`name : ${name}`);
        console.log(`age : ${age}`);
        $.ajax({
            url: 'http://localhost:5000/user',
            type: 'POST',
            data: JSON.stringify({ "id": id, "name": name, "age": age }),
            dataType: 'json',
            //contentType: 'application/json'
            headers: {
                'Content-Type': 'application/json'
            },
        }).done(function (data) {
            /* 通信成功時 */
            console.log('通信成功!!!')
        }).fail(function (jqXHR, textStatus, url, errorThrown) {
            /* 通信失敗時 */
            console.log("ajax通信に失敗しました");
            console.log(`jqXHR          :${jqXHR.status}`); // HTTPステータスが取得
            console.log(`textStatus     :${textStatus}`);    // タイムアウト、パースエラー
            console.log(`errorThrown    :${errorThrown}`); // 例外情報
            console.log(`URL            :${url}`);
        });
    });


})
