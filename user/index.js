/**
 * Created by 1 on 25.08.2017.
 */
var phrases = require('./ru.json');
function User(name) {
    this.name = name
}
User.prototype.hello = function (who) {
    console.log(phrases.Hello + ", " + who.name)
};

console.log('User is required');

exports.User = User;