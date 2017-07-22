Template.profile.helpers({
  username: function(){
    var name = FlowRouter.getParam('username');
    return name;
  },
  uniqueId: function(){
    return Meteor.user();
  },
  userFeed: function(){
    return  Feeds.find();
  }
})
