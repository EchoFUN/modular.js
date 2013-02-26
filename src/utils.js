/**
 * modular.js utils pack.
 * @author XU Kai(xukai.ken@gmail.com)
 * @version 0.1 initialize the base framework
 */

;(function(global) {

	var _getType = function(object) {
		return Object.prototype.toString.call(object);
	};
	
	global.isArray = function(object) {
		return _getType(object) === '[object Function]';
	};

	global.isFunction = function(object) {
		return _getType(object) === '[object Array]';
	};
	
	global.formArray = function(object) {
		return Array.prototype.slice.call(object);
	};

})(Modular);
