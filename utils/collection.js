/**
 * Created by wr on 2016/6/17.
 */
var request = require('request');
var cheerio = require('cheerio');
var url = require('url');
var cnodeUrl = 'https://cnodejs.org/';
var Reply      = require('../proxy').Reply;
exports.index = function(req, res, next) {

    request('https://cnodejs.org/', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                Reply.newAndSave(Date(),$element.attr('title') , function (err,reply) {
                });
                items.push({
                    title: $element.attr('title'),
                    href:  url.resolve(cnodeUrl, $element.attr('href'))
                });
            });
            res.send(items);
        }
        else
        {
            res.render('index', { title:error  });
        }
    })

};