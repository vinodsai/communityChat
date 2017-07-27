Template.notifications.helpers({
  notification: function(){
    return Notifications.find({friendId: Meteor.userId()}, {sort: { createdAt: -1 }});
  },
  wasFriend: function(){
    var friendNumber = Friends.find({ $and: [ {userId: Meteor.userId()}, {friendId: this.userId}]}).count();
    if(friendNumber>0)
    {
      return false;
    }
    else{
      return true;
    }
  },
  allUsers: function(){
    return Meteor.users();
  }
})

Template.notifications.events({
  'click #acceptRequest':function(){
    Meteor.call('addFriend', this.userName, this.userId);
    console.log(Meteor.userId());
  },
  'click #rejectRequest': function(){
    Meteor.call('removeNotification', this._id);
  }
})
