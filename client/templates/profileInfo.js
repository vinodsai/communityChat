Template.profileInfo.helpers({
  originalUser: function(){
    var loginId = Meteor.userId();
    var url = FlowRouter.getParam('_id');
    if(loginId == url){
      return true;
    }else{
      return false;
    }
  }
})
