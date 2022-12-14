(function () {
  "use strict";

  angular.module("app").component("post", {
    templateUrl: "/src/components/organisms/post.html",
    bindings: {
      post: "<",
    },
  });
})();
