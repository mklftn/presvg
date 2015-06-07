// Manually initialize the router into a nested div

var polymerReady;
polymerReady = new ReactiveVar(false);

$(window).on("WebComponentsReady", function() {
  return polymerReady.set(true);
});

Meteor.startup(function() {
  return Tracker.autorun(function() {
    if (polymerReady.get()) {
    }
  });
});

// Permet d'affecter la bonne langue à la page
Meteor.startup(function() {
  var language = window.navigator.userLanguage || window.navigator.language;
  $('html').attr('lang', language);
  // Initialise le plugin pour internationalisation metadata
  Router.plugin('seo');
});

