import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import PARSE from './constants/parse.constant';

import HomeController from './controllers/homeController';

import EntryController from './controllers/entryController';

import EntryService from './services/entryService';

import HomeService from './services/homeService'; 

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController) 
  .controller('EntryController', EntryController)
  .service('HomeService', HomeService)
  .service('EntryService', EntryService)
;