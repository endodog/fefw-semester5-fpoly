window.DetailsController = function ($scope, $http, $routeParams) {
  $scope.keyboards = [];
  $http.get(keyboardAPI).then(function (response) {
    if (response.status == 200) {
      $scope.keyboards = response.data;
    }
  });

  $scope.getByBrand = function (item) {
    return item.brand === $scope.brand;
  };

  $http.get(keyboardAPI + $routeParams.id).then(function (response) {
    if (response.status == 200) {
      $scope.id = response.data.id;
      $scope.image = response.data.image;
      $scope.name = response.data.name;
      $scope.brand = response.data.brand;
      $scope.status = response.data.status;
      $scope.productCode = response.data.productCode;
      $scope.priceAfterFalling = response.data.priceAfterFalling;
      $scope.price = response.data.price;
      $scope.guarantee = response.data.guarantee;
    }
  });

  $scope.addProductInCartAndPayment = function () {
    $http
      .post(cartAPI, {
        nameProduct: $scope.name,
        imageProduct: $scope.image,
        priceProduct: $scope.price,
        amountTotal: $scope.amount,
        // idProduct:
      })
      .then(function (response) {
        if (response.status == 201) {
          alert("Thêm thành công " + $scope.name + " vào giỏ hàng");
        }
      });
  };

  $scope.addProductInCart = function () {
    $http
      .post(cartAPI, {
        nameProduct: $scope.name,
        imageProduct: $scope.image,
        priceProduct: $scope.price,
        amountTotal: $scope.amount,
        // idProduct:
      })
      .then(function (response) {
        if (response.status == 201) {
          alert("Thêm thành công");
        }
      });
  };
  $scope.increaseProduct = function () {
    $scope.amount++;
  };

  $scope.reduceProduct = function () {
    if ($scope.amount == 1) {
      $scope.amount = 1;
    } else {
      $scope.amount--;
    }
  };

  $scope.amount = 1;
  $scope.itemsCurrent = $scope;
};
