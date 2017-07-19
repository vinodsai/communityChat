Meteor.methods({
  addChannel: function(channel){
    Channels.insert({
      channel: channel,
      createdAt: new Date()
    });
  },
  addToFeed: function(channel){
    Feeds.insert({
      feed: channel,
      user: Meteor.userId()
    });
  }

})
