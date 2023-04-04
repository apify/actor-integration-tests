import { Actor } from 'apify';
import utils from '../shared/utils.js';

await Actor.init()

console.dir(await Actor.getInput());

utils.print('actor-1');

await Actor.exit();
