let config = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    // Home State
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    })
    
    .state('root.entries', {
      url: '/entries',
      controller: 'EntryController as vm',
      templateUrl: 'templates/entries.tpl.html'
    })
  ;   
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;