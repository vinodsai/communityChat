Template.notifications.helpers({
  notification: function(){
    return Notifications.find({friendId: Meteor.userId()});
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
