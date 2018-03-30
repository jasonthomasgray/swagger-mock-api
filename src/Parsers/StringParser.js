import RandExp from 'randexp';

function getRandExp(chance) {
  return function randInt(from, to) {
    return chance.integer({min: from, max: to});
  }
}

export default class StringParser {
    canParse(node) {
        return node.type === 'string';
    }

    parse(node, chance) {
        return this.parseString(node, chance);
    }

    parseString(node, chance) {
        if (node.pattern) {
          const randexp = new RandExp(node.pattern);
          randexp.randInt = getRandExp(chance);
          return randexp.gen();
        }

        let options = this.resolveChanceOptions(node, chance);
        return chance.string(options);
    }

    resolveChanceOptions(node, chance) {
        let options = node['x-type-options'] || {};

        if (node.maxLength && node.minLength)
            options.length = chance.integer({ max: node.maxLength, min: node.minLength });
        else
            options.length = options.length || node.maxLength || node.minLength;

        return options;
    }
}
