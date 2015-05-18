Emails = new Mongo.Collection('emails');


Emails.allow({
  insert: function(doc) {
  }
 });