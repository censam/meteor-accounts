Template.Users.onCreated(function(){
	this.autorun(() => {
		this.subscribe('allUsers');
	});
});

Template.Users.helpers({
	users : function(){
		return Meteor.users.find();
	},
	userEmails : function(){
		return this.emails[0].address;
	},
	isAdmin : function(){
		return Roles.userIsInRole(this._id, 'admin') ? 'Admin' : 'Normal';
	}
});
