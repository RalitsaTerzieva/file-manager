import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const directoryPath = path.join(__dirname, 'files');

if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
    console.log('Created directory.');
}

const newFilePath = path.join(directoryPath, 'example.txt');
fs.writeFileSync(newFilePath, 'Hello, this is a file!', 'utf-8');
console.log('Created a new file.');

// List files in directory
const files = fs.readdirSync(directoryPath);
console.log('Files in directory:', files);

const content = fs.readFileSync(newFilePath, 'utf-8');
console.log('Content of example.txt:', content);
