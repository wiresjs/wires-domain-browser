(function() {
   domain.register("$test", function() {
      return "hello"
   });

   domain.register("$other", function() {
      return new Promise(function(resolve, reject) {
         setTimeout(function() {
            resolve({
               test: 1
            })
         }, 1000)
      })
   });


   domain.require(['$test', '$other'], function($test, $other) {
      console.log($test, $other)
   })
})();
