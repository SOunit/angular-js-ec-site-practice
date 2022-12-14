(function () {
  "use strict";

  angular.module("app").component("ngButton", {
    templateUrl: "src/components/atoms/ngButton.html",
    bindings: {
      buttonText: "@",
    },
  });
})();
