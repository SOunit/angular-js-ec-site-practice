(function () {
  "use strict";

  angular.module("app", ["ui.router"]).config(RoutesConfig);

  // $stateProvider, $urlRouterProvider are from ui-router package
  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/tab1");

    // setup ui states
    $stateProvider
      .state("tab1", {
        url: "/tab1",
        templateUrl: "/src/components/pages/randomPosts.html",
      })
      .state("tab2", { url: "/tab2", template: "<div>tab2</div>" });
  }
})();
