var myApp = angular.module("myApp", ["angularUtils.directives.dirPagination"]);
function MyController($scope) {
  $scope.currentPage = 1;
  $scope.pageSize = 10;
}

myApp.controller("MyController", MyController);

window.Product1Controller = function ($scope, $http) {
  $scope.keyboards = [];
  $http.get(keyboardAPI).then(function (response) {
    if (response.status == 200) {
      $scope.keyboards = response.data;
    }
  });

  $scope.keyboardBrand = [];
  $http.get(keyboardBrandAPI).then(function (response) {
    if (response.status == 200) {
      $scope.keyboardBrand = response.data;
    }
  });

  $scope.sort_price = "Mới nhất";
  $scope.filter_price = function (product) {
    if ($scope.sort_price === "price_asc") {
      return product.price;
    } else if ($scope.sort_price === "Mới nhất") {
      return product.brand === $scope.brandModel;
    } else if ($scope.sort_price === "price_desc") {
      return product.price;
    }
  };

  $scope.sortBySelect = function () {
    if ($scope.sort_price === "price_asc") {
      return "false";
    } else if ($scope.sort_price === "price_desc") {
      return "true";
    }
  };

  $scope.brandModel = "Thương hiệu";
  $scope.filter_products1 = function (item) {
    if ($scope.brandModel === null) {
      return item.onSale === true;
    } else {
      return item.brand === $scope.brandModel;
    }
  };
};
