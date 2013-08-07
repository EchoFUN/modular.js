/**
 * modular.js utils pack.
 * @author XU Kai(xukai.ken@gmail.com)
 * @version 0.1 initialize the base framework
 */

;(function(global) {

   var _getType = function(o) {
      return Object.prototype.toString.call(o);
   };

   global.isArray = function(o) {
      return _getType(o) === '[object Array]';
   };
   
   global.isArray = function(o) {
      return _getType(o) === '[object Function]';
   };

   global.getArray = function(o) {
      return Array.prototype.slice.call(o);
   };

   global.brownser = function() {
      var reg = {
         webkit : /(webkit)[ \/]([\w.]+)/,
         opera : /(opera)(?:.*version)?[ \/]([\w.]+)/,
         msie : /(msie) ([\w.]+)/,
         mozilla : /(mozilla)(?:.*? rv:([\w.]+))?/
      };
      
      ua = ua.toLowerCase();
      var match = reg.webkit.exec(ua) || reg.opera.exec(ua) || reg.msie.exec(ua) || ua.indexOf("compatible") < 0 && reg.mozilla.exec(ua) || [];
      return {
         browser : match[1] || "",
         version : match[2] || "0"
      };
   };
   
})(Modular.utils);
