newspaper.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];
  factory.addCourse = function() {
    factory.beats.push({ name: factory.beatName, id: factory.beats.length +1, reporters: [] });
    factory.beatName = null;
  };

  return factory;
});
