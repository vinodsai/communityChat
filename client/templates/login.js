Template.login.events({
    'click #login': function(event){
        event.preventDefault();
        var emailVar = $('#loginEmail').val();
        var passwordVar = $('#loginPassword').val();
        Meteor.loginWithPassword(emailVar, passwordVar);
        $('#loginEmail, #loginPassword').val('');
        FlowRouter.go('/');
    }
});
