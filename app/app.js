require("angular-material/angular-material.min.css");
require("./scss/app.scss");
// require('./controllers/controller');
// var angular = require('angular'); //Angular already loaded
var app = angular.module('myApp', ['ngMaterial']);
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('orange');
});


app.controller('AppCtrl', require('./controllers/controller'));
