var app = angular.module('ophentis.github.io',[]);

app.controller('MainController',function($scope) {
	$scope.me = {
		"my name": "Willy Tseng",
		"speaks": ["English","Chinese"],
		"is a": [
			"Software Engineer",
			"Web Developer"
		],
		"not a": [
			"Designer"
		],
		"skills": {
			"general": ["JavaScript","C/C++","Java"],
			"web": {
				"frontend":[
					"HTML",
					"JavaScript",
					"CSS",
					"LESS",
					"SCSS",
					"jQuery",
					"Zepto",
					"AngularJS",
					"Google Api",
					"Facebook Api"],
				"backend":[
					"NodeJS",
					"JSP",
					"PHP",
					"MySQL",
					"Apache"
				]
			}
		},
		"about me":""
	};

	$scope.meJSONString = JSON.stringify($scope.me);
});