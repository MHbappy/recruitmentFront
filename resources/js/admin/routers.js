/**
 * Created by bappy on 11/27/16.
 */

(function () {

    'use strict';
    angular.module('recruitment.admin', []).config(function($stateProvider, $urlRouterProvider)
    {
          $urlRouterProvider.when('/admin/dashboard', '/admin/dashboard/home');



        $stateProvider.state('admin',
            {
                abstract: true,
                url : '/admin',
                templateUrl : './resources/views/admin/base.html',
                 controller: ''
            }
        )

        $stateProvider.state('dash',
            {
                parent : 'admin',
                url : '/dashboard',
                templateUrl : './resources/views/admin/dashboard.html',
                controller: ''
            }
        )

        $stateProvider.state('homeRecruite',{
            parent : 'dash',
            url : '/home',
            templateUrl : './resources/views/admin/home.html',
            controller : ""

        });

        $stateProvider.state('createPost',{
           parent : 'dash',
            url : '/createPost',
            templateUrl : './resources/views/admin/createPost.html',
            controller : ""

        });

        $stateProvider.state('writtenExam',{
            parent : 'dash',
            url : '/writtenExam',
            templateUrl : './resources/views/admin/inviteForWrittenExam.html',
            controller : ""

        });

        $stateProvider.state('viva',{
            parent : 'dash',
            url : '/viva',
            templateUrl : './resources/views/admin/selectionForViva.html',
            controller : ""

        });

        $stateProvider.state('appointment',{
            parent : 'dash',
            url : '/appointment',
            templateUrl : './resources/views/admin/appointment.html',
            controller : ""

        });

        $stateProvider.state('aboutRecruit',{
            parent : 'dash',
            url : '/about',
            templateUrl : './resources/views/admin/about.html',
            controller : ""

        });
    });

})();