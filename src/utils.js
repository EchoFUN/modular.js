/**
 * A basic AMD module management system for the web: utils types.
 * @author XU Kai(xukai.ken@gmail.com)
 * @version 0.1 initialise the base framework
 *
 */

;(function(global) {

	global.formArray = function(iterable) {
		if (!iterable)
			return [];

		if ('toArray' in Object(iterable))
			return iterable.toArray();

		var length = iterable.length || 0, results = new Array(length);
		while (length--) {
			results[length] = iterable[length];
		};
		
		return results;
	};

})(Modular);
