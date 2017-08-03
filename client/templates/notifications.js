Template.notifications.helpers({
  notification: function(){
    return Notifications.find({requestTo: Meteor.userId()});
  },
  notFriended: function(requestedUserId) {
    var userFriends = Friends.find({ $and: [ {friendId: requestedUserId}, {userId: Meteor.userId()}]}).count();
    // console.log(userFriends);
    // Friends.find({ $and: [ {friendId: requestedUserId}, {userId: Meteor.userId()}]}).count();
    if(userFriends > 0)
    {
      return false;
    }else{
      return true;
    }
  },
  allUsers: function(){
    return Meteor.users();
  }
})
//
Template.notifications.events({
  'click #acceptRequest':function(){
    Meteor.call('addFriend', this.requestFromName, this.requestFrom);
    console.log(Meteor.userId());
  },
  'click #rejectRequest': function(){
    Meteor.call('removeNotification', this._id);
  }
})
