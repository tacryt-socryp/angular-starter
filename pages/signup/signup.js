module.exports = function (ngModule) {

  ngModule.config([
    "$stateProvider",
    function ($stateProvider) {

      $stateProvider.state("signup", {
        url: "/signup",
        controller: require("./controllers/signup.ctrl.js"),
        template: require("./templates/signup.jade")
      });
    }
  ]);

};
