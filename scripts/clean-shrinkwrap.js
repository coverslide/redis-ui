import fs from 'fs';
import shrinkwrap from '../npm-shrinkwrap.json';

delete shrinkwrap.dependencies.fsevents;

fs.writeFileSync(__dirname + '/../npm-shrinkwrap.json', JSON.stringify(shrinkwrap, null, 2));