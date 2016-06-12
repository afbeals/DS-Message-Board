  DiscussionBoard.config(function($routeProvider)
  {
    $routeProvider
      .when('/', {templateUrl: 'partials/welcome_partial.html', controller: 'WelcomeController'})
      .when('/home', {templateUrl: 'partials/home_partial.html', controller: 'HomeController'})
      .otherwise({redirectTo: '/'});
  });