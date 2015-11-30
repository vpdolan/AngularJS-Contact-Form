let EntryService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/contactus';

  this.getEntries = getEntries;

  function getEntries () {
    return $http.get(url, PARSE.CONFIG);
  }

};

EntryService.$inject = ['$http', 'PARSE'];

export default EntryService;