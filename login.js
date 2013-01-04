var Chimera = require('chimera').Chimera;
var fs = require('fs');
var cred = require('./credentials.js');

var c = new Chimera({
	libraryCode: fs.readFileSync("jquery.js")
});

c.perform({
	url: "https://courseworks.columbia.edu/portal/login",
	locals:cred.columbia,
	run: function(callback){
		//the form exists
		if(jQuery('[name="theform"]').length > 0){
			jQuery('[name="username"]').val(username);
			jQuery('[name="password"]').val(password);
			jQuery('form').submit();
		}
		else{
			callback(null, "success");
		}
	},
	callback:function(error, result){
		c.capture("screenshot.png");
		console.log("Screenshot created.");
		cookies = c.cookies();
		c.close();
	}
});
