/**
 * A basic AMD module management system for the web.
 * @author XU Kai(xukai.ken@gmail.com)
 * @version 0.1 initialize the base framework
 */

;(function(global) {
	Modular = {};

	var modules = {};

	define = function() {
		var options = Modular.formArray(arguments);
		var _len = options.length;
		if (_len == 1) {

		} else if (_len == 2) {
			var tp = options[0], dependence;
			if ((tp) == '[object Array]') {
				dependence == tp
			}
		}
	};

	// 遵循AMD规范，且支持jQuery框架。
	define.amd = {
		jQuery : true
	};

	require = function() {

	};

})(this);
