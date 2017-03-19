var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exampleSchema = new Schema({
  exampleName: { type: String },
  exampleDescription: { type: String },
  exampleImage_url: { type: String },
  exampleAddresses:[],
  exampleRating:  {type: Number }
});

var Example = mongoose.model("Example", exampleSchema);
module.exports = Example;
