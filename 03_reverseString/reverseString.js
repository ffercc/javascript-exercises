const reverseString = function(str) {
	let length = str.length;
	let result = "";
	for (i = length-1; i >= 0; i--) {
		result += str.charAt(i);
	}
	return result;
};

// Do not edit below this line
module.exports = reverseString;
