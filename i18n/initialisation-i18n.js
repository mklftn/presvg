getUserLanguage = function () {
  // Put here the logic for determining the user language
  var language = window.navigator.userLanguage || window.navigator.language;
  // Pour tester en anglais, désactiver la ligne précédente et activer la suivante :
  //var language = 'en';
  return language;
};

if (Meteor.isClient) {
  Meteor.startup(function () {
    Session.set("showLoadingIndicator", true);

    TAPi18n.setLanguage(getUserLanguage())
    .done(function () {
      Session.set("showLoadingIndicator", false);
    })
    .fail(function (error_message) {
        // Handle the situation
        console.log(error_message);
      });
  });
}