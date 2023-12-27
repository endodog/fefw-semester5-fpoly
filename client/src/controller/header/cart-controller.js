app.controller("cartController", _itemsInCart);

function _itemsInCart($scope, $http) {
  $scope.carts = [];
  $http.get(cartAPI).then(function (response) {
    if (response.status == 200) {
      $scope.carts = response.data;
    }
  });

  $scope.carts.length;
  $scope.carts.totalMoney = 0;
}
