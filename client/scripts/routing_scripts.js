  DiscussionBoard.config(function($routeProvider)
  {
    $routeProvider
      .when('/', {templateUrl: 'partials/welcome_partial.html', controller: 'WelcomeController'})
      .when('/home', {templateUrl: 'partials/home_partial.html', controller: 'HomeController'})
      .when('/topic', {templateUrl: 'partials/topics_partial.html', controller: 'TopicController'})
      .otherwise({redirectTo: '/'});
  });