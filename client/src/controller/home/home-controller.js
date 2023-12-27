window.HomeController = function($scope, $http) {
  $scope.keyboards = [];
  $http.get(keyboardAPI).then(function(response) {
    if (response.statusText == "OK") {
      $scope.keyboards = response.data;
    }
  });
  $scope.keyboardBrand = [];
  $http.get(keyboardBrandAPI).then(function(response) {
    if (response.statusText == "OK") {
      $scope.keyboardBrand = response.data;
    }
  });
  $scope.keycaps = [];
  $http.get(keycapAPI).then(function(response) {
    if (response.statusText == "OK") {
      $scope.keycaps = response.data;
    }
  });
  $scope.keycapBrand = [];
  $http.get(keycapBrandAPI).then(function(response) {
    if (response.statusText == "OK") {
      $scope.keycapBrand = response.data;
    }
  });
  $scope.news = [];
  $http.get(newsAPI).then(function(response) {
    if (response.statusText == "OK") {
      $scope.news = response.data;
    }
  });
};
