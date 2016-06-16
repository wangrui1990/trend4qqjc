/**
 * Created by xx on 2016/6/16.
 */
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;


var ReplySchema = new Schema({
    kjtime: { type: Date },
    kjjg: { type: String}

});

mongoose.model('Reply', ReplySchema);
