/**
 * Created by 1 on 25.08.2017.
 */
var user = require('./user');
var vasya = new user.User("Вася");
var petya = new user.User("Петя");

vasya.hello(petya);


