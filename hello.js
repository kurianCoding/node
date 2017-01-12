fs=require('fs');
path=require('path');
module.exports=function(filepathprefix,extenstion,callback){
    filepathprefix=path.normalize(filepathprefix);
    extenstion='.'+extenstion;
    fs.readdir(filepathprefix,function(err,data){
	if(err){
	    return callback(err);
	}
	result=[];
	data.forEach(function(filename){
	    if(path.extname(filename)==extenstion){
		result.push(filename);
	    }
	})
	return callback(null,result);
    });
}

