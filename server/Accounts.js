var postSignUp = function(userId,info){
        console.log(info.profile.profession);
        console.log(userId);
        Roles.addUsersToRoles(userId,['normal-user',info.profile.profession]);
		// Session.set('nav-toggle','');
		// FlowRouter.go('/');
}

AccountsTemplates.configure({
          postSignUpHook: postSignUp,
});

