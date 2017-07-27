Template.friends.helpers({
  userFriends: function(){
    var id = FlowRouter.getParam('_id');
    return Friends.find({userId: id});
  },
  profileUser: function(){
    var userId = Meteor.userId();
    var id = FlowRouter.getParam('_id');
    if (id == userId){
      return true;
    }else{
      return false;
    }
  }
})
Template.friends.events({
  'click #removeFriend': function(){
  }
})
