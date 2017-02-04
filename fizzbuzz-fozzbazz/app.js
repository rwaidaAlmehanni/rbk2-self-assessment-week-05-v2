angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function(){
  	   var service={};
  	       service.counter=0;
  	       service.increment=function(){
  	       	this.counter++;
  	       	return this.counter;
  	       };
  	return service.increment;
  })
  .controller('fizzbuzzCtrl', function($scope,counter){
  	$scope.display="";
  	if(counter%5===0 && counter%3===0){
  			$scope.display="FIZZBUZZ"
  	   }
  	else if(counter%3===0){
  		$scope.display="FIZZ";
  	}else if(counter%5===0){
  		$scope.display="BUZZ";
  	}
   
  })
  .controller('fozzbazzCtrl', function($scope,counter){
  	  $scope.display="";
  	 if(counter%4===0 && counter%6===0){
  		$scope.display="FOZZBAZZ"
  	   }
  	   else if(counter%4===0){
  		$scope.display="FOZZ";
  	  }else if(counter%6===0){
  		$scope.display="BAZZ";
  	}


  });
