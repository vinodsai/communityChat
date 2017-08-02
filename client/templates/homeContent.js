Template.homeContent.helpers({
  allChannel: function(){
    return Channels.find();
  },
  channelExists(channelId) {
    var userFeeds = Feeds.find({user: Meteor.userId()}).fetch();
    for(var i = 0; i < userFeeds.length; i++) {
      if(userFeeds[i].feedId == channelId) {
        return true;
      }
    }
    return false;
  }
})
Template.homeContent.events({
  'click #addFeed': function(){
    Meteor.call('addToFeed', this.channel, this._id);
  },
  'click #remFeed': function() {
    Meteor.call('removeFeed', this._id);
  }
})
