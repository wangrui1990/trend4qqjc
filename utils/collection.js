/**
 * Created by wr on 2016/6/17.
 */
var request = require('request');
var cheerio = require('cheerio');
var url = require('url');
var Batch      = require('../proxy').Batch;
exports.index = function(req, res, next) {
var _url="https://qs.888.qq.com/gametws/dicegame/ReadBatchListInfo?gameid=8&bettype=2&ajax=true&cms_where=1366&vb2ctag=4_2013_1_3077&bc_web=140778934&t=1466309160539&g_tk=1735533773&_=1466309160540";
    var _cookie="RK=OYOCc+0XZo; gaduid=5762604f43615; o_cookie=714319148; same_pc=%7B%7D; pvid=8310839250; flv=22.0 r0; pgv=ssid=s8716252028; bc_web=28647e5b848; pt2gguin=o0714319148; uin=o0714319148; skey=@Uy6RyFmib; ptisp=cnc; luin=o0714319148; lskey=00010000bfbed153cc886c3a7d4a6145b5f1e31c192df4a4ac09028af7eb25f82e46483d959b9558dbecfe9e; ptcz=e6207de6996bcd80a630435c02b863cc67610734777b664826fe26c7a02e7191; 1074773757=html; pgv_info=ssid=s3212055100; ts_last=qs.888.qq.com/m_qq/active/lg.gameFlower.html; ts_refer=ui.ptlogin2.qq.com/cgi-bin/login; pgv_pvid=8310839250; ts_uid=6631750104";

    var options = {
        url: _url,

        headers: {
            'User-Agent': 'request',
            'Cookie': _cookie

        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            var jsonobj = JSON.parse(body);
            if (jsonobj.hasOwnProperty("errMsg"))//出错
            {
                //login failed
            }
            else if (jsonobj.hasOwnProperty("hisbatchlist")) {//cookie未过期
                var history=jsonobj.hisbatchlist;
                console.log(history);
                for(var a in history) {
                    console.log(a);
                    var onebatch=history[a];
                    console.log(onebatch);
                    var dateObj = new Date(onebatch.starttime*1000);
                    var batchresult_str_arr =String( onebatch.batchresult).split("|");
                    if(batchresult_str_arr.length==3) {
                        var batchresult = new Array()
                        batchresult[0] = Number(batchresult_str_arr[0]);
                        batchresult[1] = Number(batchresult_str_arr[1]);
                        batchresult[2] = Number(batchresult_str_arr[2]);

                        Batch.newAndSave(onebatch.batchno, batchresult, dateObj, onebatch.textResult, function (err, reply) {
                            console.log(err)
                        });
                    }
                }
            }
            res.send("ddddd");
        }
    }

    request(options, callback);











    // request({url: _url, jar: j}, function () {
    //     request(_url, function (error, response, body) {
    //         if (!error && response.statusCode == 200) {
    //             var jsonobj = JSON.parse(body);
    //             if(jsonobj.hasOwnProperty("errMsg"))//出错
    //             {
    //                 Reply.newAndSave(Date(),jsonobj.errMsg , function (err,reply) {
    //                 });
    //             }
    //             else if(jsonobj.hasOwnProperty("errMsg")){//cookie未过期
    //
    //             }
    //
    //             res.send("ddddd");
    //         }
    //         else
    //         {
    //             res.render('index', { title:error  });
    //         }
    //     })
    // });

};