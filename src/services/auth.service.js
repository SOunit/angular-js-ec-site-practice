(function () {
  "use strict";

  angular.module("app").service("AuthService", AuthService);

  function AuthService() {
    var service = this;

    service.isLogin = false;

    service.login = function () {
      console.log("login");
      this.isLogin = true;
    };

    service.logout = function () {
      console.log("logout");
      this.isLogin = false;
    };
  }
})();
