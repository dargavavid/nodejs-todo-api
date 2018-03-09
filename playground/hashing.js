const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

const hashedPassword = '$2a$10$cPX2MsBLw9ajDwDWd08fXe1tOrvjnacY6hvMv3UYzH70hkWD5cbOO';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});
// const data = {
//     id: 4
// };

// const token = jwt.sign(data, '123abc');
// console.log(typeof token);

// const decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// const message = 'I\'m user number 3';
// const hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// const data = {
//     id: 4
// };

// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed.');
// } else {
//     console.log('Data was changed, do not trust.');
// }