window.NewController = function ($scope, $http) {
  $scope.news = [];
  $http.get(newsAPI).then(function (response) {
    if (response.status == 200) {
      $scope.news = response.data;
    }
  });
};
