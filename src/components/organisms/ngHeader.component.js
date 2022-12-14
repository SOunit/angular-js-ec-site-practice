(function () {
  "use strict";

  angular.module("app").component("ngHeader", {
    templateUrl: "src/components/organisms/ngHeader.html",
    controller: ngHeaderController,
  });

  ngHeaderController.$inject = ["AuthService"];
  function ngHeaderController(AuthService) {
    var ngHeader = this;

    ngHeader.isLogin = AuthService.isLogin;
  }
})();
