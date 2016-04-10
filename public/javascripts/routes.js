app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/initial");

  $stateProvider
  .state('initial', {
    url: "/",
    templateUrl: "partials/home.html",
    controller: "MainController"
  })
  .state('contact', {
    url: "/contact",
    templateUrl: "partials/contact.html",
    controller: "MainController"
  })
  .state('hours', {
    url: "/hours",
    templateUrl: "partials/hours.html",
    controller: "MainController"
  })
  .state('mens_hair_replacement', {
    url: "/mens_hair_replacement",
    templateUrl: "partials/service_partials/mens_hair_replacement.html",
    controller: "MainController"
  })
  .state('mens_haircuts_and_shaves', {
    url: "/mens_haircuts_and_shaves",
    templateUrl: "partials/service_partials/mens_haircuts_and_shaves.html",
    controller: "MainController"
  })
  .state('mens_manicures_and_pedicures', {
    url: "/mens_manicures_and_pedicures",
    templateUrl: "partials/service_partials/mens_manicures_and_pedicures.html",
    controller: "MainController"
  })
  .state('womens_hair_replacement', {
    url: "/womens_hair_replacement",
    templateUrl: "partials/service_partials/womens_hair_replacement.html",
    controller: "MainController"
  })

  $locationProvider.html5Mode(true);
});
