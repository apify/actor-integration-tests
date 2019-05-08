const _ = require('underscore');
const Apify = require('apify');

// A random package that we use for testing, it's not included by 'apify' package
const { LoremIpsum } = require('lorem-ipsum');

if (!_.isObject(LoremIpsum)) throw new Error('Something is wrong');

Apify.main(async () => {
    const input = await Apify.getValue('INPUT');

    await Apify.setValue('OUTPUT', 'Everything is fine', { contentType: 'text/plain'});
});
