window.RegisterController = function ($scope, $http) {
  $scope.addNew = function () {
    if ($scope.name == "" || $scope.name == undefined) {
      $scope._name = "Bạn chưa nhập họ tên";
    }
    if ($scope.password == "" || $scope.password == undefined) {
      $scope._password = "Bạn chưa nhập password";
    }
    if ($scope.phone == "" || $scope.phone == undefined) {
      $scope._phone = "Bạn chưa nhập phone";
    }
    if ($scope.email == "" || $scope.email == undefined) {
      $scope._email = "Bạn chưa nhập email";
    }
    if (
      $scope.name != "" &&
      $scope.name != undefined &&
      $scope.password != "" &&
      $scope.password != undefined &&
      $scope.phone != "" &&
      $scope.phone != undefined &&
      $scope.email != "" &&
      $scope.email != undefined
    ) {
      $http
        .post(accountAPI, {
          name: $scope.name,
          id: $scope.email,
          password: $scope.password,
          phone: $scope.phone,
        })
        .then(function (response) {
          if (response.status == 201) {
            alert("Đăng ký thành công");
          }
        });
    }
  };
  $scope.resetErrorInput1 = function (keyEvent) {
    if (keyEvent.which == "") {
      $scope._name = "Vui lòng nhập họ tên";
    } else {
      $scope._name = "";
    }
  };
  $scope.resetErrorInput2 = function (keyEvent) {
    if (keyEvent.which == "") {
      $scope._email = "Vui lòng nhập email";
    } else {
      $scope._email = "";
    }
  };
  $scope.resetErrorInput3 = function (keyEvent) {
    if (keyEvent.which == "") {
      $scope._password = "Vui lòng nhập password";
    } else {
      $scope._password = "";
    }
  };
  $scope.resetErrorInput4 = function (keyEvent) {
    if (keyEvent.which == "") {
      $scope._phone = "Vui lòng nhập số điện thoại";
    } else {
      $scope._phone = "";
    }
  };
};
