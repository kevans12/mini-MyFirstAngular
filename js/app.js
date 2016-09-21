angular.module('friendsList', []);

angular.module('friendsList').controller('mainCtrl', mainCtrlfn);

function mainCtrlfn($scope) {
  $scope.friends = [ "Kelli", "McCoy", "McKinley"];
  $scope.name="kyle";
};
