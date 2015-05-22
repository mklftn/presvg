// Manually initialize the router into a nested div

var polymerReady;
polymerReady = new ReactiveVar(false);

$(window).on("polymer-ready", function() {
  return polymerReady.set(true);
});

Meteor.startup(function() {
  $("body").append("<div fit layout vertical iron-router></div>");
  return Tracker.autorun(function() {
    if (polymerReady.get()) {
      Router.insert({
        el: "[iron-router]"
      });
      return Router.start();
    }
  });
});

// Permet d'affecter la bonne langue à la page
Meteor.startup(function() {
  var language = window.navigator.userLanguage || window.navigator.language;
  $('html').attr('lang', language);
});

// Initialise le plugin pour internationalisation metadata
Router.plugin('seo');