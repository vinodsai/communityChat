
Template.profile.onRendered(function() {
  Meteor.subscribe('allFriends');
  // counter = 0;
});

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
  },
  profileUser: function(){
    var userId  = Meteor.userId();
    var profileId = FlowRouter.getParam('_id');
    if(userId!=profileId){
      return true;
    }
  },
  sentRequest: function(){
    var friendId = FlowRouter.getParam('_id');
    // var friendObject = Notifications.find({friendId: friendId}).count();
    var friendObject = Notifications.find({ $and: [ {userId: Meteor.userId()}, {friendId: friendId}]}).count();
    if(friendObject>0){
      return false;
    }else{
      return true;
    }
  }
});

Template.profile.events({
  'click #addFriend': function(){
      var friendName = FlowRouter.getParam('username');
      var friendId = FlowRouter.getParam('_id');
      Meteor.call('addNotification', friendName,friendId);
  },
  'click #profileloggedOut': function(event){
    event.preventDefault();
    Meteor.logout();
    FlowRouter.go('/');
  }
})
