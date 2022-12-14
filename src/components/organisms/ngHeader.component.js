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

        // update state
        ngHeader.isLogin = AuthService.isLogin;

        // broadcast event
        $rootScope.$broadcast(constants.ngHeaderLogoutSuccess, {
          user: AuthService.user,
        });
      } else {
        await AuthService.login();

        // update state
        $scope.$apply(function () {
          ngHeader.isLogin = AuthService.isLogin;
        });

        // broadcast event
        $rootScope.$broadcast(constants.ngHeaderLoginSuccess, {
          user: AuthService.user,
        });
      }
    };
  }
})();
