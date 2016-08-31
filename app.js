// https://www.npmjs.com/package/terminal-menu
var exec = require('child_process').exec;
var prompt = require('prompt');

var Menu = require('terminal-menu');
/*
Colors:
black
blue
green
yellow
cyan
white
magenta
red
*/

var menu = Menu({ 
	width: 50, 
	x: 4,
	y: 2,
	bg:'white',
	fg:'black'
});

var state = {
	menuTitle: 'NEW PROJECT CREATOR',
	labels: [
		'New project structure',
		'EXIT'
	]
}


function addMenuLabels(){
	state.labels.map((label, index)=>{
		menu.add(` ${label}`)
	})
}



menu.reset();
menu.write(`${state.menuTitle}\n`);
menu.write('-------------------------\n');
 
addMenuLabels()



menu.on('select', function (label) {
	label = label.trim('') 
	if (label === 'EXIT'){
		menu.close();
	} else if (label === state.labels[0]) {
		// new project structure
		prompt.start();
		let question = 'Project_name';
		prompt.get([question], function(err, result){
			var cmd = `cd ~/github_projects && \
				mkdir ${result[question]} && \
				cd ${result[question]} && \
				mkdir src && \
				mkdir dist && \
				touch src/index.html && \
				touch src/app.js && \
				npm init -y && \
				echo "<html>\n"\
					"<head>\n"\
						"<title>Document</title>\n"\
					"</head>\n"\
					"<body>\n"\
						"\n"\
					"</body>\n"\
					"</html>\n"\
					> src/index.html &&\
				sublime .
			`;
			exec(cmd, function(error, stdout, stderr) {
				// command output is in stdout
				console.log(stdout)
			});
			if(err){
				console.log(err)
			}
		})

	} else if (label === 'Add label') {	
		//menu.close();	
		var cmd = 'cd ~';
		exec(cmd, function(error, stdout, stderr) {
			// command output is in stdout
			console.log(stdout)
		});

	} else if(label === 'blah'){

		menu.close();
		console.log('new menu!!!')
	} else {
		menu.close();
		console.log('SELECTED: ' + label);
	}
    
});
process.stdin.pipe(menu.createStream()).pipe(process.stdout);
 
process.stdin.setRawMode(true);
menu.on('close', function () {
	process.stdin.setRawMode(false);
	process.stdin.end();
});