(function () {
  "use strict";

  angular.module("app").component("ngHeader", {
    templateUrl: "/src/components/organisms/ngHeader.html",
    controller: ngHeaderController,
  });

  // FIXME: better approach without $scope.$apply?
  ngHeaderController.$inject = [
    "AuthService",
    "$scope",
    "$rootScope",
    "constants",
  ];
  function ngHeaderController(AuthService, $scope, $rootScope, constants) {
    var ngHeader = this;

    ngHeader.isLogin = AuthService.isLogin;

    ngHeader.updateAuthStatus = async function () {
      if (AuthService.isLogin) {
        AuthService.logout();
        ngHeader.isLogin = AuthService.isLogin;
        ngHeader.user = null;
      } else {
        await AuthService.login();
        $scope.$apply(function () {
          ngHeader.isLogin = AuthService.isLogin;
          ngHeader.user = AuthService.user;

          console.log(
            "constants.ngHeaderLoginSuccess",
            constants.ngHeaderLoginSuccess
          );

          $rootScope.$broadcast(constants.ngHeaderLoginSuccess);
        });
      }
    };
  }
})();
