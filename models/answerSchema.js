var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var autoIncrementFactory = require('mongoose-sequence');
var connection = mongoose.createConnection("CONNECTION STRING REDACTED FOR SECURITY",{useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false });
var autoIncrement = autoIncrementFactory(connection);

var answerSchema = new Schema({
	selection: String,
	}, {
    timestamps: true
});


answerSchema.plugin(autoIncrement, {inc_field: 'id'});



var Answer = mongoose.model('answers', answerSchema, 'answers');

/*Answer.counterReset('id', function(err) {
    // Now the counter is 0
});*/

module.exports.Answer = Answer;
module.exports = mongoose.model('answers', answerSchema);
