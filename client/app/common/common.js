import angular from 'angular';
import Navbar from './navbar/navbar';
import Resources from './resources/resources';

let commonModule = angular.module('app.common', [
  Navbar,
  Resources
])

.name;

export default commonModule;
