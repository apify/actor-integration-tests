import { Actor, log } from 'apify';
import { load } from 'cheerio';
import { gotScraping } from 'got-scraping';
import { sleep } from '@crawlee/utils';

// This is an actor that checks if the proxy access is working.
// It opens a http://proxy.apify.com/ and checks if the status is "connected".

await Actor.init();

const input = await Actor.getInput();

const CONNECTED_STATUS = 'connected';

const proxyConfig = await Actor.createProxyConfiguration({});

let response;
let lastError;

// Requests via proxy can fail, so we retry them.
for (let i = 0; i < 3; i++) {
    try {
        const proxyPageUrl = input.proxyPageUrl || 'http://proxy.apify.com/';
        log.info(`Accessing ${proxyPageUrl}`);
        response = await gotScraping({
            proxyUrl: await proxyConfig.newUrl(),
            url: proxyPageUrl,
        });
        break;
    } catch (e) {
        lastError = e;
        await sleep(1000 * (2 ** i));
    }
}

if (!response && lastError) throw lastError;

const $ = await load(response.body);
const status = await $('.status').text().toLowerCase();

await Actor.setValue('OUTPUT', { status });

// Exit successfully
await Actor.exit(status === CONNECTED_STATUS ? 0 : 1);
