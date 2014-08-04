module.exports = function (ngModule) {
  ngModule.directive("laInput", [
    "$compile",
    function ($compile) {

      var link = function (scope, element, attrs) {
        console.log("la-input");
      };

      return {
        restrict: "AE",
        link: link
      };

    }
  ]);
};
