// Component naming standard is [module]Service[Name]

angular.module('dashboard').service('dashboardServiceVisitCounter', function (toolkitServiceCookie) {
    this.visits = function () {
        return toolkitServiceCookie.get('visits');
    };
    this.visit = function () {
        var visits = toolkitServiceCookie.get('visits') * 1 || 0;
        visits += 1;
        toolkitServiceCookie.set('visits', visits, Infinity);
    };
});
