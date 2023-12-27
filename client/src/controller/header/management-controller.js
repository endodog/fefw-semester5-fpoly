window.ManagementController = function ($scope, $http) {
  $scope.code = "SP00";
  $scope.keyboards = [];
  $http.get(keyboardAPI).then(function (response) {
    if (response.status == 200) {
      $scope.keyboards = response.data;
    }
  });
  $scope.accounts = [];
  $http.get(accountAPI).then(function (response) {
    if (response.status == 200) {
      $scope.accounts = response.data;
    }
  });
  $scope.typesAccounts = [];
  $http.get(typesAccountAPI).then(function (response) {
    if (response.status == 200) {
      $scope.typesAccounts = response.data;
    }
  });

  $scope.keyboardBrand = [];
  $http.get(keyboardBrandAPI).then(function (response) {
    if (response.status == 200) {
      $scope.keyboardBrand = response.data;
    }
  });

  $scope.remove = function (id) {
    $http.delete(keyboardAPI + id).then(function (response) {
      if (response.status == 200) {
        alert("Xóa thành công");
      }
    });
  };
  $scope.removeAc = function (id, event) {
    event.preventDefault();
    $http.delete(accountAPI + id).then(function (response) {
      if (response.status == 200) {
        alert("Xóa thành công");
      }
    });
  };
  $scope.update = function () {
    $http
      .put(keyboardAPI + $scope.productCode, {
        name: $scope.name,
        image: $scope.image,
        price: $scope.price,
        onSale: $scope.onSale,
        priceAfterFalling: $scope.priceAfterFalling,
        brand: $scope.brand,
      })
      .then(function (response) {
        if (response.status == 200) {
          alert("Sửa thành công");
        }
      });
  };

  $scope.addNew = function () {
    $http
      .post(keyboardAPI, {
        name: $scope.name,
        image: $scope.image,
        price: $scope.price,
        onSale: $scope.onSale,
        priceAfterFalling: $scope.priceAfterFalling,
        brand: $scope.brand,
      })
      .then(function (response) {
        if (response.status == 201) {
          alert("Thêm thành công");
        }
      });
  };

  $scope.details = function (id) {
    $http.get(keyboardAPI + id).then(function (response) {
      $scope.id = response.data.id;
      $scope.name = response.data.name;
      $scope.productCode = response.data.productCode;
      $scope.image = response.data.image;
      $scope.price = response.data.price;
      $scope.onSale = response.data.onSale;
      $scope.priceAfterFalling = response.data.priceAfterFalling;
      $scope.brand = response.data.brand;
    });
  };
};
