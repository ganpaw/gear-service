/**
 * This file contains mainModule with injecting dependencies, routing and configuration.
 *
 * @version 1.0
 * @author Dmitry
 * @since 04.09.2015
 */
angular.module("mainModule", ['gettext', 'ui.utils', 'ui.router', 'angularMoment', 'ngMaterial', 'md.data.table',
    'angular-loading-bar', 'templates', 'angular-cache', 'duScroll'])
    .value('duScrollDuration', 3000)
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('cheque', {
                abstract: true,
                url: "/cheques",
                views: {
                    "header": {
                        controller:
                            ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state) {
                                $scope.selectedTab = $state.current.data.selectedTab;

                                $rootScope.$on('$stateChangeSuccess',
                                    function(event, toState, toParams, fromState, fromParams) {
                                        $scope.selectedTab = toState.data.selectedTab;
                                    });
                        }],
                        template: '<header selected-tab="selectedTab"></header>'
                    },
                    "content": {
                        template: "<ui-view></ui-view>"
                    }
                }
            })
            .state('cheque.filter', {
                url: "^/filter",
                template: "<filters-page></filters-page>",
                data: {'selectedTab': 0}
            })
            .state('cheque.edit', {
                url: "^/cheque/{chequeId:[0-9]{1,10}}",
                controller:
                    ['$scope', '$stateParams', function($scope, $stateParams) {
                        $scope.chequeID = $stateParams.chequeId;
                    }],
                template: '<cheque-page cheque-id="chequeID"></cheque-page>',
                data: {'selectedTab': 1}
            })
            .state('cheque.create', {
                url: "^/cheque",
                template: '<cheque-page></cheque-page>',
                data: {'selectedTab': 1}
            })
            .state('cheque.profile', {
                url: "^/profile",
                template: '<profile-page></profile-page>',
                data: {'selectedTab': 3}
            });

            $urlRouterProvider.when('', '/filter');
            $urlRouterProvider.otherwise('/filter');
    }])
    .config(['$mdThemingProvider', function($mdThemingProvider){
            $mdThemingProvider
                .theme('payment')
                .primaryPalette('grey', {'default':'50'})
                .accentPalette('pink')
                .warnPalette('red');

            $mdThemingProvider
                .theme('header')
                .primaryPalette('grey', {'default': '900'})
                .accentPalette('indigo');

            $mdThemingProvider
                .theme('tabs')
                .primaryPalette('grey', {'default': '900'})
                .accentPalette('indigo');
    }])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 100;
    }])
    .run(['gettextCatalog', 'amMoment',
        function(gettextCatalog, amMoment){
            gettextCatalog.setCurrentLanguage('ru');
            amMoment.changeLocale('ru');
    }]);