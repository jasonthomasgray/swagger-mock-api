
export default class BooleanParser {
    canParse(node) {
        return node.type === 'boolean';
    }

    parse(node, chance) {
        return chance.bool(node['x-type-options']);
    }
}
