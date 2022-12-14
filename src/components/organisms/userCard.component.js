(function () {
  "use strict";

  angular.module("app").component("userCard", {
    templateUrl: "/src/components/organisms/userCard.html",
    controller: userCardController,
  });

  userCardController.$inject = [
    "AuthService",
    "$rootScope",
    "constants",
    "$scope",
  ];
  function userCardController(AuthService, $rootScope, constants, $scope) {
    var $ctrl = this;

    $rootScope.$on(constants.ngHeaderLoginSuccess, function (event, data) {
      console.log("event", event);

      _updateUser(data.user);
    });

    $rootScope.$on(constants.ngHeaderLogoutSuccess, function (event, data) {
      console.log("event", event);

      _updateUser(data.user);
    });

    function _updateUser(user) {
      if (user) {
        $scope.$apply(function () {
          console.log("_updateUser user", user);
          $ctrl.user = user;
        });
      } else {
        $ctrl.user = user;
      }
    }
  }
})();
