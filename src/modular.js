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
      var length = options.length;
      if (length) {
         var tp = options[0];
         var name, dependence, fn;

         if ( typeof tp == 'string') {
            name = tp;
            dependence = options[1] || [];
            fn = options[3] || Modular.emptyFunction;
         }
         if (Modular.isArray(tp)) {
            dependence = tp;
            fn = options[1] || Modular.emptyFunciton;
         }
         if ( typeof tp == 'function')
            fn = tp;

      }
   };

   // 遵循AMD规范，且支持jQuery框架。
   define.amd = {
      jQuery : true
   };

   require = function() {
      
   };

})(this);
