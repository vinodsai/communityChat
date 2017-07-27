
Template.feed.helpers({
  userFeed: function(){
    return Feeds.find()
  },
  userName: function(){
    return Meteor.user();
  }
})
Template.feed.events({
  'click #feedlogOut': function(event){
    event.preventDefault();
    Meteor.logout();
    FlowRouter.go('/');
  }
})
