module.exports = function(o, i) {
	var p = '';
	for (l = 0, m = 1, t = 0; i >= t; l++) {
		m *= o.length;
		t += m;
	}
	var d = 1;
	for (var j = 0; j < l; j++) {
		p += o[parseInt((i - (t / o.length - 1)) / d) % o.length];
		d *= o.length;
	}
	return p;
};
