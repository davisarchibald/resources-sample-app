import angular from 'angular';
import ResourceFactory from './resources.factory';

let userModule = angular.module('resources', [])

.factory('Resources', ResourceFactory)

.name;

export default userModule;
