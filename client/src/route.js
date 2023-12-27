var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      templateUrl: "./pages/home.html",
      controller: HomeController,
    })
    .when("/home", {
      templateUrl: "./pages/home.html",
      controller: HomeController,
    })
    .when("/login", {
      templateUrl: "./pages/login.html",
      controller: LoginController,
    })
    .when("/register", {
      templateUrl: "./pages/register.html",
      controller: RegisterController,
    })
    .when("/products1", {
      templateUrl: "./pages/products1.html",
      controller: Product1Controller,
    })
    .when("/products1/:id", {
      templateUrl: "./pages/details.html",
      controller: DetailsController,
    })
    .when("/cart", {
      templateUrl: "./pages/cart.html",
      controller: CartController,
    })
    .when("/managements", {
      templateUrl: "./pages/management.html",
      controller: ManagementController,
    })
    .when("/news", {
      templateUrl: "./pages/news.html",
      controller: NewsController,
    })
    .otherwise({
      redirecTo: "/home",
    });
});
