(function () {
  "use strict";

  angular.module("app").component("userCard", {
    templateUrl: "/src/components/organisms/userCard.html",
    controller: userCardController,
  });

  userCardController.$inject = ["AuthService", "$rootScope", "constants"];
  function userCardController(AuthService, $rootScope, constants) {
    var $ctrl = this;

    $rootScope.$on(constants.ngHeaderLoginSuccess, function (event, data) {
      console.log("event", event);
      console.log("data", data);

      var user = AuthService.user;
      console.log(user);

      if (user) {
        $ctrl.user = user;
      }
    });
  }
})();
