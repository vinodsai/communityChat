Template.register.events({
    'click #register': function(event) {
        event.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        var username = $('#username').val();
        Accounts.createUser({
            email: email,
            password: password,
            username: username
        });
        $('#email, #password, username').val('');
        FlowRouter.go('/');
    }
});
