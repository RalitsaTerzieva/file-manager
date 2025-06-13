// File: index.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define directory to manage files
const directoryPath = path.join(__dirname, 'files');

// 1️⃣ Create directory if it doesn't exist
if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
    console.log('Created directory.');
}

// 2️⃣ Write a new file
const newFilePath = path.join(directoryPath, 'example.txt');
fs.writeFileSync(newFilePath, 'Hello, this is a file!', 'utf-8');
console.log('Created a new file.');

// 3️⃣ List files in directory
const files = fs.readdirSync(directoryPath);
console.log('Files in directory:', files);

// 4️⃣ Read the new file
const content = fs.readFileSync(newFilePath, 'utf-8');
console.log('Content of example.txt:', content);
