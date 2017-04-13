// specs here
import ResourceFactory from './resources.factory';

describe('ResourceFactory', () => {
    describe('init', () => {
        const resourceFactory = ResourceFactory();
        expect(resourceFactory.resources).to.deep.equal([{
            name: 'Google',
            url: 'http://google.com',
            description: 'Search Engine Site',
            type: 'website',
            shareable: true,
            id: 64846489464
        }]);
    });
});
