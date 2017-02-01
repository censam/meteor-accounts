Template.MainNav.events({
	'click .login-toggle':function(){
		Session.set('nav-toggle' , 'open');
	},
	'click .logout':function(){
		// Meteor.logout();
		AccountsTemplates.logout();
	}
});