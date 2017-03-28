var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  email: String,
  password_digest: String,
  created_at: Date,
  updated_at: Date
});

var ClimbSchema = new Schema({
	name: String
	
})

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now; }
  next();
});

var UserModel = mongoose.model('User', UserSchema);

var ClimbModel = mongoose.model('Climb', ClimbSchema);

module.exports = {
  User: UserModel,
  Climb: ClimbModel
}
