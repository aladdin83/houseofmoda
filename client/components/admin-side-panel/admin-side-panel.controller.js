'use strict';

angular.module('houseofmodaApp')
	.controller('AdminSidePanelCtrl', function($scope){
		$scope.adminMenu = [
			{
				'title': 'Dashboard',
				'state': 'admin'
			},
			{
				'title': 'Users Management',
				'state': 'user-management'
			},
			{
				'title': 'Items Management',
				'state': 'items-management'
			},
			{
				'title': 'Messages',
				'state': 'messages'
			},
			{
				'title': 'Locations Management',
				'state': 'locations-management'
			}
		];
	});