(function() {
   domain.register("$a", function() {
      return "this is a";
   });

   domain.register("$b", ["$a"], function(pukka) {
      return "BBB " + pukka;
   });
   domain.require(function($b) {
      console.log("b is", $b)
   })

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



   domain.require(['$test', '$other'],function($test, $other) {
      console.log("**********", here)
   })

   var a = [1, 2, 3];
   domain.each(a, function(num) {
      if (num === 2) {
         return new Promise(function(resolve, reject) {
            setTimeout(function() {
               console.log(num)
               resolve("hello")
            }, 500)
         })
      } else {
         console.log(num)
         return num;
      }
   }).then(function(results) {
      console.log(results)
   })
})();
