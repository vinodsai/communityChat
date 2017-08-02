Template.chatFeed.helpers({
  feedName: function(){
    var feed = FlowRouter.getParam('feed');
    Session.set('feedname', feed);
    var name = Session.get('feedname')
    return name;
  },
  totalFeedUsers: function(){
    var feed = FlowRouter.getParam('feed');
    return Feeds.find({feed: feed}).count();
  }
});
Template.chatFeed.events({
  'click #my_msg_submit': function(){
    var message = $('#my_msg').val();
    Meteor.call('addMessage', Session.get('feedname'), message);
    // console.log('Your message is submitted');
    $('#my_msg').val('');
  }
});
