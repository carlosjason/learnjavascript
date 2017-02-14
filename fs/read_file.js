'use strict';

var fs = require('fs');

fs.readFile('sample.png',function(err,data){
    if(err){
        conosole.log(err);
    }else{
        console.log(data);
        console.log(data.length + 'bytes');
    }    
});


