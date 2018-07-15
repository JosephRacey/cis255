var app1 = angular.module('app1', []);

app1.controller('ctrl1', function($scope) {
	$scope.farenheit = 32;
	$scope.celcius = 0;
	
	$scope.a = "";
	$scope.b = "";
	$scope.c = "";
	
	$scope.cubicA = "";
	$scope.cubicB = "";
	$scope.cubicC = "";
	$scope.cubicD = "";
	
	$scope.quadradic = function() {
	$scope.solOne = (-1 * $scope.b + Math.sqrt(Math.pow($scope.b, 2) - (4 * $scope.a * $scope.c))) / (2 * $scope.a);
	$scope.solTwo = (-1 * $scope.b - Math.sqrt(Math.pow($scope.b, 2) - (4 * $scope.a * $scope.c))) / (2 * $scope.a);
	};
	
	$scope.updateTemp = function() {
	$scope.calculation = ($scope.farenheit - 32) * 5 / 9;
	}

	$scope.cubic = function(){
		roots = CubicSolve($scope.cubicA, $scope.cubicB, $scope.cubicC, $scope.cubicD);
		console.log(roots);
		$scope.cubicOne = roots[0].real;
		$scope.cubicOneImag = roots[0].i;
		$scope.cubicTwo = roots[1].real;
		$scope.cubicTwoImag = roots[1].i;
		$scope.cubicThree = roots[2].real;
		$scope.cubicThreeImag = roots[2].i;
}
});	

function CubicSolve(a, b, c, d){

  b /= a;
  c /= a;
  d /= a;

  var discrim, q, r, dum1, s, t, term1, r13;

  q = (3.0*c - (b*b))/9.0;
  r = -(27.0*d) + b*(9.0*c - 2.0*(b*b));
  r /= 54.0;

  discrim = q*q*q + r*r;
  
  var roots = [ {real: 0, i: 0}, {real: 0, i: 0}, {real: 0, i: 0} ]
  
  term1 = (b/3.0);

  if (discrim > 0) { // one root real, two are complex
   s = r + Math.sqrt(discrim);
   s = ((s < 0) ? -Math.pow(-s, (1.0/3.0)) : Math.pow(s, (1.0/3.0)));
   t = r - Math.sqrt(discrim);
   t = ((t < 0) ? -Math.pow(-t, (1.0/3.0)) : Math.pow(t, (1.0/3.0)));
   
   roots[0].real = -term1 + s + t;
   term1 += (s + t)/2.0;
   roots[2].real = roots[2].real = -term1;
   term1 = Math.sqrt(3.0)*(-t + s)/2;
   
   roots[1].i = term1;
   roots[2].i = -term1;
   return roots;
  } // End if (discrim > 0)

  // The remaining options are all real
  

  if (discrim == 0){ // All roots real, at least two are equal.
   r13 = ((r < 0) ? -Math.pow(-r,(1.0/3.0)) : Math.pow(r,(1.0/3.0)));
   roots[0].real = -term1 + 2.0*r13;
   roots[2].real = roots[1].real = -(r13 + term1);
   return roots;
  } // End if (discrim == 0)

  // Only option left is that all roots are real and unequal (to get here, q < 0)
  q = -q;
  dum1 = q*q*q;
  dum1 = Math.acos(r/Math.sqrt(dum1));
  r13 = 2.0*Math.sqrt(q);
  
  roots[0].real = -term1 + r13*Math.cos(dum1/3.0);
  roots[1].real = -term1 + r13*Math.cos((dum1 + 2.0*Math.PI)/3.0);
  roots[2].real = -term1 + r13*Math.cos((dum1 + 4.0*Math.PI)/3.0);
  
  return roots;
} 







