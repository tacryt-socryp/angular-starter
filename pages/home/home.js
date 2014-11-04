module.exports = function (ngModule) {

  ngModule.config([
    "$stateProvider",
    function ($stateProvider) {

      $stateProvider.state("home", {
        url: "/",
        //url: "/", //For production
        controller: require("./controllers/home.ctrl.js"),
        template: require("./templates/home.jade")
      });
    }
  ]);

};
