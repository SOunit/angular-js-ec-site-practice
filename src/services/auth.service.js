(function () {
  "use strict";

  angular.module("app").service("AuthService", AuthService);

  AuthService.$inject = ["$http"];
  function AuthService($http) {
    var authService = this;

    authService.isLogin = false;
    authService.user = null;

    authService.login = async function () {
      var id = Math.floor(Math.random() * 10);

      try {
        var response = await _fetchUser(id);
      } catch (error) {
        console.log(error);
      }

      if (response.status === 200) {
        authService.user = response.data;
        authService.isLogin = true;
      }
    };

    authService.logout = function () {
      authService.isLogin = false;
      authService.user = null;
    };

    async function _fetchUser(id) {
      var url = `https://jsonplaceholder.typicode.com/users/${id}`;
      return await $http.get(url);
    }
  }
})();
