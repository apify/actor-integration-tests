const _ = require('underscore');

// A random package that we use for testing
const { LoremIpsum } = require('lorem-ipsum');

if (!_.isObject(LoremIpsum)) throw new Error('Something is wrong');
