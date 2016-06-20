/**
 * Created by xx on 2016/6/16.
 */
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;


var BatchSchema = new Schema({
    batchno: { type: String, unique: true },
    batchresult: { type: Array},
    starttime: { type: Date},
    textResult: { type: String}
});

mongoose.model('Batch', BatchSchema);
