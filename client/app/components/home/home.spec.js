import HomeModule from './home'

describe('Home', () => {
  let $rootScope;
  let $state;
  let $location;
  let $componentController;
  let $compile;
  let Resources;

  beforeEach(window.module(HomeModule, ($provide) =>{
      $provide.factory('Resources', () => {
         return {
             resources: [],
             createEmptyResource: () => ({})
         }
      });
  }));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');

  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('home');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('home', {
        $scope: $rootScope.$new()
      });
    });

    it('has a resources property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('resources');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope;
    let template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<home></home>')(scope);
      scope.$apply();
    });

    it('has add resource button in template', () => {
      expect(template.html()).to.contain('Add Resource');
    });

  });
});
