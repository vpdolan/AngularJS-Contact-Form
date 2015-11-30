let HomeController = function ($scope, PARSE, HomeService) {

  let vm = this;
  
  vm.title = 'Contact Us';

  vm.newNote = newNote;

  function newNote (noteObj) {
    HomeService.newNote(noteObj).then( (response) => { 
     $scope.noteObj = {};
  });
}

let validateName = function(newValue) {
  if (newValue.length > 0) {
    vm.errMsg1 = 'Valid Name';

  } else {
    vm.errMsg1  = 'Please enter a valid name';
  }
};

$scope.$watch('noteObj.name', function (newValue, prevValue) {
    if(!newValue) return;
    validateName(newValue);
});

let validateEmail = function(newValue) {
  let x = newValue.includes('@');

  if (x === true) {
    vm.errMsg2 = 'Valid Email';
  } else {
    vm.errMsg2 = "Please enter a valid email";
  }
};

$scope.$watch('noteObj.email', function (newValue, prevValue) {
  if(!newValue) return;
  validateEmail(newValue);
});

let validateWebsite = function(newValue) {
  let x = newValue.includes('http://');
  let y = newValue.includes('https://');
  if (x === true || y === true) {
    vm.errMsg3 = 'Valid Web Address';
  } else {
    vm.errMsg3 = 'Please enter a web address starting with http:// or https://'
  }      
};

$scope.$watch('noteObj.website', function (newValue, prevValue) {
  if (!newValue) return;
  validateWebsite(newValue);
});

let validateComment = function(newValue) {
    if (newValue.length > 0) {
      vm.errMsg4 = 'Valid Comment';
    } else {
      vm.errMsg4 = 'Please do not leave blank!';
    }
  };

  $scope.$watch('noteObj.comment', function (newValue, prevValue) {
    if(!newValue) return;
    validateComment(newValue);
  });

};

HomeController.$inject = ['$scope', 'PARSE', 'HomeService'];

export default HomeController;