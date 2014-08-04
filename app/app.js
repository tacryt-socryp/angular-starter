require("angular");
require("angular-ui-router");

var pages = angular.module("starter:pages", []);
var components = angular.module("starter:components", []);

require("../components/components.js")(components);
require("../layout/layout.js")(pages);
require("../pages/pages.js")(pages);

var app = angular.module("starter", [
  "ui.router",
  "starter:components",
  "starter:pages"
]);

app.config([
  "$locationProvider",
  function ($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("!");
  }
]);

module.exports = app;
