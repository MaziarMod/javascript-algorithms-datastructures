class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      return this.keyMap[index].filter((keyValue) => keyValue[0] === key)[0][1]; // return value of the key
    }
    return undefined;
  }

  values() {
    return this.keyMap
      .filter((el) => el)
      .map((keyVal) => keyVal[0][1])
      .reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
      }, []);
  }

  keys() {
    return this.keyMap
      .filter((el) => el)
      .map((keyVal) => keyVal[0][0])
      .reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
      }, []);
  }
}

console.log('-------- Create a Hash Table ---------> Done!');
let hashTable = new HashTable();

console.log('-------- Set value in the Hash Table -------> Done!');
hashTable.set('key 1', 'value 1');
hashTable.set('key 2', 'value 2');
hashTable.set('key 3', 'value 3');
hashTable.set('key 4', 'value 4');
hashTable.set('key 5', 'value 5');
hashTable.set('key 6', 'value 6');
hashTable.set('key 7', 'value 6');

console.log('-------- Print the key map array -------> Done!');
console.log(hashTable.keyMap);

console.log('-------- get key/value pair in the Hash Table -------> Done!');
console.log(hashTable.get('key 6'));
console.log(hashTable.get('key 1111'));

console.log('-------- get values of the Hash Table -------> Done!');
console.log(hashTable.values());

console.log('-------- get keys of the Hash Table -------> Done!');
console.log(hashTable.keys());
