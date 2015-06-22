var data = require('../data/data.js');

exports.occupations = function(req, res) {
	if (req.params.ord === 'asc') {
		res.json(data.me.occupations.slice().sort());
	} else if (req.params.ord === 'des') {
		res.json(data.me.occupations.slice().sort().reverse());
	} else if (req.params.ord === 'latest') {
		res.json(data.me.occupations[0]);
	} else if (!req.params.ord) {
		res.json(data.me.occupations);
	}
}; // get occupations

exports.hobbies = function(req, res) {
	if(req.params.ord === 'asc') {
		res.json(data.me.hobbies.slice().sort());
	} else if(req.params.ord === 'des') {
		res.json(data.me.hobbies.slice().sort().reverse());
	} else if (!req.params.ord) {
		res.json(data.me.hobbies);
	}
}; // get hobbies