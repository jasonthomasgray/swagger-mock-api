'use strict';

import Chance from 'chance';
import hoek from 'hoek';
import Parser from './Parsers/Parser'
let parser = new Parser();

export default function MockData(definition, path) {
  let schema = definition.schema;

  if (!schema) return null;

  const chance = new Chance(path);
  return parser.parse(schema, chance);
};
