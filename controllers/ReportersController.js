newsPaper.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName, experience: $scope.reporterExperience, age: $scope.reporterDOB });
    $scope.reporterName = null;
    $scope.reporterExperience = null;
    $scope.reporterDOB = null;
  }
});
