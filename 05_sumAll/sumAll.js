const sumAll = function(ini, fin) {
	if ( ini < 0 || fin <0 ) return "ERROR";
	if ( ! Number.isInteger(ini) || ! Number.isInteger(fin) ) return "ERROR";
	let result = 0;
	if (ini < fin) {
		for (let i = ini; i <= fin; i++) {
			result += i;
		}
	} else {
		for (let i = fin; i <= ini; i++) {
			result += i;
		}
	}
	return result;
};

// Do not edit below this line
module.exports = sumAll;
