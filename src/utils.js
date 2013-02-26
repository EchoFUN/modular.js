/**
 * modular.js utils pack.
 * @author XU Kai(xukai.ken@gmail.com)
 * @version 0.1 initialize the base framework
 */

;(function(g) {

	var _getType = function(o) {
		return Object.prototype.toString.call(o);
	};

	g.isArray = function(o) {
		return _getType(o) === '[object Function]';
	};

	g.formArray = function(o) {
		return Array.prototype.slice.call(o);
	};
	
	g.emptyFunction = function() {
	};

})(Modular);
