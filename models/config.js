/**
 * Created by wr on 2016/6/20.
 */
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var ConfigSchema = new Schema({
    updatetime: { type: Date },
    _cookie: { type: String}
});

mongoose.model('Config', ConfigSchema);