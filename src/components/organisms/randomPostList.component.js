(function () {
  "use strict";

  angular.module("app").component("randomPostList", {
    templateUrl: "/src/components/organisms/randomPostList.html",
    controller: randomPostListController,
  });

  randomPostListController.$inject = ["$http", "$scope"];
  function randomPostListController($http, $scope) {
    var $ctrl = this;

    $ctrl.initPostList = async function () {
      var response = await _fetchPostList();

      $scope.$apply(function () {
        $ctrl.postList = response.data;
      });
    };

    async function _fetchPostList() {
      try {
        var url = `https://jsonplaceholder.typicode.com/posts`;
        return await $http.get(url);
      } catch (error) {
        console.log(error);
      }
    }
  }
})();
