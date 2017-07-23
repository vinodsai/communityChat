Template.home.events({
  'click #loggedOut': function(event){
        event.preventDefault();
        Meteor.logout();
    }
})
Template.home.helpers({
  uniqueId: function(){
    return Meteor.user();
  }
})
