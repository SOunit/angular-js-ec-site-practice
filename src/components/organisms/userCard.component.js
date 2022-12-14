(function () {
  "use strict";

  angular.module("app").component("userCard", {
    templateUrl: "/src/components/organisms/userCard.html",
    controller: userCardController,
  });

  userCardController.$inject = ["AuthService"];
  function userCardController(AuthService) {
    var $ctrl = this;

    var user = AuthService.user;
    console.log(user);

    if (user) {
      $ctrl.user = user;
    }
  }
})();
