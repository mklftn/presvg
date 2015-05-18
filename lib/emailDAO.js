Meteor.methods({
	insertEmail: function (email) {
		Emails.insert({"email": email});
	}
});