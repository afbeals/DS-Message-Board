// Angular Controller
// Dashboard Controller
  DiscussionBoard.controller('DashboardController', function($scope, UsersFactory, TopicsFactory)
  {


    
  });

// Topic Controller
  DiscussionBoard.controller('TopicController', function($scope, UsersFactory, TopicsFactory)
  {
    // create arrays to pull data from database and have front end cycle through and display each item in array
    var users = [];
    var topics = [];
    var answer = [];
    var comment = [];
    // temp currentUser variable to track user, future change to object similar to session
    var currentUser = ''; 

    // use scope to access global functions made available by angular
    $scope.addTopic = function()
    {
      // console log data being pulled to ensure data will look as expected correct type
      console.log($scope.add_topic);
      // old functions will update to fit procject v
      // TopicsFactory.addTopic($scope.add_topic, function()
      // {
      //   TopicsFactory.getTopics(function(data)
      //   {
      //     $scope.topics = data;
      //   })
      // })
      // UsersFactory.addUser($scope.add_topic, function()
      //   {
      //   });

      // clear object to make it ready for next added topic
      $scope.add_topic={};
    }
  
  });
