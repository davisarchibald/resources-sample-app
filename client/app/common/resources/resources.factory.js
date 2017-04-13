import keygen from 'keygen';

export default function ResourceFactory() {
    let resources = [{
        name: 'Google',
        url: 'http://google.com',
        description: 'Search Engine Site',
        type: 'website',
        shareable: true,
        id: 64846489464
    }];
    const types = [
        'website',
        'podcast',
        'book'
    ];
    const createEmptyResource = (type) => {
        return {
            url: '',
            description: '',
            type,
            shareable: false,
            id: keygen.url(keygen.small)
        };
    };
    const addResource = (resource) => {
        resources.push(resource);
    };
    const removeResource = (index) => {
        resources.splice(index, 1);
    };
    const editResource = (index, resource) => {
        resources[index] = resource;
    }
    return {
        resources,
        addResource,
        createEmptyResource,
        types,
        editResource,
        removeResource
    };
};
