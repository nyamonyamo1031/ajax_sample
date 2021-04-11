//ES6から書かなければいけないもの
'use strict';

let $ = require('jquery');

// 引数に対してプラス1するだけの関数
// アロー関数の書き方
//変数の中に関数を入れるのは変わらない
const func_add_one = (number) =>{
    console.log("number*",number)
    console.log("number+1*",number+1)
    return number+1
}

//読み込んだら即実行意味
$(function(){
    $.ajax({
        url: 'http://localhost:5000/user',
        type: 'GET',
        dataType: 'json'
    }).done(function(data){
        /* 通信成功時 */
        for (let i in data){
            //こうゆう時にテンプレートエンジン使いたいな。
            console.log(`data:${data}`)
            console.log(`i:${i}`)
            console.log(`id:${data[i].id}`)
            console.log(`name:${data[i].name}`)
            console.log(`age:${data[i].age}`)
            console.log("ファイルの取得に成功しました");
            let key_count = Number(i) + 1
            $('#user').append(`<div class="user_${key_count} user__item"></div>`);
            $(`.user_${key_count}`).append(`<div class="id"><a href="./user/${data[i].id}">${data[i].id}</a></div>`);
            $(`.user_${key_count}`).append(`<div class="name">${data[i].name}</div>`);
            $(`.user_${key_count}`).append(`<div class="age">${data[i].age}</div>`);
        }
        //alert('通信成功!');
        
    }).fail(function(jqXHR, textStatus, errorThrown){
        /* 通信失敗時 */

        console.log("ajax通信に失敗しました");
        console.log(`jqXHR          :${jqXHR.status}`); // HTTPステータスが取得
        console.log(`textStatus     :${textStatus}`);    // タイムアウト、パースエラー
        console.log(`errorThrown    :${errorThrown}`); // 例外情報
        console.log(`URL            :${url}`);
})
