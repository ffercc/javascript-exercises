const removeFromArray = function(arr, ...values) {
	values.forEach(function(value, indexValues, values) {
		arr.forEach(function(arrValue, indexArr, arr) {
			if (arrValue === value) arr.splice(indexArr, 1);
		});
	});
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
