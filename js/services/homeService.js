let HomeService = function($http, PARSE) {
  let url = PARSE.URL + 'classes/contactus';
  this.newNote=newNote;

  function Note  (noteObj) {
    this.name = noteObj.name;
    this.email = noteObj.email;
    this.website = noteObj.website;
    this.comment = noteObj.comment;

  } 

  function newNote (noteObj) {
    console.log(noteObj);
    let n = new Note(noteObj);
    return $http.post(url, n, PARSE.CONFIG);
  }

};

HomeService.$inject = ['$http', 'PARSE'];

export default HomeService;