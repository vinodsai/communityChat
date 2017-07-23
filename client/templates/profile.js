
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
      console.log(profileId);
      return true;
    }
  }
});
