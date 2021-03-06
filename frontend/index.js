// Node.js の http モジュールを読み込む
const http = require('http'); 
const fs = require('fs');
const Router = require('router');
const finalhandler = require('finalhandler');

const router = Router();

 let indexHandler =(req,res) =>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // ejsをhtmlに変換したファイルを読み込む
    html = fs.readFileSync('./dist/html/index.html');
    res.end(html);
} 
let serviceHandler =(req,res) =>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // ejsをhtmlに変換したファイルを読み込む
    html = fs.readFileSync('./dist/html/service.html');
    res.end(html);
} 

let userCreateHandler =(req,res) =>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    html = fs.readFileSync('./dist/html/create_user.html');
    res.end(html);
}
//静的ファイルを返すハンドラ
let staicHandler = (req,res) =>{
    let kind = req.url.split("/")[1]
    let file_name =  req.url.split("/")[2]
    res.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    file = fs.readFileSync(`./${kind}/${file_name}`);
    //対象のファイルがない場合の処理を書くこと
    res.end(file);
} 

//https://github.com/pillarjs/router
//ルーティング処理
// TODO:別ファイルに記載する
router.get('/',indexHandler)
router.get('/service',serviceHandler)
router.get('/create_user',userCreateHandler)
router.get('/js/:path',staicHandler)
router.get('/css/:path',staicHandler)

// サーバーを生成
const server = http.createServer(requestListener = (req,res)=>{
    router(req,res,finalhandler(req,res))
});

// ポート番号:8081で受け付け開始
server.listen(port = 8081);

