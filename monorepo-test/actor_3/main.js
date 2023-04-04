import { Actor } from 'apify';
import utils from '../shared/utils.js';

await Actor.init()

utils.print('actor-3');

await Actor.exit();
