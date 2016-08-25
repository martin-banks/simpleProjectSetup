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
	labels: [
		'Make folder',
		'Make HTML file',
		'EXIT'
	]
}


function addMenuLabels(){
	state.labels.map((label, index)=>{
		menu.add(` ${label}`)
	})
}



menu.reset();
menu.write('Project menu\n');
menu.write('-------------------------\n');
 
addMenuLabels()



menu.on('select', function (label) {
	label = label.trim('') 
	if (label === 'EXIT'){
		menu.close();
	} else if (label === 'Make folder') {
		prompt.start();
		prompt.get(['Please type a folder name'], function(err, result){
			var cmd = `
				mkdir ${result.folderName} && ls
				`;
			exec(cmd, function(error, stdout, stderr) {
				// command output is in stdout
				console.log(stdout)
			});
		})

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