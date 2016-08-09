'use strict';

const yaml = require('js-yaml');
const fs = require('fs');


const data = yaml.safeLoad(fs.readFileSync('src/data.yml', 'utf-8'));

fs.writeFileSync(
  'dist/data.json',
  JSON.stringify(data)
);