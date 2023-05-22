const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const folderPath = path.resolve(__dirname, '../SHA3-256');
const email = 'valery.nosareu@gmail.com';

const fileNames = fs.readdirSync(folderPath);
const hashes = fileNames.map((fileName) => {
  const filePath = `${folderPath}/${fileName}`;
  const fileData = fs.readFileSync(filePath);
  const hash = crypto.createHash('sha3-256').update(fileData).digest('hex');
  return hash;
});

const formattedHashes = hashes.map((hash) => hash.toLowerCase());

formattedHashes.sort();

const joinedHashes = formattedHashes.join('');

const concatenatedString = joinedHashes + email;

const finalHash = crypto.createHash('sha3-256').update(concatenatedString).digest('hex');

console.log(finalHash);
