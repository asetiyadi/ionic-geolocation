angular.module('starter.controllers', [])

.controller('DeviceController', ['$scope','$cordovaDevice','$ionicPlatform',
function ($scope, $cordovaDevice, $ionicPlatform) {
	$ionicPlatform.ready(function () {
		$scope.deviceInfo = $cordovaDevice.getDevice();
		$scope.$digest();
	});
}]);