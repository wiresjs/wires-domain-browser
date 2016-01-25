(function() {

   domain.register("$a", function() {
      return "a";
   });

   domain.register("$b", function() {
      return "b";
   });

   domain.register("$c", function($a, $b) {
      return "c";
   });

   domain.register("$test", ['$a', '$b', '$c'], function($a, $b, $c) {
      return "hello";
   });
   var start = new Date().getTime();
   domain.require(function($test) {
      console.log(new Date().getTime() - start);
   });

   var a = new Promise(function(resolve, reject) {
      setTimeout(function() {
         console.log("YEEP")
         return resolve(1);
      }, 1000)
   });
   var b = new Promise(function(resolve, reject) {
      setTimeout(function() {
         console.log("YEEP")
         return resolve(2);
      }, 1000)
   });
   domain.each([a, b]).then(function(results) {
      console.log(results);
   })

})();
