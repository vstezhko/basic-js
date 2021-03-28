const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('');
      return this
    }
    this.chain.push(String(value));
    return this
  },
  removeLink(position) {
    if (!(Number.isInteger(position)) || (position > this.chain.length) || (position < 1)) {
      this.chain = [];
      throw new Error("Invalid position.")
    }
    this.chain.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let finish_chain = '( '+ this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return finish_chain
  },
  chain: [],
};

module.exports = chainMaker;
