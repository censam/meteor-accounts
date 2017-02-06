import moment from 'moment';

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
		return Roles.userIsInRole(this._id, 'admin') ? 'Admin' : '';
	},
	dateFormat : function(){
		return moment(this.createdAt).format('YYYY - DD - MMMM'); 
	},
	editMode : function(){
		return Session.get('clicked_user') ?  'edit-mode' : '';
	},
	currentEdit : function(){
		let user = Session.get('clicked_user');
		return user._id === this._id;
	}
 });

Template.Users.events({
	'click .user_id':function(){
		Session.set('clicked_user', this);
	},
	'click .toggle-admin':function(){
		 Meteor.call('toggleAdmin',this._id);
	},
	'click .close-edit-mode' : function(){
		Session.set('clicked_user', '');
	}
});
