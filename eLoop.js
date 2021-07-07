const { pbkdf2 } = require('crypto');

const start = Date.now();

const hash = () => {
    pbkdf2('myPass', 'verySecretString', 10000, 1000, 'sha256', () => {
        console.log('Hash', Date.now()-start);
    });
};

hash();
hash();
hash();
hash();
console.log('Hello! I will be executed first.')
