window.CartController = ($scope, $http) => {
  $scope.name_city;
  $scope.carts = [];
  $scope.totalMoney;
  $http.get(cartAPI).then(function(response) {
    if (response.status == 200) {
      $scope.carts = response.data;
    }
  });

  $scope.citys = [];
  $http.get(cityAPI).then((response) => {
    if (response.status == 200) {
      $scope.citys = response.data;
    }
  });
  $scope.districts = [];
  $http.get(districtAPI).then(function(response) {
    if (response.status == 200) {
      $scope.districts = response.data;
    }
  });

  $scope.carts.length;
  $scope.filterDistrictByCity = function(item) {
    return item.codeCity == $scope._city_code;
  };

  $scope.removeItem = function(id, event) {
    event.preventDefault();
    $http.delete(cartAPI + id).then(function(response) {
      if (response.status == 200) {
        alert("Xóa thành công");
      }
    });
  };

  $scope.payment = function() {
    if ($scope._city_code == "" || $scope._city_code == undefined) {
      $scope.selectCity = "Vui lòng chọn Tỉnh/Thành";
    }
    if ($scope._district == "" || $scope._district == undefined) {
      $scope.selectDistrict = "Vui lòng chọn Quận/Huyện";
    }
    if ($scope.name == "" || $scope.name == undefined) {
      $scope._name = "Vui lòng nhập họ tên";
    }
    if ($scope.phone == "" || $scope.phone == undefined) {
      $scope._phone = "Vui lòng nhập số điện thoại";
    }
    if ($scope.address == "" || $scope.address == undefined) {
      $scope._address = "Vui lòng nhập địa chỉ";
    }
    if ($scope._city_code != "" &&
      $scope._city_code != undefined &&
      $scope._district != "" &&
      $scope._district != undefined &&
      $scope.name != "" &&
      $scope.name != undefined &&
      $scope.phone != "" &&
      $scope.phone != undefined &&
      $scope.address != "" &&
      $scope.address != undefined) {
      alert("Thanh toán thành công");
    }
  };

  $scope.resetErrorInput1 = function(keyEvent) {
    if (keyEvent.which == "") {
      $scope._name = "Vui lòng nhập họ tên";
    } else {
      $scope._name = "";
    }
  };
  $scope.resetErrorInput2 = function(keyEvent) {
    if (keyEvent.which == "") {
      $scope._phone = "Vui lòng nhập số điện thoại";
    } else {
      $scope._phone = "";
    }
  };
  $scope.resetErrorInput3 = function(keyEvent) {
    if (keyEvent.which == "") {
      $scope._address = "Vui lòng nhập địa chỉ";
    } else {
      $scope._address = "";
    }
  };

  $scope.resetErrorOption = function() {
    if ($scope._city_code != undefined) {
      $scope.selectCity = null;
    }
    if ($scope._district != undefined) {
      $scope.selectDistrict = null;
    }
  };
};
