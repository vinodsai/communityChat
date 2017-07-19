Template.messages.helpers({
  allMessages: function(){
    var feed = FlowRouter.getParam('feed');
    Session.set('feedname', feed);
    return Messages.find({category:Session.get('feedname')},{sort: { createdAt: -1 }});
  }
});
