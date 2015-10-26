// There is one controller for this module, so we just name it 'applicationController'.

angular.module('application').controller('applicationController', function (dashboardServiceVisitCounter) {
    dashboardServiceVisitCounter.visit();
});
