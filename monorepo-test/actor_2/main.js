import { Actor } from 'apify';
import utils from '../shared/utils.js';

await Actor.init()

utils.print('actor-2');

await Actor.exit();
