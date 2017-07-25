Template.friends.helpers({
  userFriends: function(){
    return Friends.find({userId: Meteor.userId()});
  }
})
