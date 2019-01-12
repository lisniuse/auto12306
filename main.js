const fly = require("flyio")
const url = require("url")

const main = async function () {
    let res = await fly.get("http://zhibing.org/");
    console.log(res);
}

const test = function () {
    var https = require('https');
    var fs = require('fs');
    var ca = fs.readFileSync('./srca.cer.pem');
    
    var options = { 
      hostname: 'kyfw.12306.cn',
      path: '/otn/leftTicket/init',
      ca: [ ca ]
    };
    
    var req = https.get(options, function(res){ 
      res.pipe(process.stdout); 
    });
    
    req.on('error', function(err){
      console.error(err);
    });
}
test()