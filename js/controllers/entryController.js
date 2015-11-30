



let EntryController = function($scope, PARSE, EntryService) {

  let vm = this;

  vm.title = 'Entries';

  vm.note = getNote();

  function getNote () {
    EntryService.getEntries().then( (response) => {
      vm.note = response.data.results;
    });
  }
};


EntryController.$inject = ['$scope', 'PARSE', 'EntryService'];

export default EntryController;

//using one validation for all fields
// import angular from 'angular';
// angular
//   .module('app', [])
//   .controller('FormController', function () {
//     let vm = this;
//     vm.addContact = addContact;
//     function addContact (contactObj) {
//       if (!validateEmpty(contactObj.name)) {
//         return console.log('name is empty')
//       }

//     }

//     function validateEmpty (field) {
//       return field ? true : false;

//     function validateEmail (field) {
//        return (field.indexOf)('@') >= 0)? true : false;
//     }

//     function valdiateWebsite (field) {
//       var pattern = /^https?:\/\//i;
//       return patter.test(field);
//     }
//     }


//   }
// check for empty field first.  console log after each to see how data is being stored/displayed

