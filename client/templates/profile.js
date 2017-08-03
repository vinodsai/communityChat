
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
  profileUser: function(){
    var userId  = Meteor.userId();
    var profileId = FlowRouter.getParam('_id');
    if(userId!=profileId){
      return true;
    }
  },
  sentRequest: function(){
    var userId  = Meteor.userId();
    var profileId = FlowRouter.getParam('_id');
    var areFriends = Friends.find({ $and: [ {friendId: Meteor.userId()}, {userId: profileId}]}).count();
    console.log(areFriends);
    if(areFriends > 0){
      return false;
    }else{
      return true;
    }
  },
  disabled: function(){
    var userId  = Meteor.userId();
    var profileId = FlowRouter.getParam('_id');
    var inNotifications = Notifications.find({ $and: [ {requestFrom: Meteor.userId()}, {requestTo: profileId}]}).count();
    console.log(inNotifications);
    if(inNotifications > 0){
      return 'disabled';
    }else{
      return false;
    }
  },
  // areFriends: function(){
  //
  // }
  userFeeds: function(){
    var userId = FlowRouter.getParam('_id');
    // console.log(userId);
    return Feeds.find({user: userId})
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
