(function () {
  "use strict";

  angular.module("app").config(RoutesConfig);

  // $stateProvider, $urlRouterProvider are from ui-router package
  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/top");

    // setup ui states
    $stateProvider
      .state("top", {
        url: "/top",
        templateUrl: "/src/pages/top.html",
      })
      .state("another", {
        url: "/another",
        templateUrl: "/src/pages/anotherPage.html",
      });
  }
})();
