// export-contents.js
const fs = require('fs');
const path = require('path');

// Adjust this path to point to your Desktop
const outputFilePath = path.join(process.env.HOME, 'Desktop', 'front-end-extract-contents.txt');

// List of specific files outside of src to export
const filesToExport = [
    'App.js',
    'README.md',
    'app.json',
    'babel.config.js',
    'package-lock.json',
    'package.json',
];

// Directory to include all files from (e.g., src)
const directoriesToIncludeAll = [
    'src',
];

// Utility function to recursively read files from a directory
function readFilesRecursively(dirPath, fileList = []) {
    fs.readdirSync(dirPath).forEach(file => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            readFilesRecursively(filePath, fileList);
        } else if (stat.isFile() && /\.(js|json|txt|md)$/.test(file)) {
            // Include only certain file types
            fileList.push(filePath);
        }
    });
    return fileList;
}

// Collect all specified files
const allFiles = [
    ...filesToExport.map(file => path.join(__dirname, file)),
];

// Collect all files in specified directories
directoriesToIncludeAll.forEach(dir => {
    const fullPath = path.join(__dirname, dir);
    if (fs.existsSync(fullPath)) {
        allFiles.push(...readFilesRecursively(fullPath));
    } else {
        console.warn(`Warning: ${dir} does not exist.`);
    }
});

// Function to write contents to the output file
function writeContentsToFile(filePaths) {
    const writeStream = fs.createWriteStream(outputFilePath);
    writeStream.write('Contents of specified files and all files in src:\n\n');

    filePaths.forEach(filePath => {
        if (fs.existsSync(filePath)) {
            const relativePath = path.relative(__dirname, filePath);
            const content = fs.readFileSync(filePath, 'utf8');
            writeStream.write(`\n\n--- ${relativePath} ---\n\n`);
            writeStream.write(content);
        } else {
            console.warn(`Warning: ${filePath} does not exist.`);
        }
    });

    writeStream.end();
    console.log(`Contents exported to ${outputFilePath}`);
}

// Run the function
writeContentsToFile(allFiles);
