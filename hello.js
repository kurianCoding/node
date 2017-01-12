fs=require('fs');
path=require('path');

function(filepathprefix,extenstion){
filepathprefix=path.normalize(filepathprefix);
extenstion='.'+extenstion;
fs.readdir(filepathprefix,function(err,data){
    if(err){
	console.log(err);
	return;
    }
    data.forEach(function(filename){
	if(path.extname(filename)==extenstion){
	    console.log(filename);
	}
    })
});
}

