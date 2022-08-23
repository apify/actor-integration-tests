const _ = require('underscore');
const { Actor } = require('apify');

// A random package that we use for testing, it's not included by 'apify' package
const { LoremIpsum } = require('lorem-ipsum');

if (!_.isObject(LoremIpsum)) throw new Error('Something is wrong');

Actor.main(async () => {
    const input = await Actor.getValue('INPUT');

    await Actor.setValue('OUTPUT', 'Everything is fine', { contentType: 'text/plain'});
});
