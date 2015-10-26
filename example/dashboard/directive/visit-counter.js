// Directive will be implemented with <element dashboard-visit-counter></element>.
// Directive name is prefixed with module name to ensure it is unique.
// Unlike controllers, services, factories and providers, directives are not injected and do not require such differentiation.

angular.module('dashboard').directive('dashboardVisitCounter', function () {
    return {
        restrict: 'A',
        scope: {title: '@dashboardVisitCounter'},
        bindToController: true,
        templateUrl: 'dashboard/partial/visit-counter.html',

        // Verbose as this is, the variable in the partial will be clear and unique.
        controllerAs: 'dashboardControllerVisitCounter',

        // Use of controllerAs means that $scope variables can be assigned to 'this'.
        controller: function (dashboardServiceVisitCounter) {
            this.visits = dashboardServiceVisitCounter.visits;
        }
    };
});
