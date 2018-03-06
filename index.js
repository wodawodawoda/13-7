const fs = require('fs'),
	StatMode = require('stat-mode'),
	colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
	const statMode = new StatMode(stats);
	// console.log(statMode.toString());
});

fs.readFile('./text.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisem:'.blue);
	console.log(data);
	let message = '\nTekst, który zapiszemy w pliku text.txt';
	fs.appendFile('./text.txt', message, function(err) {
		if (err) throw err;
		console.log('Zapisano!'.blue);
		fs.readFile('./text.txt', 'utf-8', function(err, data) {
			console.log('Dane po zapisie:'.blue);
			console.log(data);
		});
	});
});

fs.readdir('../13-7', function(err, files) {
	fs.writeFile('./dir-info.txt', files.join('\n'), function(err) {
		console.log('Zapisano strukturę folderu w pliku dir-info.txt'.blue);
		console.log(files.join('\n'));
	});
});