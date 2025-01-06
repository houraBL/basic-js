const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  VigenereCipheringMachine () {
    this.type = 'direct'
  }

  constructor (type = true) {
    if (type === true) {
      this.type = 'direct'
    } else {
      this.type = 'reverse'
    }
  }

  encrypt(message, key) {
    let result = ''
    if (!message || !key || typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    message = message.toUpperCase();
    key = key.toUpperCase()
    let keyIndex = 0;
    let maxKeyIndex = key.length;
    for (let i = 0 ; i < message.length; i++) {
      if ( /[A-Z]/.test(message[i])) {
        result += String.fromCharCode(((message.charCodeAt(i) + key.charCodeAt(keyIndex) - 65 * 2)% 26 + 65))
        keyIndex ++
        if (keyIndex === maxKeyIndex) {
          keyIndex = 0;
        }
      } else {
        result += message[i];
      }
    }
    if (this.type === 'direct') {
      return result;
    } else {
      
      return result.split('').reverse().join('');
    }
  }

  decrypt(message, key) {
    let result = ''
    if (!message || !key || typeof message !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    message = message.toUpperCase();
    key = key.toUpperCase()
    let keyIndex = 0;
    let maxKeyIndex = key.length;
    for (let i = 0 ; i < message.length; i++) {
      if ( /[A-Z]/.test(message[i]))  {
        result += String.fromCharCode((message.charCodeAt(i) - key.charCodeAt(keyIndex) + 26 ) % 26 + 65);
        keyIndex ++
        if (keyIndex === maxKeyIndex) {
          keyIndex = 0;
        }
      } else {
        result += message[i];
      }
    }
    if (this.type === 'direct') {
      return result;
    } else {
      
      return result.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
