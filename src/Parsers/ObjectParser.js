import hoek from 'hoek';

export default class ObjectParser {
    constructor(parser) {
        this.parser = parser;
    }
    canParse(node) {
        return !!node.properties;
    }

    parse(node, chance) {
        return this.generateObject(node, chance);
    }

    generateObject(node, chance) {
        let ret = {};
        let schema = hoek.clone(node);
        schema = schema.properties || schema;

        for (let k in schema) {
            ret[k] = this.parser.parse(schema[k], chance);
        }

        return ret;
    }
}
