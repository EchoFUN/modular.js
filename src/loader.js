/**msie
 * The js or css file loader for modular.js.
 * @author XU Kai(xukai.ken@gmail.com)
 * @version 0.1 initialize the base framework
 */

;(function(global) {

   var header = document.getElementsByClassName('head')[0];

   var scriptLoaded = function() {
      
   };

   global.load = function(url) {
      var script = document.createElement('script');

      var brownserInfo = global.brownser();
      if (brownserInfo.msie) {
         script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
               script.onreadystatechange = null;
               scriptLoaded();
            }
         };
      } else {
         script.onload = function() {
            scriptLoaded();
         };
      }

      script.src = url;
      header.appendChild(script);
   };

})(Modular);
