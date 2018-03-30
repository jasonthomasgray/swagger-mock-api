
export default class EnumParser {
    canParse(node) {
        return !!node.enum;
    }

    parse(node, chance) {
        return this.parseEnum(node.enum, chance);
    }

    parseEnum(enumNode, chance) {
        let index = chance.integer({min: 0, max: enumNode.length - 1});
        return enumNode[index];
    }
}
