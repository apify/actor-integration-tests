const Apify = require('apify');

Apify.main(async () => {
    await Apify.setValue('OUTPUT', 'branch=master,dir=root/dir/subdir');
});
