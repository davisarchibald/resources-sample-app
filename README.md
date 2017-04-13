# Resources Sample App

## Starter

This was built using this Angular ES6 starter pack: [AngularClass/NG6-Starter](https://github.com/AngularClass/NG6-starter)

## Build commands

* `gulp` to start dev server
* `npm test` to run tests
* `npm run build` to build production build

## TODOs:

* Build out more tests
* Make better decisions with images/icons
* LINTING!

## Things I'd like to change

* Don't love how my factories are manipulating the original object/array. Would love to spend some time figuring out a better solution that allows for some semblance of immutability. Didn't have time to figure that one out.

* I would like to do more of my testing outside of Karma. Especially things like the factory. That seems like an un-necessary abstraction. Testing in Node and using something like [jsdom](https://www.npmjs.com/package/jsdom) could probably do a lot of things for you.

* Found it to be odd that the starter pack uses both gulp and webpack to do dev work. Seems a bit redundant.

## Third party code/components

* Angular Material component library
* Angular Material icons
