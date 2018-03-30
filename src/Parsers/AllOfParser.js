
export default class AllOfParser {
    constructor(parser) {
        this.parser = parser;
    }

    canParse(node) {
        return !!node.allOf;
    }

    parse(node, chance) {
        return this.generateObject(node, chance);
    }

    generateObject(node, chance) {
        return node.allOf
            .reduce((s, o) => Object.assign(s, this.parser.parse(o, chance)), {});
    }
}
