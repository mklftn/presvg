// Permet d'ajouter les attributs de page pour utiliser polymer
Meteor.startup(function() {

   prerenderio.set('prerenderToken', 'LCt2ABpRIeH9eH1Xfqf');

   	  
  return Inject.rawModHtml('addUnresolved', function(html) {
    return html = html.replace('<body>', '<body unresolved fit layout vertical>');
  });
});