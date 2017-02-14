console.log('current js file ' + _filename);
console.log('current js dir' + _dirname);

process.name = 'Sample Nodejs';

cosnole.log('arguments: ' + JSON.stringify(process.argv));
console.log('cwd' + process.cwd());

var d = 'private/tmp';

if (process.platform === 'win32'){
    d = 'C:\\W'
}
