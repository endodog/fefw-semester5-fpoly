window.LoginController = function ($scope, $http) {
  $scope.email;
  $scope.password;

  $scope.accounts = [];
  $http.get(accountAPI).then(function (response) {
    $scope.accounts = response.data;
  });

  $scope.checkAccount = function () {
    $http.get(accountAPI).then(function (response) {
      $scope.accounts = response.data;
      for (var i = 0; i < $scope.accounts.length; i++) {
        if (
          $scope.accounts[i].id === $scope.email &&
          $scope.accounts[i].password === $scope.password
        ) {
          alert("Đăng nhập thành công");
        }
      }
    });
  };
};
