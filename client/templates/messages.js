Template.messages.helpers({
  allMessages: function(){
    var feed = FlowRouter.getParam('feed');
    Session.set('feedname', feed);
    return Messages.find({category:Session.get('feedname')},{sort: { createdAt: -1 }});
  },
  msgFromUser:function(){
    var messageId = this.messageOwner;
    var profileUser = Meteor.userId();
    if(messageId == profileUser){
      return 'speech-bubble';
    }
    else{
      return 'speechBubbleUser';
    }
  },
  msgUserName: function(){
    var messageId = this.messageOwner;
    var profileUser = Meteor.userId();
    if(messageId == profileUser){
      return false;
    }
    else{
      return 'msgUserHelper';
    }
  }
});
