
export default class ByteParser {
    canParse(node) {
        return node.type === 'byte';
    }

    parse(node, chance) {
        return new Buffer('' + chance.integer({ min: 0, max: 255 })).toString('base64');
    }
}
