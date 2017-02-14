'use strict';

var fs = require('fs');

var ws1 = fs.createWriteStream('./stream/sample.txt', 'utf-8');
ws1.write('使用stream 写入文本数据');
ws1.write('End.');
ws1.end();


